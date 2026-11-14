# Batidas no Porão — Tema e direção de arte

## Pitch
Um **clicker de terror em pixel art**. Você bate numa porta no porão da casa do seu avô; a porta aprende seu nome, a casa respira e, a cada batida, algo do outro lado responde. Cada sala é uma porta nova, cada porta tem um morador pior.

> "Uma porta aprende seu nome batida por batida."

## Tom: terror fofo-macabro (creepypasta de gibi)
- Estilizado, **nunca realista**: formas grandes e legíveis, olhos que brilham, dentes exagerados. Assusta pelo clima, não por gore.
- Humor seco nos textos (contas de luz, gravador mudo, regra no verso do papel).
- Mistério doméstico: o horror vem de objetos comuns da casa (porta, lâmpada, boneca, TV, poço, mofo).

## Arte
| Item | Regra |
|---|---|
| Estilo | Pixel art 16-bit, contorno preto grosso, sombreado em 3 tons |
| Sprites (inimigos/portas) | desenhados em **64×64** px, exibidos a 384×384 (ampliação inteira ×6, sem suavizar) |
| Cenário/props | 64×64 (ou 32×32 para itens pequenos), mesma regra |
| Paleta por sprite | 16–24 cores; acentos saturados só em olhos/brilhos (vermelho = ameaça, âmbar = lâmpada/vela, verde-mofo = podridão) |
| Paleta geral | fundo quase preto arroxeado `#1c161f`, madeira `#5a3d2b`, reboco `#8b7f6a`, ferrugem `#8a4b2d`, sangue `#c4161c`, vela `#f2b84b` |
| Renderização CSS | `image-rendering: pixelated` em todos os sprites |
| UI | painéis escuros com moldura pixel, fonte pixel (Silkscreen / Press Start 2P), leve scanline/CRT opcional |
| Proibido | glow gradiente suave, vetor liso, texturas fotográficas, sombras borradas nos sprites |

## Bestiário (identidade visual)
Rato (parede, dentes e olhos vermelhos) · Aranha · Mariposa · Esqueleto · Boneca · Máscara · Gêmeos · Cabeça de TV · Coral/Coro · Padre · Cão · Bruto · Rastejador · Fantasma · Fungo · Boca-de-poço · Mercador.
Portas: madeira, cinza, osso, olho, corrente, sangue e a **porta final** (a casa pendurada por raízes, sala 1000).

## Áudio (mood)
Drone grave de porão, batidas secas de madeira, sussurros curtos, cliques de gravador. Poucos instrumentos, muito silêncio.

## Pipeline de assets
1. Gerar imagem no Meshy (`text_to_image`, nano-banana-2) com o prompt-base abaixo.
2. `python3 tools/pixelize.py entrada.png saida.png 64 24 6` (recorta, reduz a 64px, limita a paleta, remove semitransparência, amplia ×6).
3. Salvar em `assets/sprites/...` mantendo o mesmo nome do sprite atual.

Prompt-base: *"Chunky 16-bit pixel art sprite of <criatura>, big glowing eyes, thick black pixel outline, 3-tone cel shading, limited palette, cartoon horror (not realistic), whole creature visible, centered, visible square pixels"* com `remove_background`.

## Status
- [x] Tema e regras definidos
- [x] Ferramenta `tools/pixelize.py`
- [x] Piloto: `rat.png` em pixel art (original Meshy em `tools/fonte/`)
- [ ] Refazer os demais ~35 sprites (≈6 créditos Meshy cada)
- [ ] Fonte pixel na UI (`image-rendering: pixelated` já existe no CSS)
- [ ] Nova textura da porta principal
