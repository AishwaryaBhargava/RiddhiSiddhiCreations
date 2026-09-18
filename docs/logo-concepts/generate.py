"""Generates the Riddhi Siddhi Creations logo concepts as SVG in three shapes
(circle, rectangle, square), each in a light and a dark colourway, plus an
index.html that previews all six. Run from the repo root:  python docs/logo-concepts/generate.py
"""
from pathlib import Path

OUT = Path(__file__).parent

LIGHT = dict(bg="#FBF6E9", ink="#3C0C54", gold="#C4942F", gold2="#E1B458", henna="#6B3A1E", henna2="#8A4B22", accent="#C0125C")
DARK  = dict(bg="#2E0940", ink="#FBF6E9", gold="#E1B458", gold2="#F3D48A", henna="#C99A6B", henna2="#E1B458", accent="#F26FA5")

FONT_IMPORT = "@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&amp;display=swap');"


def cone(c, scale=1.0, x=0, y=0):
    """Henna cone pointing to the lower-left with a flowing mehndi trail from the tip.
    Local box roughly -40..100 x -10..115; the tip sits at (30,70)."""
    return f"""
<g transform="translate({x} {y}) scale({scale})">
  <!-- cone: drawn tip-at-origin pointing right, then rotated to point lower-left -->
  <g transform="translate(30 70) rotate(-38)">
    <path d="M 0 0 L 74 -12 L 74 12 Z" fill="{c['henna']}"/>
    <path d="M 0 0 L 74 -12 L 74 -4 Z" fill="{c['henna2']}" opacity="0.55"/>
    <path d="M 0 0 L 10 -1.6 L 10 1.6 Z" fill="{c['gold']}"/>
    <path d="M 44 -7 L 44 7" stroke="{c['gold']}" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M 52 -8.2 L 52 8.2" stroke="{c['gold2']}" stroke-width="1.2" stroke-linecap="round" opacity="0.9"/>
    <!-- crimped end -->
    <rect x="72" y="-15" width="10" height="30" rx="2.5" fill="{c['henna2']}" stroke="{c['gold']}" stroke-width="1.2"/>
    <path d="M 75.5 -11 L 75.5 11 M 78.5 -11 L 78.5 11" stroke="{c['gold']}" stroke-width="0.9" opacity="0.8"/>
  </g>
  <!-- mehndi trail from the tip -->
  <path d="M 30 70 C 22 76, 10 74, 6 82 C 2 90, 10 96, 18 92 C 26 88, 22 80, 14 82" fill="none" stroke="{c['henna']}" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M 6 82 C -2 86, -12 84, -16 92" fill="none" stroke="{c['henna']}" stroke-width="1.4" stroke-linecap="round"/>
  <!-- paisley at the end of the trail -->
  <path d="M -16 92 C -26 90, -34 100, -28 108 C -22 114, -12 110, -12 102 C -12 98, -14 95, -16 92 Z" fill="none" stroke="{c['henna']}" stroke-width="1.4"/>
  <path d="M -19 97 C -25 97, -28 103, -24 106 C -20 108, -17 104, -18 100 Z" fill="none" stroke="{c['henna']}" stroke-width="1"/>
  <!-- leaves along the trail -->
  <path d="M 20 74 q 4 -7 11 -5 q -3 7 -11 5 z" fill="{c['henna']}"/>
  <path d="M 10 77 q -7 -3 -9 -10 q 7 2 9 10 z" fill="{c['henna']}"/>
  <path d="M 14 94 q 1 7 -5 11 q -2 -7 5 -11 z" fill="{c['henna']}"/>
  <path d="M -6 84 q -3 -7 3 -11 q 3 6 -3 11 z" fill="{c['henna']}"/>
  <!-- dots -->
  <circle cx="24" cy="84" r="1.5" fill="{c['gold']}"/>
  <circle cx="2" cy="94" r="1.4" fill="{c['gold']}"/>
  <circle cx="-8" cy="100" r="1.2" fill="{c['gold']}"/>
  <circle cx="-30" cy="97" r="1.3" fill="{c['accent']}"/>
  <circle cx="-22" cy="112" r="1.1" fill="{c['gold']}"/>
</g>"""


def petal_fan(c, cx, cy, r, start, end, n, length=22, width=7):
    """A fan of lotus petals sitting on a circle of radius r, angles in degrees (0 = up)."""
    out = []
    step = (end - start) / (n - 1) if n > 1 else 0
    for i in range(n):
        a = start + i * step
        out.append(
            f'<path d="M 0 {-r} Q {width} {-r - length/2} 0 {-r - length} Q {-width} {-r - length/2} 0 {-r} Z" '
            f'fill="none" stroke="{c["gold"]}" stroke-width="1.3" transform="translate({cx} {cy}) rotate({a})"/>'
        )
        out.append(
            f'<path d="M 0 {-r - 4} L 0 {-r - length + 5}" stroke="{c["gold"]}" stroke-width="0.8" opacity="0.7" transform="translate({cx} {cy}) rotate({a})"/>'
        )
        if i % 2 == 1:
            out.append(f'<circle cx="0" cy="{-r - length - 4}" r="1.4" fill="{c["accent"]}" transform="translate({cx} {cy}) rotate({a})"/>')
    return "\n".join(out)


def ornament(c, cx, cy, w=60):
    return f"""
<line x1="{cx - w}" y1="{cy}" x2="{cx - 12}" y2="{cy}" stroke="{c['gold']}" stroke-width="1"/>
<line x1="{cx + 12}" y1="{cy}" x2="{cx + w}" y2="{cy}" stroke="{c['gold']}" stroke-width="1"/>
<rect x="{cx - 3.5}" y="{cy - 3.5}" width="7" height="7" transform="rotate(45 {cx} {cy})" fill="{c['accent']}"/>
<circle cx="{cx - 12}" cy="{cy}" r="1.5" fill="{c['gold']}"/>
<circle cx="{cx + 12}" cy="{cy}" r="1.5" fill="{c['gold']}"/>"""


def corner_vine(c, x, y, flip_x=False, flip_y=False):
    """Mehndi paisley with a short vine, for corners."""
    sx = -1 if flip_x else 1
    sy = -1 if flip_y else 1
    return f"""
<g transform="translate({x} {y}) scale({sx} {sy})">
  <path d="M 6 6 C 26 0, 42 14, 36 30 C 31 42, 14 42, 10 30 C 7 22, 4 14, 6 6 Z" fill="none" stroke="{c['henna']}" stroke-width="1.3"/>
  <path d="M 14 14 C 24 12, 30 20, 27 28 C 24 34, 16 32, 15 26 C 14 22, 13 18, 14 14 Z" fill="none" stroke="{c['henna']}" stroke-width="0.9"/>
  <path d="M 36 30 C 44 34, 50 42, 48 52" fill="none" stroke="{c['henna']}" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M 44 40 q 6 -1 8 5 q -6 1 -8 -5 z" fill="{c['henna']}"/>
  <circle cx="21" cy="22" r="1.6" fill="{c['gold']}"/>
  <circle cx="49" cy="56" r="1.3" fill="{c['gold']}"/>
  <circle cx="3" cy="38" r="1.2" fill="{c['accent']}"/>
</g>"""


def wordmark(c, cx, y, size=40, sub_size=14, anchor="middle", gap=32, spacing=7):
    x = cx
    return f"""
<text x="{x}" y="{y}" text-anchor="{anchor}" font-family="Cinzel, Georgia, serif" font-weight="600" font-size="{size}" fill="{c['ink']}" letter-spacing="1">Riddhi Siddhi</text>
<text x="{x}" y="{y + gap}" text-anchor="{anchor}" font-family="Cinzel, Georgia, serif" font-weight="500" font-size="{sub_size}" fill="{c['gold']}" letter-spacing="{spacing}">CREATIONS</text>"""


def tagline(c, cx, y, size=10, anchor="middle"):
    return f'<text x="{cx}" y="{y}" text-anchor="{anchor}" font-family="Cinzel, Georgia, serif" font-weight="500" font-size="{size}" fill="{c["henna"]}" letter-spacing="4">HENNA ART</text>'


def svg_circle(c):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
<style>{FONT_IMPORT}</style>
<circle cx="200" cy="200" r="200" fill="{c['bg']}"/>
<!-- frame: solid ring + jewelled dotted ring -->
<circle cx="200" cy="200" r="190" fill="none" stroke="{c['gold']}" stroke-width="2"/>
<circle cx="200" cy="200" r="180" fill="none" stroke="{c['gold']}" stroke-width="1.4" stroke-dasharray="1 6" stroke-linecap="round"/>
<!-- cone emblem, top -->
{cone(c, scale=1.0, x=178, y=28)}
<!-- wordmark, centre -->
{wordmark(c, 200, 214, size=38, sub_size=13, gap=30)}
{ornament(c, 200, 262, w=44)}
{tagline(c, 200, 287)}
<!-- petal crown, bottom arc -->
{petal_fan(c, 200, 200, 128, 132, 228, 9, length=20, width=6)}
</svg>"""


def svg_rect(c):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 300" width="900" height="300">
<style>{FONT_IMPORT}</style>
<rect width="900" height="300" fill="{c['bg']}"/>
<!-- hairline frame with inner dotted line -->
<rect x="14" y="14" width="872" height="272" fill="none" stroke="{c['gold']}" stroke-width="1.6"/>
<rect x="22" y="22" width="856" height="256" fill="none" stroke="{c['gold']}" stroke-width="1" stroke-dasharray="1 5" stroke-linecap="round" opacity="0.9"/>
<!-- medallion, left -->
<circle cx="160" cy="150" r="104" fill="none" stroke="{c['gold']}" stroke-width="1.6"/>
<circle cx="160" cy="150" r="94" fill="none" stroke="{c['gold']}" stroke-width="1.2" stroke-dasharray="1 6" stroke-linecap="round"/>
{petal_fan(c, 160, 150, 64, 140, 220, 7, length=14, width=4.5)}
{cone(c, scale=1.1, x=140, y=62)}
<!-- divider -->
<line x1="300" y1="70" x2="300" y2="230" stroke="{c['gold']}" stroke-width="1"/>
<rect x="296.5" y="146.5" width="7" height="7" transform="rotate(45 300 150)" fill="{c['accent']}"/>
<!-- wordmark, right -->
{wordmark(c, 340, 150, size=66, sub_size=22, anchor="start", gap=48, spacing=12)}
<line x1="342" y1="222" x2="520" y2="222" stroke="{c['gold']}" stroke-width="1"/>
{tagline(c, 534, 226, size=14, anchor="start")}
<!-- corner vines -->
{corner_vine(c, 34, 30)}
{corner_vine(c, 866, 270, flip_x=True, flip_y=True)}
</svg>"""


def svg_square(c):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
<style>{FONT_IMPORT}</style>
<rect width="400" height="400" fill="{c['bg']}"/>
<rect x="14" y="14" width="372" height="372" fill="none" stroke="{c['gold']}" stroke-width="1.6"/>
<rect x="22" y="22" width="356" height="356" fill="none" stroke="{c['gold']}" stroke-width="1" stroke-dasharray="1 5" stroke-linecap="round" opacity="0.9"/>
<!-- medallion, top -->
<circle cx="200" cy="128" r="84" fill="none" stroke="{c['gold']}" stroke-width="1.4"/>
<circle cx="200" cy="128" r="75" fill="none" stroke="{c['gold']}" stroke-width="1.1" stroke-dasharray="1 6" stroke-linecap="round"/>
{petal_fan(c, 200, 128, 50, 140, 220, 7, length=12, width=4)}
{cone(c, scale=0.9, x=182, y=56)}
<!-- wordmark, bottom -->
{wordmark(c, 200, 262, size=36, sub_size=13, gap=30)}
{ornament(c, 200, 308, w=48)}
{tagline(c, 200, 334)}
<!-- corner fans -->
{petal_fan(c, 14, 14, 26, 112, 158, 3, length=11, width=3.5)}
{petal_fan(c, 386, 14, 26, 202, 248, 3, length=11, width=3.5)}
{petal_fan(c, 386, 386, 26, 292, 338, 3, length=11, width=3.5)}
{petal_fan(c, 14, 386, 26, 22, 68, 3, length=11, width=3.5)}
</svg>"""


def main():
    files = {}
    for name, fn in (("circle", svg_circle), ("rectangle", svg_rect), ("square", svg_square)):
        for tone, pal in (("light", LIGHT), ("dark", DARK)):
            fname = f"logo-{name}-{tone}.svg"
            (OUT / fname).write_text(fn(pal), encoding="utf-8")
            files[(name, tone)] = fname

    cards = []
    for name in ("circle", "rectangle", "square"):
        for tone in ("light", "dark"):
            svg = (OUT / files[(name, tone)]).read_text(encoding="utf-8")
            cards.append(f'<figure id="{name}-{tone}" class="{name}"><figcaption>{name} · {tone}</figcaption>{svg}</figure>')

    html = f"""<!doctype html><html><head><meta charset="utf-8"><title>Logo concepts</title>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&display=swap" rel="stylesheet">
<style>
body{{margin:0;padding:32px;background:#e9e2d6;font-family:Cinzel,serif;color:#3C0C54}}
.grid{{display:grid;grid-template-columns:1fr 1fr;gap:28px;max-width:1500px}}
figure{{margin:0;background:#fff;padding:18px;box-shadow:0 8px 30px rgba(60,12,84,.12)}}
figure.rectangle{{grid-column:1/-1}}
figcaption{{font-size:12px;letter-spacing:3px;text-transform:uppercase;margin-bottom:12px;opacity:.7}}
svg{{width:100%;height:auto;display:block}}
figure.circle svg,figure.square svg{{max-width:420px;margin:0 auto}}
</style></head><body><div class="grid">{''.join(cards)}</div></body></html>"""
    (OUT / "index.html").write_text(html, encoding="utf-8")
    print("wrote", ", ".join(sorted(files.values())), "and index.html")


if __name__ == "__main__":
    main()
