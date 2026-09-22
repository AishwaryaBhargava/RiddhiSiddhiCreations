"""Draws the poster's mehndi motifs as clean vector SVG (crisp at any print size).
Run from the repo root:  python docs/poster/make-motifs.py
Outputs to docs/poster/assets/henna/.
"""
import math
from pathlib import Path

OUT = Path(__file__).parent / "assets" / "henna"
OUT.mkdir(parents=True, exist_ok=True)

INK = "#8E2F46"      # henna stain, wine-leaning
INK2 = "#520A24"     # deep wine for solid fills
GOLD = "#C4942F"     # gold dots and beads
ROSE = "#D86A87"     # soft rose accent


def pol(cx, cy, r, a):
    """Point on a circle; angle in degrees, 0 = up, clockwise."""
    t = math.radians(a - 90)
    return cx + r * math.cos(t), cy + r * math.sin(t)


def petal(cx, cy, r_in, length, width, angle, fill="none", stroke=INK, sw=1.4, inner=None):
    """Teardrop petal sitting on a circle of radius r_in, pointing outward."""
    tip = -(r_in + length)
    d = (f"M 0 {-r_in} C {width} {-(r_in + length * .34)} {width * .86} {tip + length * .3} 0 {tip} "
         f"C {-width * .86} {tip + length * .3} {-width} {-(r_in + length * .34)} 0 {-r_in} Z")
    s = f'<g transform="translate({cx} {cy}) rotate({angle})">'
    s += f'<path d="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round"/>'
    if inner:
        L2, w2 = length * .55, width * .5
        base = -(r_in + length * .16)
        s += (f'<path d="M 0 {base} C {w2} {base - L2 * .34} {w2 * .86} {base - L2 * .7} 0 {base - L2} '
              f'C {-w2 * .86} {base - L2 * .7} {-w2} {base - L2 * .34} 0 {base} Z" fill="{inner}"/>')
    s += "</g>"
    return s


def dots(cx, cy, r, n, size, fill=INK, offset=0):
    out = []
    for i in range(n):
        x, y = pol(cx, cy, r, offset + i * 360 / n)
        out.append(f'<circle cx="{x:.2f}" cy="{y:.2f}" r="{size}" fill="{fill}"/>')
    return "".join(out)


def scallops(cx, cy, r, n, depth, stroke=INK, sw=1.2):
    """Ring of outward scallop arcs."""
    out = []
    step = 360 / n
    for i in range(n):
        x0, y0 = pol(cx, cy, r, i * step)
        x1, y1 = pol(cx, cy, r, (i + 1) * step)
        out.append(f'<path d="M {x0:.2f} {y0:.2f} A {depth} {depth} 0 0 1 {x1:.2f} {y1:.2f}" '
                   f'fill="none" stroke="{stroke}" stroke-width="{sw}"/>')
    return "".join(out)


def ring(cx, cy, r, stroke=INK, sw=1.3, dash=None):
    d = f' stroke-dasharray="{dash}" stroke-linecap="round"' if dash else ""
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{stroke}" stroke-width="{sw}"{d}/>'


def leaf(x, y, length, width, angle, fill=None, stroke=INK, sw=1.2, vein=True):
    s = f'<g transform="translate({x} {y}) rotate({angle})">'
    d = (f"M 0 0 C {width} {-length * .3} {width * .75} {-length * .78} 0 {-length} "
         f"C {-width * .75} {-length * .78} {-width} {-length * .3} 0 0 Z")
    s += f'<path d="{d}" fill="{fill or "none"}" stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round"/>'
    if vein and not fill:
        s += f'<path d="M 0 -2 L 0 {-length + 3}" stroke="{stroke}" stroke-width="{sw * .6}"/>'
    s += "</g>"
    return s


def svg(w, h, body, pad=0):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{-pad} {-pad} {w + pad * 2} {h + pad * 2}" '
            f'width="{w + pad * 2}" height="{h + pad * 2}">{body}</svg>')


# ───────────────────────────── motifs ─────────────────────────────

def mandala(size=260):
    """Full circular mandala: the anchor motif."""
    c = size / 2
    s = ""
    # outer petal crown
    for i in range(24):
        s += petal(c, c, c * .70, c * .20, c * .045, i * 15, inner=None, sw=1.1)
    s += dots(c, c, c * .935, 24, c * .012, GOLD, offset=7.5)
    s += ring(c, c, c * .70, sw=1.1)
    # scallop band
    s += scallops(c, c, c * .62, 20, c * .06)
    s += ring(c, c, c * .615, sw=1)
    # big petal ring with inner detail
    for i in range(12):
        s += petal(c, c, c * .33, c * .28, c * .105, i * 30, sw=1.5)
        s += petal(c, c, c * .37, c * .17, c * .05, i * 30, inner=INK2, sw=1)
    # small petals between
    for i in range(12):
        s += petal(c, c, c * .40, c * .13, c * .035, i * 30 + 15, fill=INK, sw=0)
    s += dots(c, c, c * .30, 24, c * .014)
    s += ring(c, c, c * .30, sw=1.1)
    # inner lotus
    for i in range(8):
        s += petal(c, c, c * .10, c * .19, c * .075, i * 45 + 22.5, sw=1.3, inner=None)
    s += dots(c, c, c * .105, 8, c * .016, GOLD, offset=0)
    s += f'<circle cx="{c}" cy="{c}" r="{c * .085}" fill="none" stroke="{INK}" stroke-width="1.4"/>'
    s += f'<circle cx="{c}" cy="{c}" r="{c * .045}" fill="{INK2}"/>'
    return svg(size, size, s)


def half_mandala(size=240):
    """Half mandala, flat edge at the bottom: sits against a margin."""
    c, base = size / 2, size / 2
    s = f'<g>'
    for i in range(13):
        a = -90 + i * 15
        s += petal(c, base, c * .70, c * .19, c * .045, a, sw=1.1)
    s += f'<path d="M {c - c * .70} {base} A {c * .70} {c * .70} 0 0 1 {c + c * .70} {base}" fill="none" stroke="{INK}" stroke-width="1.2"/>'
    s += f'<path d="M {c - c * .615} {base} A {c * .615} {c * .615} 0 0 1 {c + c * .615} {base}" fill="none" stroke="{INK}" stroke-width="1"/>'
    for i in range(11):
        a = -90 + i * 18
        x0, y0 = pol(c, base, c * .615, a)
        x1, y1 = pol(c, base, c * .615, a + 18)
        s += f'<path d="M {x0:.2f} {y0:.2f} A {c * .07} {c * .07} 0 0 1 {x1:.2f} {y1:.2f}" fill="none" stroke="{INK}" stroke-width="1.1"/>'
    for i in range(7):
        a = -90 + i * 30
        s += petal(c, base, c * .30, c * .26, c * .10, a, sw=1.4)
        s += petal(c, base, c * .34, c * .15, c * .045, a, inner=INK2, sw=1)
    for i in range(6):
        a = -75 + i * 30
        s += petal(c, base, c * .36, c * .12, c * .03, a, fill=INK, sw=0)
    for i in range(5):
        a = -90 + i * 45
        s += petal(c, base, c * .08, c * .17, c * .065, a, sw=1.3)
    s += f'<circle cx="{c}" cy="{base}" r="{c * .06}" fill="{INK2}"/>'
    s += f'<path d="M {c - c * .92} {base} L {c + c * .92} {base}" stroke="{INK}" stroke-width="1.3"/>'
    s += "</g>"
    return svg(size, base + 2, s)


def paisley(w=170, h=250, flip=False):
    """Classic ambi paisley filled with jaali, dots and petals."""
    s = ""
    body = ("M 86 14 C 132 20 158 74 146 128 C 136 176 96 226 56 228 "
            "C 24 230 6 206 10 178 C 14 148 40 128 46 100 C 52 68 48 34 86 14 Z")
    s += f'<path d="{body}" fill="none" stroke="{INK}" stroke-width="2"/>'
    # dotted echo outside
    s += (f'<g transform="translate(78 122) scale(1.11) translate(-78 -122)">'
          f'<path d="{body}" fill="none" stroke="{INK}" stroke-width="1.1" stroke-dasharray="0.1 5.5" stroke-linecap="round"/></g>')
    # inner outline
    s += (f'<g transform="translate(80 124) scale(.78) translate(-80 -124)">'
          f'<path d="{body}" fill="none" stroke="{INK}" stroke-width="1.3"/></g>')
    # jaali lattice inside the belly
    for i in range(6):
        s += f'<path d="M {38 + i * 13} 196 C {54 + i * 13} 168 {64 + i * 11} 130 {70 + i * 9} 92" fill="none" stroke="{INK}" stroke-width=".8" opacity=".85"/>'
    for i in range(5):
        y = 108 + i * 22
        s += f'<path d="M {34 + i * 3} {y} C {70 + i * 2} {y - 14} {104 - i * 4} {y - 6} {128 - i * 8} {y - 26}" fill="none" stroke="{INK}" stroke-width=".8" opacity=".85"/>'
    # solid heart at the head
    s += f'<path d="M 92 44 C 118 50 130 84 120 112 C 112 134 90 142 80 126 C 70 110 74 76 92 44 Z" fill="{INK2}"/>'
    s += f'<path d="M 94 60 C 110 66 116 88 110 104 C 105 116 94 120 89 111 C 84 101 86 78 94 60 Z" fill="#FBF0E6" opacity=".9"/>'
    s += f'<circle cx="98" cy="88" r="4" fill="{INK2}"/>'
    # petals along the spine
    for i, (x, y, a) in enumerate(((60, 176, -20), (48, 200, -8), (78, 152, -30))):
        s += leaf(x, y, 26, 9, a, fill=INK if i == 1 else None)
    # dots
    for (x, y, r) in ((20, 170, 3), (16, 196, 2.4), (30, 214, 2), (150, 120, 3), (154, 96, 2.2), (140, 152, 2.4)):
        s += f'<circle cx="{x}" cy="{y}" r="{r}" fill="{GOLD}"/>'
    # tail curl
    s += f'<path d="M 56 228 C 42 244 20 246 10 236 C 2 228 6 216 16 216" fill="none" stroke="{INK}" stroke-width="1.6" stroke-linecap="round"/>'
    s += f'<circle cx="17" cy="216" r="3" fill="{INK}"/>'
    out = svg(w, h, s)
    if flip:
        out = out.replace("<svg ", '<svg style="transform:scaleX(-1)" ', 1)
    return out


def lotus(w=230, h=170):
    """Layered lotus with a dotted halo."""
    c = w / 2
    base = h - 18
    s = ""
    # back petals
    for a, L, W in ((-62, 92, 26), (-38, 108, 28), (0, 122, 30), (38, 108, 28), (62, 92, 26)):
        s += petal(c, base, 8, L, W, a, sw=1.5)
    # front petals
    for a, L, W in ((-30, 74, 24), (0, 84, 26), (30, 74, 24)):
        s += petal(c, base, 4, L, W, a, sw=1.3, inner=None)
        s += petal(c, base, 14, L * .5, W * .45, a, fill=INK, sw=0)
    # side leaves
    s += leaf(c - 92, base - 2, 44, 14, -74)
    s += leaf(c + 92, base - 2, 44, 14, 74)
    # base band
    s += f'<path d="M {c - 54} {base} Q {c} {base + 20} {c + 54} {base}" fill="none" stroke="{INK}" stroke-width="1.8"/>'
    s += f'<path d="M {c - 40} {base + 6} Q {c} {base + 20} {c + 40} {base + 6}" fill="none" stroke="{INK}" stroke-width="1.1"/>'
    # dotted halo
    for i in range(11):
        a = -100 + i * 20
        x, y = pol(c, base, 136, a)
        s += f'<circle cx="{x:.2f}" cy="{y:.2f}" r="{2.6 if i % 2 == 0 else 1.8}" fill="{GOLD if i % 2 else INK}"/>'
    return svg(w, h, s)


def peacock(w=280, h=300):
    """Mehndi peacock: long-stemmed tail feathers with eyed tips, slim body, crested head."""
    ox, oy = 140, 250          # where the tail gathers, at the bird's feet
    s = ""
    n, spread = 7, 74
    for i in range(n):
        a = -spread + i * (2 * spread / (n - 1))
        reach = 168 - abs(a) * 0.42
        tipx, tipy = pol(ox, oy, reach, a)
        midx, midy = pol(ox, oy, reach * .55, a)
        # stem, bowed slightly outward
        bow = 16 * (1 if a > 0 else -1) * (abs(a) / spread)
        s += (f'<path d="M {ox} {oy - 6} Q {midx + bow:.1f} {midy:.1f} {tipx:.1f} {tipy:.1f}" '
              f'fill="none" stroke="{INK}" stroke-width="1.3"/>')
        # barbs along the stem
        for t in (.5, .66, .8):
            bx, by = ox + (tipx - ox) * t, (oy - 6) + (tipy - (oy - 6)) * t
            s += f'<path d="M {bx - 6:.1f} {by - 4:.1f} L {bx + 6:.1f} {by + 4:.1f}" stroke="{INK}" stroke-width=".7" opacity=".8"/>'
        # eye at the tip
        s += petal(tipx, tipy, -13, 26, 11, a, sw=1.3)
        s += f'<ellipse cx="{tipx:.1f}" cy="{tipy:.1f}" rx="7.5" ry="9.5" transform="rotate({a} {tipx:.1f} {tipy:.1f})" fill="none" stroke="{INK}" stroke-width="1.1"/>'
        s += f'<ellipse cx="{tipx:.1f}" cy="{tipy:.1f}" rx="4" ry="5.2" transform="rotate({a} {tipx:.1f} {tipy:.1f})" fill="{INK2}"/>'
        s += f'<circle cx="{tipx:.1f}" cy="{tipy:.1f}" r="1.5" fill="{GOLD}"/>'
    # a few short filler fronds between the long ones
    for i in range(n - 1):
        a = -spread + (i + .5) * (2 * spread / (n - 1))
        r2 = 96 - abs(a) * .2
        tx, ty = pol(ox, oy, r2, a)
        s += f'<path d="M {ox} {oy - 6} L {tx:.1f} {ty:.1f}" stroke="{INK}" stroke-width=".9" opacity=".85"/>'
        s += f'<circle cx="{tx:.1f}" cy="{ty:.1f}" r="3.2" fill="none" stroke="{INK}" stroke-width="1"/>'
        s += f'<circle cx="{tx:.1f}" cy="{ty:.1f}" r="1.4" fill="{GOLD}"/>'
    # body: slim teardrop leaning left
    s += (f'<path d="M {ox} {oy} C {ox - 30} {oy - 18} {ox - 38} {oy - 56} {ox - 24} {oy - 80} '
          f'C {ox - 10} {oy - 102} {ox + 18} {oy - 96} {ox + 20} {oy - 68} '
          f'C {ox + 22} {oy - 44} {ox + 12} {oy - 20} {ox} {oy} Z" fill="none" stroke="{INK}" stroke-width="1.9"/>')
    for i in range(4):
        yy = oy - 24 - i * 17
        s += f'<path d="M {ox - 22 + i * 3} {yy} q 11 -8 22 -2" fill="none" stroke="{INK}" stroke-width=".85"/>'
    # neck: slim S up to the head
    nx, ny = ox - 20, oy - 90
    hx, hy = nx + 26, ny - 62
    s += (f'<path d="M {nx} {ny} C {nx - 18} {ny - 26} {nx + 2} {ny - 54} {hx} {hy + 10}" '
          f'fill="none" stroke="{INK}" stroke-width="1.9"/>')
    s += (f'<path d="M {nx + 10} {ny - 2} C {nx - 4} {ny - 24} {nx + 12} {ny - 46} {hx + 6} {hy + 12}" '
          f'fill="none" stroke="{INK}" stroke-width=".9"/>')
    s += f'<circle cx="{hx}" cy="{hy}" r="11" fill="none" stroke="{INK}" stroke-width="1.7"/>'
    s += f'<circle cx="{hx + 3}" cy="{hy - 2}" r="2.3" fill="{INK2}"/>'
    s += f'<path d="M {hx + 10} {hy + 1} L {hx + 25} {hy - 1} L {hx + 10} {hy + 7} Z" fill="{GOLD}" stroke="{INK}" stroke-width=".8"/>'
    for a in (-20, 0, 20):
        cxp, cyp = pol(hx, hy - 9, 21, a)
        s += f'<path d="M {hx} {hy - 10} Q {(hx + cxp) / 2 - 3:.1f} {(hy - 10 + cyp) / 2:.1f} {cxp:.1f} {cyp:.1f}" fill="none" stroke="{INK}" stroke-width="1"/>'
        s += f'<circle cx="{cxp:.1f}" cy="{cyp:.1f}" r="3" fill="none" stroke="{INK}" stroke-width="1"/>'
        s += f'<circle cx="{cxp:.1f}" cy="{cyp:.1f}" r="1.3" fill="{GOLD}"/>'
    # feet and ground
    s += f'<path d="M {ox - 4} {oy} q -5 12 -1 20 M {ox + 4} {oy} q 6 10 3 20" fill="none" stroke="{INK}" stroke-width="1.2"/>'
    s += f'<path d="M {ox - 36} {oy + 24} q 36 13 72 0" fill="none" stroke="{INK}" stroke-width="1.4"/>'
    for i in range(5):
        s += f'<circle cx="{ox - 24 + i * 12}" cy="{oy + 31 + (0 if i in (0, 4) else 2)}" r="1.7" fill="{GOLD}"/>'
    return svg(w, h, s)


def vine(w=120, h=340):
    """Vertical creeper: spine, alternating leaves, buds and dots."""
    s = f'<path d="M 60 6 C 34 60 86 108 58 166 C 32 222 84 266 56 334" fill="none" stroke="{INK}" stroke-width="1.8" stroke-linecap="round"/>'
    pts = [(48, 40, -55), (74, 80, 60), (50, 122, -62), (76, 160, 58), (48, 208, -58), (76, 248, 62), (50, 292, -56)]
    for i, (x, y, a) in enumerate(pts):
        s += leaf(x, y, 34 if i % 2 else 28, 12 if i % 2 else 10, a, fill=INK if i % 3 == 1 else None)
        bx, by = pol(x, y, 8, a + 180)
        s += f'<circle cx="{bx:.1f}" cy="{by:.1f}" r="2.2" fill="{GOLD}"/>'
    for (x, y) in ((70, 26), (44, 66), (72, 106), (44, 144), (70, 192), (44, 232), (72, 276), (46, 318)):
        s += f'<circle cx="{x}" cy="{y}" r="2.4" fill="{INK}"/>'
    # bud at the top
    s += petal(60, 10, 0, 20, 8, 0, fill=INK, sw=0)
    return svg(w, h, s)


def rosette(size=110):
    """Small filler flower."""
    c = size / 2
    s = ""
    for i in range(8):
        s += petal(c, c, c * .18, c * .46, c * .17, i * 45, sw=1.3)
    for i in range(8):
        s += petal(c, c, c * .16, c * .26, c * .085, i * 45 + 22.5, fill=INK, sw=0)
    s += f'<circle cx="{c}" cy="{c}" r="{c * .15}" fill="none" stroke="{INK}" stroke-width="1.3"/>'
    s += f'<circle cx="{c}" cy="{c}" r="{c * .07}" fill="{GOLD}"/>'
    s += dots(c, c, c * .82, 8, 2.2, GOLD, offset=22.5)
    return svg(size, size, s)


def henna_hand(w=180, h=260):
    """Stylised hand with a mandala on the back: the signature mehndi motif."""
    s = ""
    fingers = [(38, 54, 20, 86), (62, 30, 21, 108), (88, 38, 20, 100), (116, 70, 18, 74)]
    # palm
    s += (f'<path d="M 30 132 C 28 108 40 100 50 100 L 128 102 C 140 104 144 122 141 146 '
          f'L 136 200 C 133 226 114 240 86 240 C 58 240 39 226 36 200 Z" fill="none" stroke="{INK}" stroke-width="2"/>')
    for (x, y, fw, fh) in fingers:
        tw = fw * .74
        dx = (fw - tw) / 2
        s += (f'<path d="M {x} {y + fh} L {x + dx} {y + tw / 2} C {x + dx} {y - 2} {x + fw - dx} {y - 2} {x + fw - dx} {y + tw / 2} '
              f'L {x + fw} {y + fh} Z" fill="none" stroke="{INK}" stroke-width="2" stroke-linejoin="round"/>')
        mx = x + fw / 2
        # fingertip cap + bands
        s += f'<path d="M {x + dx + 1} {y + 18} C {x + dx + 2} {y + 3} {x + fw - dx - 2} {y + 3} {x + fw - dx - 1} {y + 18} Z" fill="{INK2}"/>'
        s += f'<path d="M {x + 2} {y + 30} L {x + fw - 2} {y + 30} M {x + 2} {y + 35} L {x + fw - 2} {y + 35}" stroke="{INK}" stroke-width="1.1"/>'
        s += f'<circle cx="{mx}" cy="{y + 46}" r="2.4" fill="{INK}"/>'
        s += f'<path d="M {x + 3} {y + 62} Q {mx} {y + 54} {x + fw - 3} {y + 62}" fill="none" stroke="{INK}" stroke-width="1.1"/>'
    # thumb
    s += f'<path d="M 34 140 C 16 130 2 142 4 160 C 6 176 22 184 34 178" fill="none" stroke="{INK}" stroke-width="2"/>'
    s += f'<path d="M 12 146 q 10 -4 16 2" fill="none" stroke="{INK}" stroke-width="1.1"/>'
    # mandala on the back of the hand
    cx, cy = 86, 172
    for i in range(12):
        s += petal(cx, cy, 30, 12, 4.5, i * 30, sw=1)
    s += dots(cx, cy, 30, 12, 1.6, GOLD, offset=15)
    for i in range(8):
        s += petal(cx, cy, 8, 18, 7, i * 45 + 22.5, sw=1.2)
    s += f'<circle cx="{cx}" cy="{cy}" r="6" fill="none" stroke="{INK}" stroke-width="1.2"/>'
    s += f'<circle cx="{cx}" cy="{cy}" r="2.6" fill="{INK2}"/>'
    # wrist bands
    s += f'<path d="M 44 226 L 130 226 M 46 233 L 128 233" stroke="{INK}" stroke-width="1.3"/>'
    for i in range(7):
        s += f'<circle cx="{52 + i * 12}" cy="{229.5}" r="1.6" fill="{GOLD}"/>'
    return svg(w, h, s)


def corner_flourish(w=230, h=230):
    """Corner spray: a rosette in the angle with two leafy vines running along the edges."""
    s = ""
    cx, cy = 34, 34
    # rosette
    for i in range(8):
        s += petal(cx, cy, 9, 26, 10, i * 45, sw=1.3)
    for i in range(8):
        s += petal(cx, cy, 8, 15, 5, i * 45 + 22.5, fill=INK, sw=0)
    s += f'<circle cx="{cx}" cy="{cy}" r="7" fill="none" stroke="{INK}" stroke-width="1.3"/>'
    s += f'<circle cx="{cx}" cy="{cy}" r="3.4" fill="{GOLD}"/>'
    s += dots(cx, cy, 45, 8, 1.8, GOLD, offset=22.5)
    # vines along the two edges
    s += f'<path d="M 66 26 C 108 34 150 38 208 30" fill="none" stroke="{INK}" stroke-width="1.6" stroke-linecap="round"/>'
    s += f'<path d="M 26 66 C 34 108 38 150 30 208" fill="none" stroke="{INK}" stroke-width="1.6" stroke-linecap="round"/>'
    for (x, y, a, L, fill) in ((86, 29, -60, 30, None), (118, 34, 118, 24, INK), (150, 36, -62, 28, None), (182, 34, 116, 22, INK),
                               (29, 86, 30, 30, None), (34, 118, -152, 24, INK), (36, 150, 28, 28, None), (34, 182, -154, 22, INK)):
        s += leaf(x, y, L, 10, a, fill=fill)
    for (x, y) in ((102, 28), (136, 31), (166, 31), (200, 28), (28, 102), (31, 136), (31, 166), (28, 200)):
        s += f'<circle cx="{x}" cy="{y}" r="2" fill="{GOLD}"/>'
    # a small bud on the diagonal
    s += f'<path d="M 58 58 C 78 74 92 94 98 118" fill="none" stroke="{INK}" stroke-width="1.3"/>'
    s += leaf(74, 74, 24, 9, 42) + leaf(88, 96, 20, 8, 36)
    s += petal(100, 122, 0, 26, 10, 26, sw=1.3)
    s += f'<circle cx="103" cy="131" r="2.6" fill="{GOLD}"/>'
    return svg(w, h, s)


def divider(w=300, h=30):
    """Fine horizontal mehndi rule."""
    cy = h / 2
    s = f'<path d="M 10 {cy} L {w / 2 - 22} {cy} M {w / 2 + 22} {cy} L {w - 10} {cy}" stroke="{INK}" stroke-width="1"/>'
    s += leaf(w / 2 - 30, cy, 11, 4, -90) + leaf(w / 2 + 30, cy, 11, 4, 90)
    for i in range(3):
        s += f'<circle cx="{w / 2 - 46 - i * 13}" cy="{cy}" r="{1.9 - i * .35}" fill="{GOLD}"/>'
        s += f'<circle cx="{w / 2 + 46 + i * 13}" cy="{cy}" r="{1.9 - i * .35}" fill="{GOLD}"/>'
    s += f'<g transform="translate({w / 2} {cy}) rotate(45)"><rect x="-4.5" y="-4.5" width="9" height="9" fill="{ROSE}" stroke="{GOLD}" stroke-width="1"/></g>'
    return svg(w, h, s)


MOTIFS = {
    "mandala": mandala(),
    "half-mandala": half_mandala(),
    "paisley": paisley(),
    "paisley-flip": paisley(flip=True),
    "lotus": lotus(),
    "peacock": peacock(),
    "vine": vine(),
    "rosette": rosette(),
    "hand": henna_hand(),
    "corner": corner_flourish(),
    "divider": divider(),
}


def main():
    for name, data in MOTIFS.items():
        (OUT / f"{name}.svg").write_text(data, encoding="utf-8")
    # contact sheet for review
    cards = "".join(
        f'<figure><figcaption>{n}</figcaption><div class="m">{d}</div></figure>' for n, d in MOTIFS.items()
    )
    html = f"""<!doctype html><meta charset="utf-8"><title>henna motifs</title>
<style>body{{margin:0;padding:24px;background:#FAF6EA;font:12px/1.4 system-ui;color:#520A24}}
.grid{{display:flex;flex-wrap:wrap;gap:20px;align-items:flex-end}}
figure{{margin:0;background:#FDFAF2;border:1px solid rgba(196,148,47,.5);padding:10px;border-radius:8px}}
figcaption{{letter-spacing:2px;text-transform:uppercase;opacity:.65;margin-bottom:6px}}
.m svg{{display:block;height:200px;width:auto}}</style>
<div class="grid">{cards}</div>"""
    (OUT / "index.html").write_text(html, encoding="utf-8")
    print("wrote", len(MOTIFS), "motifs to", OUT)


if __name__ == "__main__":
    main()
