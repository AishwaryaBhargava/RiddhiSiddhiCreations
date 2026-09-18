"""Round 2 logo concepts: ornate, illustrative, mehndi-inspired.
Three directions (monogram wreath, mandala with drops, henna hand), each rendered in
two palettes. Run from repo root:  python docs/logo-concepts/generate2.py
Outputs go to docs/logo-concepts/round2/.
"""
import math
from pathlib import Path

OUT = Path(__file__).parent / "round2"
OUT.mkdir(exist_ok=True)

FONTS = "@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&amp;family=Cinzel:wght@500;600;700&amp;family=Cormorant+Garamond:wght@500;600;700&amp;display=swap');"

PALETTES = {
    "henna":  dict(bg="#FDF6EC", wash="#F3DED0", ink="#5C2E12", ink2="#8C4A22", gold="#C9963B", gold2="#E4C27A", leaf="#B98A6A", leaf2="#D9B4A0", accent="#8C3B2A"),
    "wine":   dict(bg="#F9F2EB", wash="#EFD9D6", ink="#6B1F3A", ink2="#8E3553", gold="#C58F5A", gold2="#E3B98C", leaf="#B36A78", leaf2="#DFB2B8", accent="#3E0F22"),
    "teal":   dict(bg="#F5F2EA", wash="#DCE6E2", ink="#17505A", ink2="#2A7078", gold="#B8742F", gold2="#DDAA6A", leaf="#6E9C94", leaf2="#B3CFC8", accent="#0F3A42"),
    "sage":   dict(bg="#F7F2E8", wash="#E7E5D3", ink="#9A4A2E", ink2="#B96A48", gold="#B58A3C", gold2="#DCBB7A", leaf="#8FA88C", leaf2="#C4D3BF", accent="#5B2E1E"),
}


# ───────────────────────── primitives ─────────────────────────

def petal(cx, cy, r_in, length, width, angle, fill, inner=None, dot=None, stroke=None):
    """Lotus petal on a circle of radius r_in, pointing outward at `angle` degrees (0 = up)."""
    tip = -r_in - length
    s = f'<g transform="translate({cx} {cy}) rotate({angle})">'
    s += f'<path d="M 0 {-r_in} C {width} {-r_in - length*0.35} {width*0.9} {tip + length*0.35} 0 {tip} C {-width*0.9} {tip + length*0.35} {-width} {-r_in - length*0.35} 0 {-r_in} Z" fill="{fill}"'
    s += f' stroke="{stroke}" stroke-width="1"' if stroke else ''
    s += '/>'
    if inner:
        w2, l2 = width * 0.5, length * 0.62
        base = -r_in - length * 0.16
        s += f'<path d="M 0 {base} C {w2} {base - l2*0.35} {w2*0.9} {base - l2 + l2*0.35} 0 {base - l2} C {-w2*0.9} {base - l2 + l2*0.35} {-w2} {base - l2*0.35} 0 {base} Z" fill="{inner}"/>'
    if dot:
        s += f'<circle cx="0" cy="{-r_in - length*0.42}" r="{max(1.2, width*0.16)}" fill="{dot}"/>'
    s += '</g>'
    return s


def dot_ring(cx, cy, r, n, size, fill, offset=0):
    return "".join(
        f'<circle cx="{cx + r*math.sin(math.radians(offset + i*360/n)):.2f}" cy="{cy - r*math.cos(math.radians(offset + i*360/n)):.2f}" r="{size}" fill="{fill}"/>'
        for i in range(n)
    )


def teardrop(cx, cy, w, h, fill, inner=None, angle=0):
    s = f'<g transform="translate({cx} {cy}) rotate({angle})">'
    s += f'<path d="M 0 {-h/2} C {w/2} {-h/6} {w/2} {h/2.6} 0 {h/2} C {-w/2} {h/2.6} {-w/2} {-h/6} 0 {-h/2} Z" fill="{fill}"/>'
    if inner:
        s += f'<path d="M 0 {-h/2*0.55} C {w/2*0.5} {-h/6*0.5} {w/2*0.5} {h/2.6*0.5} 0 {h/2*0.5} C {-w/2*0.5} {h/2.6*0.5} {-w/2*0.5} {-h/6*0.5} 0 {-h/2*0.55} Z" fill="{inner}"/>'
    s += '</g>'
    return s


def mandala(c, cx, cy, scale=1.0, ink=None, bg=None, drops=True):
    """Dense radial mandala in one ink colour with cut-outs in the background colour,
    plus hanging jhumka-style drop chains below (like a chandelier earring)."""
    ink = ink or c["ink"]
    bg = bg or c["bg"]
    s = f'<g transform="translate({cx} {cy}) scale({scale})">'
    # outer crown of 16 pointed petals
    for i in range(16):
        s += petal(0, 0, 96, 30, 9, i * 22.5, ink, inner=bg, dot=ink)
    s += dot_ring(0, 0, 100, 32, 1.6, ink, offset=11.25)
    s += dot_ring(0, 0, 134, 16, 2.4, ink, offset=11.25)
    # ring of 8 big scalloped petals with inner detail
    for i in range(8):
        s += petal(0, 0, 44, 50, 22, i * 45, ink, inner=bg)
        s += petal(0, 0, 50, 34, 12, i * 45, ink, inner=bg, dot=ink)
    # 8 small petals between
    for i in range(8):
        s += petal(0, 0, 58, 22, 7, i * 45 + 22.5, ink, dot=bg)
    s += dot_ring(0, 0, 60, 24, 1.8, ink)
    # inner lotus
    for i in range(8):
        s += petal(0, 0, 14, 30, 12, i * 45 + 22.5, ink, inner=bg, dot=ink)
    s += f'<circle cx="0" cy="0" r="16" fill="{ink}"/><circle cx="0" cy="0" r="10" fill="{bg}"/><circle cx="0" cy="0" r="5" fill="{ink}"/>'
    if drops:
        # hanging chains: centre longest, symmetrical pairs shorter
        chains = [(0, 150, 14, 24), (-40, 118, 10, 18), (40, 118, 10, 18), (-78, 84, 8, 14), (78, 84, 8, 14), (-108, 40, 6, 10), (108, 40, 6, 10)]
        for x, length, w, h in chains:
            y0 = 128 - abs(x) * 0.45
            n = max(2, int(length / 14))
            for k in range(n):
                s += f'<circle cx="{x}" cy="{y0 + k*14}" r="{2.6 - k*0.15}" fill="{ink}"/>'
            s += teardrop(x, y0 + n * 14 + h / 2 + 2, w, h, ink, inner=bg if w >= 10 else None)
        s += teardrop(0, 128 + 150 + 12 + 30, 22, 38, ink, inner=bg)
        s += f'<circle cx="0" cy="{128 + 150 + 12 + 30}" r="3" fill="{ink}"/>'
    s += '</g>'
    return s


def paisley(c, cx, cy, size=40, angle=0, ink=None):
    ink = ink or c["ink"]
    k = size / 40
    s = f'<g transform="translate({cx} {cy}) rotate({angle}) scale({k})">'
    s += f'<path d="M 0 -20 C 18 -22 30 -6 24 12 C 20 26 4 32 -4 22 C -10 14 -12 4 -8 -4 C -4 -12 -6 -18 0 -20 Z" fill="none" stroke="{ink}" stroke-width="1.6"/>'
    s += f'<path d="M 0 -20 C 18 -22 30 -6 24 12 C 20 26 4 32 -4 22 C -10 14 -12 4 -8 -4 C -4 -12 -6 -18 0 -20 Z" fill="none" stroke="{ink}" stroke-width="1" stroke-dasharray="0.1 3.2" stroke-linecap="round" transform="scale(1.18)"/>'
    s += f'<path d="M 2 -10 C 12 -11 18 0 14 10 C 11 18 2 20 -2 14 C -5 9 -5 2 -2 -3 C 0 -7 -1 -9 2 -10 Z" fill="{ink}"/>'
    s += f'<path d="M 2 -6 C 8 -6 12 1 9 8 C 7 12 3 13 1 9 C -1 6 -1 1 1 -2 Z" fill="{c["bg"]}"/>'
    s += f'<circle cx="4" cy="2" r="1.8" fill="{ink}"/>'
    s += f'<path d="M -4 22 C -10 30 -20 34 -28 32" fill="none" stroke="{ink}" stroke-width="1.4" stroke-linecap="round"/>'
    s += f'<circle cx="-30" cy="33" r="1.6" fill="{ink}"/>'
    s += '</g>'
    return s


def sprig(c, x, y, angle=0):
    """Small three-leaf sprig with gold berries, for filling gaps."""
    s = f'<g transform="translate({x} {y}) rotate({angle})">'
    s += f'<path d="M 0 0 C 6 -10 10 -20 8 -34" fill="none" stroke="{c["leaf"]}" stroke-width="1.4" stroke-linecap="round"/>'
    for (px, py, rot, L, fill) in [(3, -12, -50, 14, c["leaf"]), (6, -22, 40, 12, c["leaf2"]), (8, -34, -10, 12, c["leaf"])]:
        s += f'<g transform="translate({px} {py}) rotate({rot})"><path d="M 0 0 C 5 {-L*0.35} 4 {-L*0.8} 0 {-L} C -4 {-L*0.8} -5 {-L*0.35} 0 0 Z" fill="{fill}"/></g>'
    s += f'<circle cx="1" cy="-6" r="2" fill="{c["gold"]}"/><circle cx="11" cy="-28" r="1.6" fill="{c["gold"]}"/>'
    s += '</g>'
    return s


def wreath_arc(c, cx, cy, r, a0, a1, leaves=14, side=1, leaf_len=22, leaf_w=8):
    """Leafy vine along an arc from angle a0 to a1 (degrees, 0 = up, clockwise).
    Leaves alternate inside/outside, two tones for a watercolour feel."""
    s = ""
    def pt(a, rr):
        return cx + rr * math.sin(math.radians(a)), cy - rr * math.cos(math.radians(a))
    x0, y0 = pt(a0, r); x1, y1 = pt(a1, r)
    large = 1 if abs(a1 - a0) > 180 else 0
    sweep = 1 if a1 > a0 else 0
    s += f'<path d="M {x0:.1f} {y0:.1f} A {r} {r} 0 {large} {sweep} {x1:.1f} {y1:.1f}" fill="none" stroke="{c["leaf"]}" stroke-width="1.6" stroke-linecap="round"/>'
    for i in range(leaves):
        t = (i + 0.5) / leaves
        a = a0 + (a1 - a0) * t
        x, y = pt(a, r)
        flip = 1 if i % 2 == 0 else -1
        tangent = a + 90 * sweep - 90 * (1 - sweep)
        rot = tangent + flip * 48 * side
        L = leaf_len * (0.7 + 0.6 * math.sin(math.pi * t))
        W = leaf_w * (0.7 + 0.6 * math.sin(math.pi * t))
        fill = c["leaf"] if i % 3 else c["leaf2"]
        s += f'<g transform="translate({x:.1f} {y:.1f}) rotate({rot:.1f})"><path d="M 0 0 C {W} {-L*0.35} {W*0.7} {-L*0.8} 0 {-L} C {-W*0.7} {-L*0.8} {-W} {-L*0.35} 0 0 Z" fill="{fill}"/><path d="M 0 -2 L 0 {-L+3}" stroke="{c["bg"]}" stroke-width="0.8" opacity="0.7"/></g>'
        if i % 4 == 1:
            bx, by = pt(a, r + (8 if flip > 0 else -8) * side)
            s += f'<circle cx="{bx:.1f}" cy="{by:.1f}" r="2.4" fill="{c["gold"]}"/>'
    return s


def hand(c, cx, cy, scale=1.0, angle=-14):
    """Stylised open hand (back of hand) with mehndi: mandala on the back, finger bands,
    dots on the tips and a vine at the wrist. Local box ~ 0..100 x 0..170, wrist at bottom."""
    ink, skin = c["ink"], c["wash"]
    s = f'<g transform="translate({cx} {cy}) rotate({angle}) scale({scale}) translate(-50 -85)">'
    # silhouette: palm + tapered fingers + thumb (union by same fill)
    fingers = [(24, 22, 14, 62), (40, 8, 15, 76), (57, 14, 14, 70), (73, 34, 12, 52)]
    s += f'<path d="M 20 84 C 18 70 26 66 32 66 L 82 68 C 90 70 92 82 90 98 L 88 138 C 86 154 74 164 56 164 C 40 164 28 154 26 138 Z" fill="{skin}" stroke="{ink}" stroke-width="1.6"/>'
    def finger(x, y, w, h):
        tw = w * 0.78  # tip width
        dx = (w - tw) / 2
        return (f'<path d="M {x} {y+h} L {x+dx} {y+tw/2} C {x+dx} {y-1} {x+w-dx} {y-1} {x+w-dx} {y+tw/2} '
                f'L {x+w} {y+h} Z" fill="{skin}" stroke="{ink}" stroke-width="1.6" stroke-linejoin="round"/>')
    for f in fingers:
        s += finger(*f)
    # thumb: leans out to the left
    s += f'<path d="M 26 92 C 14 84 0 90 0 104 C 0 116 10 124 22 120" fill="{skin}" stroke="{ink}" stroke-width="1.6" stroke-linecap="round"/>'
    # cover inner seams
    for x, y, w, h in fingers:
        s += f'<rect x="{x+1}" y="{y+h-12}" width="{w-2}" height="16" fill="{skin}"/>'
    s += f'<path d="M 26 92 C 18 96 20 116 26 118 Z" fill="{skin}"/>'
    # mehndi: fingertip caps and bands
    for x, y, w, h in fingers:
        mx = x + w / 2
        s += f'<path d="M {x+1} {y+16} C {x+2} {y+4} {x+w-2} {y+4} {x+w-1} {y+16} Z" fill="{ink}"/>'
        s += f'<line x1="{x+1.5}" y1="{y+28}" x2="{x+w-1.5}" y2="{y+28}" stroke="{ink}" stroke-width="1.3"/>'
        s += f'<line x1="{x+1.5}" y1="{y+32}" x2="{x+w-1.5}" y2="{y+32}" stroke="{ink}" stroke-width="0.8"/>'
        s += f'<circle cx="{mx}" cy="{y+40}" r="1.6" fill="{ink}"/><circle cx="{mx}" cy="{y+46}" r="1.2" fill="{ink}"/>'
        s += f'<path d="M {x+2} {y+56} Q {mx} {y+50} {x+w-2} {y+56}" fill="none" stroke="{ink}" stroke-width="1"/>'
    # back-of-hand mandala
    s += mandala(c, 56, 112, scale=0.16, ink=ink, bg=skin, drops=False)
    s += dot_ring(56, 112, 30, 16, 1.1, ink)
    # vine to wrist
    s += f'<path d="M 44 140 C 50 150 62 152 70 146" fill="none" stroke="{ink}" stroke-width="1.2"/>'
    s += f'<path d="M 30 158 L 82 158 M 32 162 L 80 162" stroke="{ink}" stroke-width="1"/>'
    s += dot_ring(56, 150, 0, 1, 1.5, ink)
    for i in range(6):
        s += f'<circle cx="{34 + i*8.8}" cy="154" r="1.1" fill="{ink}"/>'
    # thumb detail
    s += f'<path d="M 6 100 C 10 98 14 100 16 104" fill="none" stroke="{ink}" stroke-width="1"/>'
    s += '</g>'
    return s


def script(text, x, y, size, fill, anchor="middle"):
    return f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-family="Great Vibes, cursive" font-size="{size}" fill="{fill}">{text}</text>'


def caps(text, x, y, size, fill, spacing=6, anchor="middle", weight=600, family="Cinzel"):
    return f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-family="{family}, Georgia, serif" font-weight="{weight}" font-size="{size}" fill="{fill}" letter-spacing="{spacing}">{text}</text>'


def small_ornament(c, cx, cy, w=40):
    return (f'<line x1="{cx-w}" y1="{cy}" x2="{cx-8}" y2="{cy}" stroke="{c["gold"]}" stroke-width="1"/>'
            f'<line x1="{cx+8}" y1="{cy}" x2="{cx+w}" y2="{cy}" stroke="{c["gold"]}" stroke-width="1"/>'
            f'<circle cx="{cx}" cy="{cy}" r="2.2" fill="{c["gold"]}"/><circle cx="{cx-w}" cy="{cy}" r="1.3" fill="{c["gold"]}"/><circle cx="{cx+w}" cy="{cy}" r="1.3" fill="{c["gold"]}"/>')


# ───────────────────────── concepts ─────────────────────────

def concept_monogram(c):
    """A: interlocked RS monogram, script name, leafy wreath, gold ring. Circle-native."""
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
<style>{FONTS}</style>
<rect width="500" height="500" fill="{c['bg']}"/>
<circle cx="250" cy="250" r="230" fill="{c['wash']}" opacity="0.55"/>
<circle cx="250" cy="250" r="205" fill="none" stroke="{c['gold']}" stroke-width="2"/>
<circle cx="250" cy="250" r="205" fill="none" stroke="{c['gold2']}" stroke-width="6" stroke-dasharray="120 420" stroke-linecap="round" opacity="0.6"/>
<circle cx="250" cy="250" r="196" fill="none" stroke="{c['gold']}" stroke-width="1" stroke-dasharray="0.1 5" stroke-linecap="round"/>
{wreath_arc(c, 250, 250, 205, 200, 330, leaves=16, side=1, leaf_len=24, leaf_w=9)}
{wreath_arc(c, 250, 250, 205, 20, 95, leaves=9, side=-1, leaf_len=18, leaf_w=7)}
{sprig(c, 372, 150, angle=200)}
{sprig(c, 128, 352, angle=20)}
<!-- monogram -->
{caps("R", 214, 258, 168, c['gold'], spacing=0, weight=700)}
{caps("S", 300, 258, 168, c['ink'], spacing=0, weight=700)}
<!-- name -->
{script("Riddhi Siddhi", 250, 328, 58, c['ink'])}
{caps("CREATIONS", 250, 356, 13, c['ink2'], spacing=8)}
{small_ornament(c, 250, 372, 46)}
{caps("HENNA ART", 250, 392, 10, c['gold'], spacing=5, weight=500)}
</svg>"""


def concept_mandala(c):
    """B: dense mandala with hanging drops, single ink colour, name in caps + script tagline. Vertical lockup."""
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 700" width="500" height="700">
<style>{FONTS}</style>
<rect width="500" height="700" fill="{c['bg']}"/>
<!-- extra outer lace: scalloped dotted arcs and tiny petals to densify -->
{dot_ring(250, 196, 152, 48, 1.3, c['ink'], offset=3.75)}
{"".join(petal(250, 196, 140, 12, 3.5, i*7.5 + 3.75, c['ink']) for i in range(48) if i % 3 == 0)}
{mandala(c, 250, 196, scale=1.0)}
{caps("RIDDHI SIDDHI", 250, 600, 34, c['ink'], spacing=4, weight=700)}
{caps("CREATIONS", 250, 626, 14, c['ink2'], spacing=9)}
<line x1="150" y1="650" x2="212" y2="650" stroke="{c['ink']}" stroke-width="2"/>
<line x1="288" y1="650" x2="350" y2="650" stroke="{c['ink']}" stroke-width="2"/>
{script("henna art", 250, 657, 26, c['gold'])}
</svg>"""


def concept_hand(c):
    """C: decorated hand rising through a gold ring, monogram behind, script name, wreath. Circle-native."""
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
<style>{FONTS}</style>
<rect width="500" height="500" fill="{c['bg']}"/>
<circle cx="250" cy="250" r="230" fill="{c['wash']}" opacity="0.5"/>
<circle cx="250" cy="250" r="204" fill="none" stroke="{c['gold']}" stroke-width="1.8"/>
<circle cx="250" cy="250" r="204" fill="none" stroke="{c['gold2']}" stroke-width="5" stroke-dasharray="90 560" stroke-dashoffset="-40" stroke-linecap="round" opacity="0.6"/>
{wreath_arc(c, 250, 250, 204, 215, 330, leaves=14, side=1, leaf_len=24, leaf_w=9)}
{dot_ring(250, 250, 204, 6, 2, c['gold'], offset=60)}
<!-- soft mandala halo behind the hand -->
{dot_ring(250, 210, 118, 36, 1.4, c['gold'])}
{"".join(petal(250, 210, 122, 14, 4, i*10 + 5, c['gold2']) for i in range(36) if i % 2 == 0)}
<!-- hand -->
{hand(c, 250, 212, scale=1.2, angle=-12)}
{sprig(c, 352, 132, angle=210)}
{sprig(c, 150, 300, angle=30)}
<!-- name -->
{script("Riddhi Siddhi", 250, 386, 54, c['ink'])}
{caps("CREATIONS", 250, 412, 13, c['ink2'], spacing=8)}
{small_ornament(c, 250, 428, 44)}
{caps("HENNA ART", 250, 447, 10, c['gold'], spacing=5, weight=500)}
</svg>"""


def main():
    plan = [
        ("A-monogram", concept_monogram, ["henna", "wine"]),
        ("B-mandala", concept_mandala, ["wine", "teal"]),
        ("C-hand", concept_hand, ["henna", "sage"]),
    ]
    cards = []
    for name, fn, pals in plan:
        for pal in pals:
            fname = f"{name}-{pal}.svg"
            svg = fn(PALETTES[pal])
            (OUT / fname).write_text(svg, encoding="utf-8")
            cards.append(f'<figure id="{name}-{pal}"><figcaption>{name} · {pal}</figcaption>{svg}</figure>')
    html = f"""<!doctype html><html><head><meta charset="utf-8"><title>Logo concepts round 2</title>
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:wght@500;600;700&display=swap" rel="stylesheet">
<style>
body{{margin:0;padding:32px;background:#e6e0d8;font-family:Cinzel,serif;color:#333}}
.grid{{display:grid;grid-template-columns:1fr 1fr;gap:28px;max-width:1500px}}
figure{{margin:0;background:#fff;padding:18px;box-shadow:0 8px 30px rgba(0,0,0,.10)}}
figcaption{{font-size:12px;letter-spacing:3px;text-transform:uppercase;margin-bottom:12px;opacity:.7}}
svg{{width:100%;height:auto;display:block;max-width:560px;margin:0 auto}}
</style></head><body><div class="grid">{''.join(cards)}</div></body></html>"""
    (OUT / "index.html").write_text(html, encoding="utf-8")
    print("wrote", len(cards), "concepts to", OUT)


if __name__ == "__main__":
    main()
