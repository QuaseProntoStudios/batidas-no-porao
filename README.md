# Batidas no Porão

Protótipo de horror clicker em HTML5 (visual CRT, sprites autorais, português/inglês/espanhol).
Jogue grátis em https://teuzin0dev.itch.io/batidas-no-porao

## Origem deste repositório
O projeto original não estava mais disponível. Este código foi recuperado da build
publicada no itch.io (v0.5.1) e evoluído em seguida. Os arquivos são os mesmos que o navegador carrega,
sem minificação.

## Rodando localmente
```
python3 -m http.server 8000
```
Abra http://localhost:8000

## Estrutura
- `index.html`, `styles.css`: interface e visual CRT
- `src/game.js`: toda a lógica (combate, salas, mercador, upgrades, prestígio, saves)
- `locales/*.json`: textos pt/en/es (`src/locales-fallback.js` é o plano B)
- `assets/`: fonte, sprites e música

## Pendências conhecidas
- Os efeitos sonoros em `assets/audio/sfx/` são sintéticos (gerados por script)
  e podem ser trocados por gravações melhores com o mesmo nome de arquivo.
- Teste de redesenho dos sprites com Meshy (rato): ficou escuro e destoou do estilo
  chapado atual, então os sprites originais foram mantidos.
- Confirmar a licença do pack `assets/sprites/packs/horror-fantasy-assets.png`
  antes de tornar o repositório público.

Quase Pronto Studios
