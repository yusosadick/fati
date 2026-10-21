"""Print y positions where pixel colour changes along a column. usage: edges.py x y0 y1 [min_delta]"""
import sys
from PIL import Image
x, y0, y1 = map(int, sys.argv[1:4]); md = int(sys.argv[4]) if len(sys.argv) > 4 else 6
def edges(p):
    im = Image.open(p).convert("RGB"); out = []; prev = im.getpixel((x, y0))
    for y in range(y0 + 1, y1):
        c = im.getpixel((x, y))
        if max(abs(c[i] - prev[i]) for i in range(3)) >= md:
            out.append((y, '#%02x%02x%02x' % c))
        prev = c
    return out
a = edges("docs/landing-inspiration.webp"); b = edges("scripts/out/landing.png")
print("ref :", a[:40]); print("mine:", b[:40])
