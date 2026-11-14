#!/usr/bin/env python3
"""Converte uma imagem (ex.: saída do Meshy) em sprite pixel art.
Uso: python3 tools/pixelize.py entrada.png saida.png [tamanho=64] [cores=16] [escala=6]
- recorta pelo alfa, reduz com NEAREST/BOX, limita a paleta, limpa alfa (sem semitransparência)
- salva o sprite final ampliado com NEAREST (tamanho*escala) para manter o pixel nítido."""
import sys
from PIL import Image
src, dst = sys.argv[1], sys.argv[2]
size = int(sys.argv[3]) if len(sys.argv) > 3 else 64
colors = int(sys.argv[4]) if len(sys.argv) > 4 else 16
scale = int(sys.argv[5]) if len(sys.argv) > 5 else 6
im = Image.open(src).convert("RGBA")
bbox = im.getchannel("A").point(lambda a: 255 if a > 40 else 0).getbbox()
if bbox: im = im.crop(bbox)
w, h = im.size; m = max(w, h)
sq = Image.new("RGBA", (m, m), (0, 0, 0, 0)); sq.paste(im, ((m-w)//2, (m-h)//2))
small = sq.resize((size, size), Image.BOX)
a = small.getchannel("A").point(lambda v: 255 if v > 110 else 0)
rgb = small.convert("RGB")
from PIL import ImageEnhance
rgb = ImageEnhance.Color(rgb).enhance(1.35)  # realça acentos (olhos vermelhos) antes de limitar a paleta
q = rgb.quantize(colors=colors, method=Image.FASTOCTREE, dither=Image.NONE).convert("RGB")
out = q.convert("RGBA"); out.putalpha(a)
out = out.resize((size*scale, size*scale), Image.NEAREST)
out.save(dst, optimize=True)
print(dst, out.size)
