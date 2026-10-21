"""Compare scripts/out/shot.png with the inspiration's screen region.

usage:
  python3 scripts/compare.py                      # overall + per-region diff, writes side/diff images
  python3 scripts/compare.py x y w h [scale]      # zoomed side-by-side crop (screen coords)
"""
import sys
from PIL import Image, ImageChops, ImageFilter, ImageStat

INSPO = "docs/dashbaord-inspiration.webp"
SHOT = "scripts/out/shot.png"
SCREEN = (93, 90, 1107, 810)  # screen region inside the device bezel (1014x720)

REGIONS = {
    "sidebar": (18, 18, 206, 702),
    "header": (224, 18, 996, 74),
    "stats": (224, 91, 600, 343),
    "revenue": (612, 91, 996, 343),
    "retention": (224, 356, 473, 588),
    "leads": (485, 356, 734, 588),
    "schedule": (747, 356, 996, 588),
    "table": (224, 600, 996, 720),
}

inspo = Image.open(INSPO).convert("RGB").crop(SCREEN)
shot = Image.open(SHOT).convert("RGB")
assert inspo.size == shot.size, (inspo.size, shot.size)


def score(a, b):
    # The inspiration is a downscaled raster, so compare softened copies to ignore sub-pixel text rendering.
    a = a.filter(ImageFilter.GaussianBlur(1.2))
    b = b.filter(ImageFilter.GaussianBlur(1.2))
    d = ImageChops.difference(a, b).convert("L")
    return ImageStat.Stat(d).mean[0]


if len(sys.argv) >= 5:
    x, y, w, h = map(int, sys.argv[1:5])
    s = int(sys.argv[5]) if len(sys.argv) > 5 else 3
    box = (x, y, x + w, y + h)
    a = inspo.crop(box).resize((w * s, h * s), Image.LANCZOS)
    b = shot.crop(box).resize((w * s, h * s), Image.LANCZOS)
    vertical = w * s > 900
    canvas = Image.new("RGB", (a.width, a.height * 2 + 6) if vertical else (a.width * 2 + 6, a.height), "#f0f")
    canvas.paste(a, (0, 0))
    canvas.paste(b, (0, a.height + 6) if vertical else (a.width + 6, 0))
    canvas.save("scripts/out/zoom.png")
    print("zoom.png  inspiration first, render second; mean diff %.2f" % score(inspo.crop(box), shot.crop(box)))
    sys.exit()

diff = ImageChops.difference(inspo, shot)
diff = diff.point(lambda v: min(255, v * 4))
diff.save("scripts/out/diff.png")
side = Image.new("RGB", (inspo.width * 2 + 6, inspo.height), "#f0f")
side.paste(inspo, (0, 0))
side.paste(shot, (inspo.width + 6, 0))
side.save("scripts/out/side.png")

print("overall mean abs diff: %.2f / 255" % score(inspo, shot))
for name, box in REGIONS.items():
    print("  %-10s %.2f" % (name, score(inspo.crop(box), shot.crop(box))))
