"""Compare scripts/out/landing.png against docs/landing-inspiration.webp.

usage:
  python3 scripts/landing-compare.py                 # per-section scores
  python3 scripts/landing-compare.py y0 y1 [x0 x1]   # stacked ref/mine crop + diff -> scripts/out/cmp.png
"""
import sys
from PIL import Image, ImageChops, ImageFilter, ImageStat, ImageDraw

REF = "docs/landing-inspiration.webp"
MINE = "scripts/out/landing.png"
OUT = "scripts/out/cmp.png"

ref = Image.open(REF).convert("RGB")
mine = Image.open(MINE).convert("RGB")
W = min(ref.width, mine.width)
ref = ref.crop((120,0,1560,ref.height)); mine = mine.crop((120,0,1560,mine.height)); W = 1440

SECTIONS = [
    ("nav+hero", 120, 745),
    ("browser", 745, 1430),
    ("clients", 1430, 1620),
    ("capabilities-head", 1620, 1900),
    ("capabilities", 1900, 2400),
    ("how head", 2500, 2720),
    ("how cards", 2740, 3080),
    ("pricing head", 3200, 3700),
    ("pricing cards", 3700, 4100),
    ("proof head", 4200, 4520),
    ("testimonial", 4520, 4980),
    ("faq", 5080, 6200),
    ("integrations", 6250, 7200),
    ("insights", 7200, 7940),
    ("footer", 7960, 8420),
]


def score(a, b):
    a = a.filter(ImageFilter.GaussianBlur(1.2))
    b = b.filter(ImageFilter.GaussianBlur(1.2))
    return ImageStat.Stat(ImageChops.difference(a, b).convert("L")).mean[0]


if len(sys.argv) >= 3:
    y0, y1 = int(sys.argv[1]), int(sys.argv[2])
    x0, x1 = (int(sys.argv[3]), int(sys.argv[4])) if len(sys.argv) >= 5 else (0, W)
    a = ref.crop((x0, y0, x1, y1))
    b = mine.crop((x0, y0, x1, y1))
    d = ImageChops.difference(a, b).convert("L").point(lambda v: min(255, v * 4))
    w, h = a.size
    out = Image.new("RGB", (w, h * 3 + 8), (255, 0, 255))
    out.paste(a, (0, 0))
    out.paste(b, (0, h + 4))
    out.paste(d.convert("RGB"), (0, 2 * h + 8))
    out.save(OUT)
    print("saved", OUT, out.size, "score", round(score(a, b), 2))
else:
    print("ref", ref.size, "mine", mine.size)
    tot = []
    for name, y0, y1 in SECTIONS:
        s = score(ref.crop((0, y0, W, y1)), mine.crop((0, y0, W, y1)))
        tot.append(s)
        print(f"{name:20s} {y0:5d}-{y1:5d}  {s:5.2f}")
    print("mean", round(sum(tot) / len(tot), 2))
