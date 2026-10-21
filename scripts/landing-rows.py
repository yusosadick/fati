"""List vertical bands of non-background pixels in an x-range, ref vs mine.
usage: python3 scripts/landing-rows.py y0 y1 x0 x1 [thresh]
"""
import sys
from PIL import Image

y0, y1, x0, x1 = map(int, sys.argv[1:5])
th = int(sys.argv[5]) if len(sys.argv) > 5 else 40


def bands(path):
    im = Image.open(path).convert("L")
    ink = []
    for y in range(y0, y1):
        row = list(im.crop((x0, y, x1, y + 1)).getdata())
        bg = sorted(row)[len(row) // 2]
        ink.append(any(abs(v - bg) > th for v in row))
    out, start = [], None
    for i, v in enumerate(ink):
        if v and start is None:
            start = i
        if not v and start is not None:
            out.append((y0 + start, y0 + i - 1))
            start = None
    if start is not None:
        out.append((y0 + start, y1 - 1))
    return out


a = bands("docs/landing-inspiration.webp")
b = bands("scripts/out/landing.png")
print(f"{'ref':>14} {'mine':>14}  dy(top) dh")
for i in range(max(len(a), len(b))):
    ra = a[i] if i < len(a) else None
    rb = b[i] if i < len(b) else None
    dy = (rb[0] - ra[0]) if ra and rb else ""
    dh = ((rb[1] - rb[0]) - (ra[1] - ra[0])) if ra and rb else ""
    print(f"{str(ra):>14} {str(rb):>14}  {dy:>5} {dh:>3}")
