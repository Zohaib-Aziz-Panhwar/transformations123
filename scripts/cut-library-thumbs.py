"""Copy the library thumbnails across, trimmed to the artwork.

There is nothing to cut out. The source PNGs are already transparent: the
booklet is opaque, the surround has alpha 0, and the green everyone sees is
just the colour left sitting in those transparent pixels. Flattening them to
JPEG is what turned that green into a visible square, and the colour-keying
that followed was chewing the grey frame off the covers.

So the pixels are kept exactly as they are. The only change is a crop to the
opaque bounds plus a small margin, and a palette-to-RGBA conversion so the
alpha survives.
"""
import io
import os
import re
import ssl
import sys
import time
import urllib.error
import urllib.request

from PIL import Image

lib_html, outdir = sys.argv[1], sys.argv[2]
os.makedirs(outdir, exist_ok=True)

ARCHIVE = 'https://transformations123.com/old-site/wp-content/uploads/'
MARGIN = 6


def to_archive(u):
    m = re.search(r'/wp-content/uploads/(.+?)(?:\?|$)', u)
    return ARCHIVE + m.group(1) if m else u


def fetch(u, tries=4):
    for a in range(tries):
        try:
            req = urllib.request.Request(u, headers={'User-Agent': 'content-migration',
                                                     'Connection': 'close'})
            with urllib.request.urlopen(req, timeout=90) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code in (403, 404):
                return None
            time.sleep(2 ** a)
        except (urllib.error.URLError, ConnectionResetError, ssl.SSLError,
                TimeoutError, OSError):
            time.sleep(2 ** a)
    return None


def trim(im):
    """Crop to what is actually drawn, leaving a little air around it."""
    im = im.convert('RGBA')
    box = im.getchannel('A').getbbox()
    if not box:
        return im
    l, t, r, b = box
    w, h = im.size
    return im.crop((max(0, l - MARGIN), max(0, t - MARGIN),
                    min(w, r + MARGIN), min(h, b + MARGIN)))


page = io.open(lib_html, encoding='utf-8', errors='replace').read()
done = 0
for m in re.finditer(r'<img[^>]*?255[^>]*?>', page):
    tag = m.group(0)
    alt = (re.search(r'alt="([^"]*)"', tag) or [None, ''])[1]
    src = (re.search(r'src="([^"]+)"', tag) or [None, ''])[1]
    if not src:
        continue
    data = fetch(to_archive(src))
    if not data:
        print('  MISSING', alt[:40])
        continue

    im = Image.open(io.BytesIO(data))
    im.load()
    out = trim(im)

    name = re.sub(r'[^a-z0-9]+', '-', alt.lower()).strip('-')[:40] + '.png'
    out.save(os.path.join(outdir, name), 'PNG', optimize=True)
    kb = os.path.getsize(os.path.join(outdir, name)) / 1024
    print('  %-44s %sx%-4s -> %sx%-4s  %4.0f KB' %
          (name[:42], im.size[0], im.size[1], out.size[0], out.size[1], kb))
    done += 1

print('\ncopied:', done)
