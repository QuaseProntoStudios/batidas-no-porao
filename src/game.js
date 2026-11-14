const SAVE_KEY = "batidas-no-porao-save-v2";
const SETTINGS_KEY = "batidas-no-porao-settings-v1";
const MANUAL_SAVE_PREFIX = "batidas-no-porao-manual-slot-";
const GAME_VERSION = "0.5.2";
const FINAL_ROOM = 1000;
const MERCHANT_INTERVAL = 15;
const PRESTIGE_MIN_ROOM = 50;
const COMBO_WINDOW_MS = 1400;

const LOCALE_FILES = {
  pt: "locales/pt.json",
  en: "locales/en.json",
  es: "locales/es.json",
};

let dictionaries = window.LOCALE_FALLBACK || { pt: {}, en: {}, es: {} };

const upgradeDefs = [
  {
    id: "nails",
    baseCost: 12,
    scale: 1.23,
    max: 30,
    unlockAt: 0,
    nameKey: "upgradeNailsName",
    descriptionKey: "upgradeNailsDesc",
  },
  {
    id: "recorder",
    baseCost: 45,
    scale: 1.3,
    max: 25,
    unlockAt: 28,
    nameKey: "upgradeRecorderName",
    descriptionKey: "upgradeRecorderDesc",
  },
  {
    id: "candle",
    baseCost: 90,
    scale: 1.34,
    max: 18,
    unlockAt: 80,
    nameKey: "upgradeCandleName",
    descriptionKey: "upgradeCandleDesc",
  },
  {
    id: "blade",
    baseCost: 180,
    scale: 1.38,
    max: 16,
    unlockAt: 150,
    nameKey: "upgradeBladeName",
    descriptionKey: "upgradeBladeDesc",
  },
  {
    id: "mirror",
    baseCost: 420,
    scale: 1.42,
    max: 12,
    unlockAt: 360,
    nameKey: "upgradeMirrorName",
    descriptionKey: "upgradeMirrorDesc",
  },
];

const enemies = [
  {
    id: "rat",
    sprite: "rat",
    nameKey: "enemyRatName",
    baseHp: 18,
    hpScale: 1.32,
    damage: 4,
    delay: 1.8,
    reward: 13,
  },
  {
    id: "skeleton",
    sprite: "skeleton",
    nameKey: "enemySkeletonName",
    baseHp: 24,
    hpScale: 1.34,
    damage: 5,
    delay: 2,
    reward: 17,
  },
  {
    id: "crawler",
    sprite: "crawler",
    nameKey: "enemyCrawlerName",
    baseHp: 26,
    hpScale: 1.34,
    damage: 5.5,
    delay: 1.55,
    reward: 19,
  },
  {
    id: "doll",
    sprite: "doll",
    nameKey: "enemyDollName",
    baseHp: 34,
    hpScale: 1.36,
    damage: 6.5,
    delay: 2.1,
    reward: 24,
  },
  {
    id: "wraith",
    sprite: "wraith",
    nameKey: "enemyWraithName",
    baseHp: 28,
    hpScale: 1.36,
    damage: 6,
    delay: 2.2,
    reward: 21,
  },
  {
    id: "moth",
    sprite: "moth",
    nameKey: "enemyMothName",
    baseHp: 31,
    hpScale: 1.35,
    damage: 7,
    delay: 1.65,
    reward: 26,
  },
  {
    id: "hound",
    sprite: "hound",
    nameKey: "enemyHoundName",
    baseHp: 48,
    hpScale: 1.38,
    damage: 9,
    delay: 1.95,
    reward: 36,
  },
  {
    id: "mask",
    sprite: "mask",
    nameKey: "enemyMaskName",
    baseHp: 42,
    hpScale: 1.4,
    damage: 8,
    delay: 2.45,
    reward: 34,
  },
  {
    id: "spider",
    sprite: "spider",
    nameKey: "enemySpiderName",
    baseHp: 44,
    hpScale: 1.37,
    damage: 8.5,
    delay: 1.7,
    reward: 35,
  },
  {
    id: "priest",
    sprite: "priest",
    nameKey: "enemyPriestName",
    baseHp: 58,
    hpScale: 1.4,
    damage: 10,
    delay: 2.35,
    reward: 45,
  },
  {
    id: "brute",
    sprite: "brute",
    nameKey: "enemyBruteName",
    baseHp: 76,
    hpScale: 1.42,
    damage: 12,
    delay: 2.6,
    reward: 58,
  },
  {
    id: "tvhead",
    sprite: "tvhead",
    nameKey: "enemyTvHeadName",
    baseHp: 66,
    hpScale: 1.41,
    damage: 11,
    delay: 2.05,
    reward: 52,
  },
  {
    id: "fungus",
    sprite: "fungus",
    nameKey: "enemyFungusName",
    baseHp: 72,
    hpScale: 1.43,
    damage: 9.5,
    delay: 2.7,
    reward: 61,
  },
  {
    id: "twins",
    sprite: "twins",
    nameKey: "enemyTwinsName",
    baseHp: 92,
    hpScale: 1.44,
    damage: 13,
    delay: 2.15,
    reward: 74,
  },
  {
    id: "choir",
    sprite: "choir",
    nameKey: "enemyChoirName",
    baseHp: 104,
    hpScale: 1.44,
    damage: 14,
    delay: 2.35,
    reward: 84,
  },
  {
    id: "wellmouth",
    sprite: "wellmouth",
    nameKey: "enemyWellMouthName",
    baseHp: 112,
    hpScale: 1.45,
    damage: 15,
    delay: 2.8,
    reward: 92,
  },
];

const checkpointDoorDefs = [
  {
    id: "door-ash",
    sprite: "door-ash",
    nameKey: "checkpointDoorAshName",
    baseHp: 58,
    hpScale: 1.34,
    reward: 32,
  },
  {
    id: "door-bone",
    sprite: "door-bone",
    nameKey: "checkpointDoorBoneName",
    baseHp: 74,
    hpScale: 1.36,
    reward: 42,
  },
  {
    id: "door-eye",
    sprite: "door-eye",
    nameKey: "checkpointDoorEyeName",
    baseHp: 92,
    hpScale: 1.38,
    reward: 56,
  },
  {
    id: "door-chain",
    sprite: "door-chain",
    nameKey: "checkpointDoorChainName",
    baseHp: 120,
    hpScale: 1.4,
    reward: 72,
  },
  {
    id: "door-blood",
    sprite: "door-blood",
    nameKey: "checkpointDoorBloodName",
    baseHp: 150,
    hpScale: 1.42,
    reward: 94,
  },
];

const finalDoorDef = {
  id: "door-final",
  sprite: "door-final",
  nameKey: "finalDoorName",
  baseHp: 260,
  hpScale: 1.48,
  reward: 1000,
};

const merchantDef = {
  id: "merchant",
  sprite: "merchant",
  nameKey: "merchantName",
};

const itemDefs = [
  {
    id: "wetSplinter",
    icon: "▧",
    every: 2,
    cost: 2,
    upgrade: "nails",
    nameKey: "itemWetSplinterName",
    descriptionKey: "itemWetSplinterDesc",
  },
  {
    id: "deadTape",
    icon: "▤",
    every: 4,
    cost: 2,
    upgrade: "recorder",
    nameKey: "itemDeadTapeName",
    descriptionKey: "itemDeadTapeDesc",
  },
  {
    id: "tallowClot",
    icon: "◒",
    every: 5,
    cost: 2,
    upgrade: "candle",
    nameKey: "itemTallowClotName",
    descriptionKey: "itemTallowClotDesc",
  },
  {
    id: "rustNeedle",
    icon: "†",
    every: 7,
    cost: 2,
    upgrade: "blade",
    nameKey: "itemRustNeedleName",
    descriptionKey: "itemRustNeedleDesc",
  },
  {
    id: "blackGlass",
    icon: "◈",
    every: 9,
    cost: 2,
    upgrade: "mirror",
    nameKey: "itemBlackGlassName",
    descriptionKey: "itemBlackGlassDesc",
  },
];

const merchantStockDefs = [
  {
    id: "buySplinter",
    itemId: "wetSplinter",
    baseCost: 3,
    unlockRoom: 15,
  },
  {
    id: "buyTape",
    itemId: "deadTape",
    baseCost: 5,
    unlockRoom: 30,
  },
  {
    id: "buyTallow",
    itemId: "tallowClot",
    baseCost: 7,
    unlockRoom: 45,
  },
  {
    id: "buyNeedle",
    itemId: "rustNeedle",
    baseCost: 9,
    unlockRoom: 75,
  },
  {
    id: "buyGlass",
    itemId: "blackGlass",
    baseCost: 12,
    unlockRoom: 105,
  },
  {
    id: "merchantHeal",
    type: "heal",
    baseCost: 4,
    unlockRoom: 15,
    nameKey: "merchantHealName",
    descriptionKey: "merchantHealDesc",
  },
  {
    id: "merchantBundle",
    type: "bundle",
    baseCost: 18,
    unlockRoom: 120,
    nameKey: "merchantBundleName",
    descriptionKey: "merchantBundleDesc",
  },
];

const externalAssetManifest = {
  music: {
    loop: ["assets/audio/music/basement-loop.ogg", "assets/audio/music/basement-loop.mp3"],
  },
  sfx: {
    knock: "assets/audio/sfx/knock.mp3",
    hit: "assets/audio/sfx/hit.mp3",
    buy: "assets/audio/sfx/buy.mp3",
    whisper: "assets/audio/sfx/whisper.mp3",
    panic: "assets/audio/sfx/panic.mp3",
  },
  sprites: {
    door: "assets/sprites/enemies/door.png",
    "door-ash": "assets/sprites/enemies/door-ash.png",
    "door-bone": "assets/sprites/enemies/door-bone.png",
    "door-eye": "assets/sprites/enemies/door-eye.png",
    "door-chain": "assets/sprites/enemies/door-chain.png",
    "door-blood": "assets/sprites/enemies/door-blood.png",
    "door-final": "assets/sprites/enemies/door-final.png",
    merchant: "assets/sprites/enemies/merchant.png",
    rat: "assets/sprites/enemies/rat.png?v=0.5.1",
    skeleton: "assets/sprites/enemies/skeleton.png?v=0.5.1",
    crawler: "assets/sprites/enemies/crawler.png?v=0.5.1",
    doll: "assets/sprites/enemies/doll.png?v=0.5.1",
    wraith: "assets/sprites/enemies/wraith.png?v=0.5.1",
    moth: "assets/sprites/enemies/moth.png?v=0.5.1",
    hound: "assets/sprites/enemies/hound.png?v=0.5.1",
    mask: "assets/sprites/enemies/mask.png?v=0.5.1",
    spider: "assets/sprites/enemies/spider.png?v=0.5.1",
    priest: "assets/sprites/enemies/priest.png?v=0.5.1",
    brute: "assets/sprites/enemies/brute.png?v=0.5.1",
    tvhead: "assets/sprites/enemies/tvhead.png?v=0.5.1",
    fungus: "assets/sprites/enemies/fungus.png?v=0.5.1",
    twins: "assets/sprites/enemies/twins.png?v=0.5.1",
    choir: "assets/sprites/enemies/choir.png?v=0.5.1",
    wellmouth: "assets/sprites/enemies/wellmouth.png?v=0.5.1",
  },
  spriteSheet: {
    src: "assets/sprites/packs/horror-fantasy-assets.png",
    backgroundSize: "500% 400%",
    frames: {
      door: "75% 0%",
      rat: "100% 33.333%",
      skeleton: "50% 33.333%",
      wraith: "75% 66.666%",
      mask: "25% 33.333%",
    },
  },
};

const storyEvents = [
  {
    id: "firstKnock",
    totalFear: 1,
    titleKey: "storyFirstKnockTitle",
    textKey: "storyFirstKnockText",
  },
  {
    id: "corridor",
    totalFear: 30,
    titleKey: "storyCorridorTitle",
    textKey: "storyCorridorText",
  },
  {
    id: "name",
    totalFear: 160,
    titleKey: "storyNameTitle",
    textKey: "storyNameText",
  },
  {
    id: "deep",
    totalFear: 520,
    titleKey: "storyDeepTitle",
    textKey: "storyDeepText",
  },
];

const contractDefs = [
  {
    id: "rooms",
    goal: 5,
    rewardFear: 85,
    rewardShards: 3,
    nameKey: "contractRoomsName",
    descriptionKey: "contractRoomsDesc",
  },
  {
    id: "hunts",
    goal: 12,
    rewardFear: 120,
    rewardShards: 4,
    nameKey: "contractHuntsName",
    descriptionKey: "contractHuntsDesc",
  },
  {
    id: "craft",
    goal: 4,
    rewardFear: 95,
    rewardShards: 2,
    nameKey: "contractCraftName",
    descriptionKey: "contractCraftDesc",
  },
  {
    id: "rituals",
    goal: 3,
    rewardFear: 110,
    rewardShards: 3,
    nameKey: "contractRitualsName",
    descriptionKey: "contractRitualsDesc",
  },
];

const achievementDefs = [
  {
    id: "firstBlood",
    rewardFear: 35,
    rewardShards: 2,
    nameKey: "achievementFirstBloodName",
    descriptionKey: "achievementFirstBloodDesc",
    isUnlocked: (progress) => progress.enemiesDefeated >= 1,
  },
  {
    id: "tenRooms",
    rewardFear: 140,
    rewardShards: 5,
    nameKey: "achievementTenRoomsName",
    descriptionKey: "achievementTenRoomsDesc",
    isUnlocked: (progress) => progress.bestRoom >= 10,
  },
  {
    id: "collector",
    rewardFear: 180,
    rewardShards: 6,
    nameKey: "achievementCollectorName",
    descriptionKey: "achievementCollectorDesc",
    isUnlocked: (progress) => progress.itemsFound >= 10,
  },
  {
    id: "ritualist",
    rewardFear: 260,
    rewardShards: 8,
    nameKey: "achievementRitualistName",
    descriptionKey: "achievementRitualistDesc",
    isUnlocked: (progress) => progress.upgradeLevels >= 20,
  },
  {
    id: "merchant",
    rewardFear: 220,
    rewardShards: 10,
    nameKey: "achievementMerchantName",
    descriptionKey: "achievementMerchantDesc",
    isUnlocked: (progress) => progress.merchantPurchases >= 3,
  },
  {
    id: "echo",
    rewardFear: 400,
    rewardShards: 12,
    nameKey: "achievementEchoName",
    descriptionKey: "achievementEchoDesc",
    isUnlocked: (progress) => progress.echoes >= 1,
  },
];

const defaultState = {
  lang: "pt",
  saveCreated: false,
  introRead: false,
  difficulty: "normal",
  phase: "door",
  room: 0,
  fear: 0,
  totalFear: 0,
  shards: 0,
  echoes: 0,
  bestRoom: 0,
  runBestRoom: 0,
  activeCombo: 0,
  comboExpiresAt: 0,
  playerHp: 100,
  sanity: 100,
  pressure: 0,
  targetHp: 30,
  targetMaxHp: 30,
  targetId: "door",
  gameCompleted: false,
  enemyTimer: 1.8,
  enemiesDefeated: 0,
  itemsFound: 0,
  merchantPurchases: 0,
  completedContracts: 0,
  autoEnabled: false,
  autoAdvanceRooms: false,
  sound: true,
  autoSaveEnabled: true,
  musicVolume: 0.65,
  sfxVolume: 0.7,
  autoClickerWarningSeen: false,
  autoClickerNeedsF6: false,
  clicks: 0,
  log: [],
  unlockedEvents: [],
  achievements: Object.fromEntries(achievementDefs.map((achievement) => [achievement.id, false])),
  contractProgress: Object.fromEntries(contractDefs.map((contract) => [contract.id, 0])),
  inventory: Object.fromEntries(itemDefs.map((item) => [item.id, 0])),
  itemBoosts: Object.fromEntries(upgradeDefs.map((upgrade) => [upgrade.id, 0])),
  upgrades: Object.fromEntries(upgradeDefs.map((upgrade) => [upgrade.id, 0])),
};

const el = {
  game: document.querySelector("#game"),
  mainMenu: document.querySelector("#mainMenu"),
  menuScreens: document.querySelectorAll(".menu-screen"),
  menuHome: document.querySelector("#menuHome"),
  menuDifficulty: document.querySelector("#menuDifficulty"),
  menuLore: document.querySelector("#menuLore"),
  menuOptions: document.querySelector("#menuOptions"),
  newGameButton: document.querySelector("#newGameButton"),
  continueButton: document.querySelector("#continueButton"),
  menuOptionsButton: document.querySelector("#menuOptionsButton"),
  quitButton: document.querySelector("#quitButton"),
  menuVersion: document.querySelector("#menuVersion"),
  difficultyButtons: document.querySelectorAll("[data-difficulty]"),
  startLoreButton: document.querySelector("#startLoreButton"),
  difficultyBackButton: document.querySelector("#difficultyBackButton"),
  beginGameButton: document.querySelector("#beginGameButton"),
  menuOptionsBackButton: document.querySelector("#menuOptionsBackButton"),
  menuLanguageSelect: document.querySelector("#menuLanguageSelect"),
  menuMusicVolume: document.querySelector("#menuMusicVolume"),
  menuMusicVolumeValue: document.querySelector("#menuMusicVolumeValue"),
  menuSfxVolume: document.querySelector("#menuSfxVolume"),
  menuSfxVolumeValue: document.querySelector("#menuSfxVolumeValue"),
  menuAutoSaveToggle: document.querySelector("#menuAutoSaveToggle"),
  menuManualSaves: document.querySelector("#menuManualSaves"),
  languageSelect: document.querySelector("#languageSelect"),
  roomLabel: document.querySelector("#roomLabel"),
  fearValue: document.querySelector("#fearValue"),
  fearStat: document.querySelector("#fearStat"),
  shardValue: document.querySelector("#shardValue"),
  hitValue: document.querySelector("#hitValue"),
  autoValue: document.querySelector("#autoValue"),
  sanityValue: document.querySelector("#sanityValue"),
  comboValue: document.querySelector("#comboValue"),
  echoValue: document.querySelector("#echoValue"),
  bestRoomValue: document.querySelector("#bestRoomValue"),
  pressureText: document.querySelector("#pressureText"),
  playerHpText: document.querySelector("#playerHpText"),
  playerHpBar: document.querySelector("#playerHpBar"),
  targetKicker: document.querySelector("#targetKicker"),
  targetName: document.querySelector("#targetName"),
  targetHpBar: document.querySelector("#targetHpBar"),
  targetHpText: document.querySelector("#targetHpText"),
  arena: document.querySelector(".arena-wrap"),
  canvas: document.querySelector("#arenaCanvas"),
  enemySprite: document.querySelector("#enemySprite"),
  attackSprite: document.querySelector("#attackSprite"),
  slashLayer: document.querySelector("#slashLayer"),
  petSprite: document.querySelector("#petSprite"),
  portrait: document.querySelector("#portrait"),
  mainAction: document.querySelector("#mainAction"),
  mainActionIcon: document.querySelector("#mainActionIcon"),
  mainActionText: document.querySelector("#mainActionText"),
  floatLayer: document.querySelector("#floatLayer"),
  combatMods: document.querySelector("#combatMods"),
  chapterNote: document.querySelector("#chapterNote"),
  combatLog: document.querySelector("#combatLog"),
  roomProgress: document.querySelector("#roomProgress"),
  upgradeList: document.querySelector("#upgradeList"),
  storyLog: document.querySelector("#storyLog"),
  contractList: document.querySelector("#contractList"),
  achievementList: document.querySelector("#achievementList"),
  prestigeButton: document.querySelector("#prestigeButton"),
  prestigeRewardText: document.querySelector("#prestigeRewardText"),
  nextRoomButton: document.querySelector("#nextRoomButton"),
  autoToggle: document.querySelector("#autoToggle"),
  autoAdvanceToggle: document.querySelector("#autoAdvanceToggle"),
  surrenderButton: document.querySelector("#surrenderButton"),
  pauseToggle: document.querySelector("#pauseToggle"),
  pauseModal: document.querySelector("#pauseModal"),
  pauseClose: document.querySelector("#pauseClose"),
  pauseLanguageSelect: document.querySelector("#pauseLanguageSelect"),
  pauseResetButton: document.querySelector("#pauseResetButton"),
  soundToggle: document.querySelector("#soundToggle"),
  autoSaveToggle: document.querySelector("#autoSaveToggle"),
  pauseManualSaves: document.querySelector("#pauseManualSaves"),
  musicVolume: document.querySelector("#musicVolume"),
  musicVolumeValue: document.querySelector("#musicVolumeValue"),
  sfxVolume: document.querySelector("#sfxVolume"),
  sfxVolumeValue: document.querySelector("#sfxVolumeValue"),
  soundLabel: document.querySelector("#soundLabel"),
  assetPackLabel: document.querySelector("#assetPackLabel"),
  saveLabel: document.querySelector("#saveLabel"),
  resetButton: document.querySelector("#resetButton"),
  inventoryToggle: document.querySelector("#inventoryToggle"),
  inventoryModal: document.querySelector("#inventoryModal"),
  inventoryClose: document.querySelector("#inventoryClose"),
  inventoryGrid: document.querySelector("#inventoryGrid"),
  inventoryTitle: document.querySelector("#inventoryTitle"),
  inventoryHelp: document.querySelector("#inventoryHelp"),
  merchantModal: document.querySelector("#merchantModal"),
  merchantClose: document.querySelector("#merchantClose"),
  merchantStock: document.querySelector("#merchantStock"),
  merchantHelp: document.querySelector("#merchantHelp"),
  nextDropText: document.querySelector("#nextDropText"),
  tabs: document.querySelectorAll(".tab"),
  panels: document.querySelectorAll(".panel-view"),
  eventModal: document.querySelector("#eventModal"),
  eventKicker: document.querySelector("#eventKicker"),
  eventTitle: document.querySelector("#eventTitle"),
  eventText: document.querySelector("#eventText"),
  eventClose: document.querySelector("#eventClose"),
  panicFlash: document.querySelector("#panicFlash"),
  panicText: document.querySelector("#panicText"),
};

const ctx = el.canvas.getContext("2d");
let state = loadState();
let audioContext = null;
let musicLoop = null;
let ambientMusic = null;
let externalAssetsReady = false;
let externalMusicReady = false;
const externalSfx = {};
const externalSprites = {};
let lastFrameAt = performance.now();
let lastSaveAt = 0;
let autoTimer = 0;
let frameCounter = 0;
let isPaused = false;
let isMainMenuOpen = true;
let selectedDifficulty = state.difficulty;
let autoClickerBlockActive = Boolean(state.autoClickerNeedsF6);
let recentActionTimes = [];
let autoClickerNoticeTimer = null;
let lastUpgradeSignature = "";
let lastStorySignature = "";
let lastCombatLogSignature = "";
let lastInventorySignature = "";
let lastMerchantSignature = "";
let lastRoomProgressSignature = "";
let lastManualSaveSignature = "";
let lastGoalsSignature = "";

async function loadLocales() {
  const loadedEntries = await Promise.all(
    Object.entries(LOCALE_FILES).map(async ([lang, file]) => {
      try {
        const response = await fetch(file, { cache: "no-store" });
        if (!response.ok) throw new Error(`Locale ${lang} failed`);
        return [lang, await response.json()];
      } catch {
        return [lang, dictionaries[lang] || {}];
      }
    }),
  );
  dictionaries = Object.fromEntries(loadedEntries);
}

function t(key, values = {}) {
  const template = dictionaries[state.lang]?.[key] ?? dictionaries.pt[key] ?? key;
  return Object.entries(values).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, value),
    template,
  );
}

const numberFormatters = {
  pt: new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 0 }),
  en: new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }),
  es: new Intl.NumberFormat("es-ES", { maximumFractionDigits: 0 }),
};

const decimalFormatters = {
  pt: new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 }),
  en: new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }),
  es: new Intl.NumberFormat("es-ES", { maximumFractionDigits: 1 }),
};

function formatNumber(value) {
  const normalized = value >= 0 ? Math.floor(value) : Math.ceil(value);
  const abs = Math.abs(value);
  if (abs >= 1000000) return `${decimalFormatters[state.lang].format(value / 1000000)}M`;
  if (abs >= 10000) return `${decimalFormatters[state.lang].format(value / 1000)}K`;
  return numberFormatters[state.lang].format(normalized);
}

function loadState() {
  try {
    const settings = loadSettings();
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return normalizeState({ ...structuredClone(defaultState), ...settings });
    const saved = JSON.parse(raw);
    return normalizeState({ ...saved, ...settings });
  } catch {
    return structuredClone(defaultState);
  }
}

function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return {};
    const settings = JSON.parse(raw);
    const normalized = {};
    if (["pt", "en", "es"].includes(settings.lang)) normalized.lang = settings.lang;
    if (typeof settings.sound === "boolean") normalized.sound = settings.sound;
    if (typeof settings.autoSaveEnabled === "boolean") normalized.autoSaveEnabled = settings.autoSaveEnabled;
    if (Number.isFinite(Number(settings.musicVolume))) {
      normalized.musicVolume = clampVolume(settings.musicVolume, defaultState.musicVolume);
    }
    if (Number.isFinite(Number(settings.sfxVolume))) {
      normalized.sfxVolume = clampVolume(settings.sfxVolume, defaultState.sfxVolume);
    }
    return normalized;
  } catch {
    return {};
  }
}

function normalizeState(saved) {
  const legacyProgress =
    Boolean(saved.saveCreated) ||
    (saved.clicks || 0) > 0 ||
    (saved.totalFear || 0) > 0 ||
    (saved.room || 0) > 0 ||
    saved.phase === "combat";
  const difficulty = ["easy", "normal", "hard"].includes(saved.difficulty) ? saved.difficulty : "normal";

  return {
    ...structuredClone(defaultState),
    ...saved,
    lang: ["pt", "en", "es"].includes(saved.lang) ? saved.lang : "pt",
    saveCreated: Boolean(saved.saveCreated ?? legacyProgress),
    introRead: Boolean(saved.introRead ?? legacyProgress),
    difficulty,
    gameCompleted: Boolean(saved.gameCompleted || (saved.room || 0) > FINAL_ROOM),
    echoes: Math.max(0, Number(saved.echoes) || 0),
    bestRoom: Math.max(Number(saved.bestRoom) || 0, Number(saved.room) || 0),
    runBestRoom: Math.max(Number(saved.runBestRoom) || 0, Number(saved.room) || 0),
    activeCombo: 0,
    comboExpiresAt: 0,
    itemsFound: Math.max(0, Number(saved.itemsFound) || 0),
    merchantPurchases: Math.max(0, Number(saved.merchantPurchases) || 0),
    completedContracts: Math.max(0, Number(saved.completedContracts) || 0),
    autoSaveEnabled: typeof saved.autoSaveEnabled === "boolean" ? saved.autoSaveEnabled : true,
    musicVolume: clampVolume(saved.musicVolume, defaultState.musicVolume),
    sfxVolume: clampVolume(saved.sfxVolume, defaultState.sfxVolume),
    log: Array.isArray(saved.log) ? saved.log.slice(0, 80) : [],
    unlockedEvents: Array.isArray(saved.unlockedEvents) ? saved.unlockedEvents : [],
    achievements: {
      ...structuredClone(defaultState.achievements),
      ...(saved.achievements || {}),
    },
    contractProgress: {
      ...structuredClone(defaultState.contractProgress),
      ...(saved.contractProgress || {}),
    },
    inventory: {
      ...structuredClone(defaultState.inventory),
      ...(saved.inventory || {}),
    },
    itemBoosts: {
      ...structuredClone(defaultState.itemBoosts),
      ...(saved.itemBoosts || {}),
    },
    upgrades: {
      ...structuredClone(defaultState.upgrades),
      ...(saved.upgrades || {}),
    },
  };
}

function getDifficultySettings() {
  const settings = {
    easy: {
      doorHp: 24,
      enemyHp: 0.86,
      enemyDamage: 0.78,
      reward: 1.18,
      pressure: 0.82,
      sanityLoss: 0.78,
    },
    normal: {
      doorHp: 30,
      enemyHp: 1,
      enemyDamage: 1,
      reward: 1,
      pressure: 1,
      sanityLoss: 1,
    },
    hard: {
      doorHp: 38,
      enemyHp: 1.18,
      enemyDamage: 1.24,
      reward: 0.86,
      pressure: 1.26,
      sanityLoss: 1.28,
    },
  };
  return settings[state.difficulty] ?? settings.normal;
}

function clampVolume(value, fallback) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  return Math.max(0, Math.min(1, numeric));
}

function saveSettings() {
  localStorage.setItem(
    SETTINGS_KEY,
    JSON.stringify({
      lang: state.lang,
      sound: state.sound,
      autoSaveEnabled: state.autoSaveEnabled,
      musicVolume: state.musicVolume,
      sfxVolume: state.sfxVolume,
    }),
  );
}

function saveState(force = false, options = {}) {
  saveSettings();
  if (!state.autoSaveEnabled && !options.ignoreAutoSave) {
    el.saveLabel.textContent = t("autoSaveShortOff");
    return;
  }

  const now = performance.now();
  if (!force && now - lastSaveAt < 1200) return;
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  lastSaveAt = now;
  el.saveLabel.textContent = t("saved");
  window.setTimeout(() => {
    el.saveLabel.textContent = t(state.autoSaveEnabled ? "autoSaveShortOn" : "autoSaveShortOff");
  }, 800);
}

function getUpgradeLevel(id) {
  return state.upgrades[id] || 0;
}

function getUpgradeCost(upgrade) {
  return Math.ceil(upgrade.baseCost * Math.pow(upgrade.scale, getUpgradeLevel(upgrade.id)));
}

function getHitPower() {
  const nails = getUpgradeLevel("nails");
  const blade = getUpgradeLevel("blade");
  const nailBoost = state.itemBoosts.nails || 0;
  const bladeBoost = state.itemBoosts.blade || 0;
  const sanityBonus = state.sanity > 70 ? 1.12 : 1;
  return (
    (2 + nails * 1.25 + nailBoost * 0.85 + blade * 0.8) *
    sanityBonus *
    (1 + bladeBoost * 0.018) *
    getEchoMultiplier() *
    getComboMultiplier()
  );
}

function getAutoDamage() {
  const recorder = getUpgradeLevel("recorder");
  const mirror = getUpgradeLevel("mirror");
  const recorderBoost = state.itemBoosts.recorder || 0;
  const mirrorBoost = state.itemBoosts.mirror || 0;
  return (recorder * 0.8 + recorderBoost * 0.55 + mirror * mirror * 0.11 + mirrorBoost * 0.16) * getEchoMultiplier();
}

function getDefense() {
  const candleBoost = state.itemBoosts.candle || 0;
  return Math.min(0.65, getUpgradeLevel("candle") * 0.025 + candleBoost * 0.018);
}

function getEchoMultiplier() {
  return 1 + Math.min(1.8, state.echoes * 0.08);
}

function getComboMultiplier() {
  if (performance.now() > state.comboExpiresAt) return 1;
  return 1 + Math.min(0.75, state.activeCombo * 0.012);
}

function registerActiveHit() {
  const now = performance.now();
  state.activeCombo = now <= state.comboExpiresAt ? state.activeCombo + 1 : 1;
  state.comboExpiresAt = now + COMBO_WINDOW_MS;
}

function getProgressSnapshot() {
  return {
    bestRoom: Math.max(state.bestRoom || 0, state.room || 0),
    runBestRoom: Math.max(state.runBestRoom || 0, state.room || 0),
    enemiesDefeated: state.enemiesDefeated || 0,
    itemsFound: state.itemsFound || 0,
    merchantPurchases: state.merchantPurchases || 0,
    echoes: state.echoes || 0,
    upgradeLevels: upgradeDefs.reduce((sum, upgrade) => sum + getUpgradeLevel(upgrade.id), 0),
  };
}

function addProgressReward(fear, shards) {
  if (fear > 0) addFear(fear * getEchoMultiplier());
  if (shards > 0) state.shards += shards;
}

function advanceContract(id, amount = 1) {
  const contract = contractDefs.find((entry) => entry.id === id);
  if (!contract) return;
  const nextValue = Math.min(contract.goal, (state.contractProgress[id] || 0) + amount);
  state.contractProgress[id] = nextValue;
  if (nextValue < contract.goal) return;

  addProgressReward(contract.rewardFear, contract.rewardShards);
  state.contractProgress[id] = 0;
  state.completedContracts += 1;
  logLine(
    "gain",
    t("contractCompleted", {
      name: t(contract.nameKey),
      fear: formatNumber(contract.rewardFear),
      shards: contract.rewardShards,
    }),
  );
}

function checkAchievements() {
  const progress = getProgressSnapshot();
  let unlockedAny = false;
  for (const achievement of achievementDefs) {
    if (state.achievements[achievement.id] || !achievement.isUnlocked(progress)) continue;
    state.achievements[achievement.id] = true;
    addProgressReward(achievement.rewardFear, achievement.rewardShards);
    logLine(
      "gain",
      t("achievementUnlocked", {
        name: t(achievement.nameKey),
        fear: formatNumber(achievement.rewardFear),
        shards: achievement.rewardShards,
      }),
    );
    unlockedAny = true;
  }
  if (unlockedAny) playBuySound();
}

function getPrestigeReward() {
  if (state.runBestRoom < PRESTIGE_MIN_ROOM) return 0;
  return Math.max(1, Math.floor(state.runBestRoom / 25) + Math.floor(Math.sqrt(Math.max(0, state.totalFear) / 6000)));
}

function performPrestige() {
  const echoesEarned = getPrestigeReward();
  if (echoesEarned <= 0 || !window.confirm(t("prestigeConfirm", { value: echoesEarned }))) return;

  const preserved = {
    lang: state.lang,
    sound: state.sound,
    autoSaveEnabled: state.autoSaveEnabled,
    musicVolume: state.musicVolume,
    sfxVolume: state.sfxVolume,
    difficulty: state.difficulty,
    saveCreated: true,
    introRead: true,
    echoes: state.echoes + echoesEarned,
    bestRoom: state.bestRoom,
    achievements: state.achievements,
    completedContracts: state.completedContracts,
    autoClickerWarningSeen: state.autoClickerWarningSeen,
  };
  state = {
    ...structuredClone(defaultState),
    ...preserved,
  };
  const doorHp = getDifficultySettingsFor(state.difficulty).doorHp;
  state.targetMaxHp = doorHp;
  state.targetHp = doorHp;
  selectedDifficulty = state.difficulty;
  autoTimer = 0;
  recentActionTimes = [];
  resetRenderSignatures();
  logLine("gain", t("prestigeLog", { value: echoesEarned }));
  checkAchievements();
  saveState(true, { ignoreAutoSave: true });
  render();
}

function isCheckpointRoom(room = state.room) {
  return room > 0 && room % 10 === 0;
}

function isMerchantRoom(room = state.room) {
  return room > 0 && room % MERCHANT_INTERVAL === 0 && !isCheckpointRoom(room) && room < FINAL_ROOM;
}

function getCheckpointDoorDef(room = state.room) {
  if (room >= FINAL_ROOM) return finalDoorDef;
  const index = Math.max(0, Math.floor(room / 10) - 1) % checkpointDoorDefs.length;
  return checkpointDoorDefs[index];
}

function getCurrentCheckpointDoor() {
  if (state.phase !== "combat") return null;
  const door = [...checkpointDoorDefs, finalDoorDef].find((entry) => entry.id === state.targetId);
  return door || null;
}

function getCurrentEnemy() {
  if (state.phase === "door") {
    return null;
  }
  return enemies.find((enemy) => enemy.id === state.targetId) || null;
}

function getCurrentTarget() {
  if (state.phase === "door") {
    return { id: "door", sprite: "door", nameKey: "doorName", kind: "door" };
  }

  if (state.targetId === merchantDef.id) {
    return { ...merchantDef, kind: "merchant" };
  }

  const checkpointDoor = getCurrentCheckpointDoor();
  if (checkpointDoor) {
    return { ...checkpointDoor, kind: "checkpointDoor" };
  }

  const enemy = getCurrentEnemy() || enemies[0];
  return { ...enemy, kind: "enemy" };
}

function createEnemy(room = state.room) {
  const enemy = enemies[(room - 1) % enemies.length];
  const maxHp = Math.round((enemy.baseHp * Math.pow(enemy.hpScale, room - 1) + room * 5) * getDifficultySettings().enemyHp);
  state.targetId = enemy.id;
  state.targetMaxHp = maxHp;
  state.targetHp = maxHp;
  state.enemyTimer = Math.max(0.75, enemy.delay - room * 0.025);
  logLine("bad", t("enemyAppeared", { enemy: t(enemy.nameKey) }));
}

function createCheckpointDoor(room = state.room) {
  const door = getCheckpointDoorDef(room);
  const milestone = Math.max(1, Math.floor(room / 10));
  const growthRate = room >= FINAL_ROOM ? 1.08 : 1.12;
  const maxHp = Math.round(
    (door.baseHp * Math.pow(growthRate, Math.min(99, milestone - 1)) + room * 8) *
      getDifficultySettings().enemyHp,
  );
  state.targetId = door.id;
  state.targetMaxHp = maxHp;
  state.targetHp = maxHp;
  state.enemyTimer = 999;
  logLine("bad", t("checkpointDoorAppeared", { door: t(door.nameKey), room: room }));
}

function createMerchantRoom(room = state.room) {
  state.targetId = merchantDef.id;
  state.targetMaxHp = 1;
  state.targetHp = 0;
  state.enemyTimer = 999;
  logLine("gain", t("merchantAppeared", { room }));
  window.setTimeout(() => {
    if (state.targetId === merchantDef.id && !isMainMenuOpen) openMerchant();
  }, 120);
}

function createRoomTarget(room = state.room) {
  if (isMerchantRoom(room)) {
    createMerchantRoom(room);
  } else if (isCheckpointRoom(room)) {
    createCheckpointDoor(room);
  } else {
    createEnemy(room);
  }
}

function addFear(amount) {
  state.fear += amount;
  state.totalFear += amount;
}

function logLine(type, text) {
  const minutes = Math.floor(performance.now() / 60000);
  const seconds = Math.floor((performance.now() / 1000) % 60);
  const time = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  // Agrupa linhas idênticas e consecutivas ("Você causou 2 dano. x5") para o log não ficar poluído.
  const last = state.log[0];
  if (last && last.type === type && last.text === text) {
    last.count = (last.count || 1) + 1;
    last.time = time;
    return;
  }
  state.log.unshift({ type, text, time });
  state.log = state.log.slice(0, 90);
}

function mainAction() {
  if (autoClickerBlockActive) return;

  unlockAudio();
  startMusicLoop();
  checkAutoClickerTrap();
  if (autoClickerBlockActive) {
    render();
    return;
  }

  state.clicks += 1;

  if (state.targetId === merchantDef.id) {
    openMerchant();
  } else if (state.phase === "door") {
    hitDoor();
  } else {
    hitEnemy(getHitPower(), "player");
  }

  checkStoryEvents();
  saveState();
  render();
}

function checkAutoClickerTrap() {
  if (state.autoClickerWarningSeen) return;

  const now = performance.now();
  recentActionTimes.push(now);
  recentActionTimes = recentActionTimes.filter((time) => now - time <= 1800);
  if (recentActionTimes.length < 12) return;

  const intervals = recentActionTimes.slice(1).map((time, index) => time - recentActionTimes[index]);
  const averageInterval =
    intervals.reduce((total, interval) => total + interval, 0) / Math.max(1, intervals.length);
  const veryFastIntervals = intervals.filter((interval) => interval < 130).length;

  if (averageInterval > 165 && veryFastIntervals < 5) return;

  state.autoClickerWarningSeen = true;
  state.autoClickerNeedsF6 = true;
  autoClickerBlockActive = true;
  recentActionTimes = [];
  triggerPanic(t("autoClickerPanic"), 1300);
  playPanicSound();
  if (autoClickerNoticeTimer) window.clearTimeout(autoClickerNoticeTimer);
  autoClickerNoticeTimer = window.setTimeout(() => {
    autoClickerNoticeTimer = null;
    if (autoClickerBlockActive) {
      openNotice(t("autoClickerTitle"), t("autoClickerText"));
    }
  }, 760);
  saveState(true, { ignoreAutoSave: true });
}

function hitDoor() {
  const difficulty = getDifficultySettings();
  registerActiveHit();
  const damage = getHitPower();
  state.targetHp = Math.max(0, state.targetHp - damage);
  addFear(damage * 0.62);
  state.pressure = Math.min(100, state.pressure + 4.5 * difficulty.pressure);
  state.sanity = Math.max(0, state.sanity - 0.9 * difficulty.sanityLoss);
  showFloat(`-${formatNumber(damage)}`, "hit");
  showPlayerAttack();
  playKnockSound();
  pulseSprite();

  if (state.targetHp <= 0) {
    state.phase = "combat";
    state.room = 1;
    state.targetMaxHp = 1;
    state.targetHp = 1;
    addFear(12);
    state.shards += 1;
    logLine("gain", t("doorBreak"));
    createRoomTarget(1);
    openEvent(storyEvents[1]);
    state.bestRoom = Math.max(state.bestRoom, state.room);
    state.runBestRoom = Math.max(state.runBestRoom, state.room);
    checkAchievements();
  } else if (state.clicks === 1) {
    logLine("hit", t("youHit", { damage: formatNumber(damage) }));
  }
}

function hitEnemy(amount, source) {
  const difficulty = getDifficultySettings();
  const enemy = getCurrentEnemy();
  const checkpointDoor = getCurrentCheckpointDoor();
  const target = enemy || checkpointDoor;
  if (!target || state.targetHp <= 0 || state.gameCompleted) return;
  if (source === "player") registerActiveHit();

  const blade = getUpgradeLevel("blade");
  const isCrit = source === "player" && !checkpointDoor && Math.random() < 0.04 + blade * 0.008;
  const damage = isCrit ? amount * 2.2 : amount;
  state.targetHp = Math.max(0, state.targetHp - damage);
  state.pressure = Math.min(100, state.pressure + (source === "player" ? 2.1 : 0.8) * difficulty.pressure);

  if (source === "auto") {
    logLine("hit", t("autoHit", { damage: formatNumber(damage) }));
  } else {
    logLine("hit", t("youHit", { damage: formatNumber(damage) }));
  }

  showFloat(`-${formatNumber(damage)}`, source === "auto" ? "auto" : "hit");
  if (source === "auto") {
    showPetAttack();
  } else {
    showPlayerAttack();
  }
  playHitSound();
  pulseSprite();

  if (state.targetHp <= 0) {
    if (checkpointDoor) {
      defeatCheckpointDoor(checkpointDoor);
    } else {
      defeatEnemy(enemy);
    }
  }
}

function defeatEnemy(enemy) {
  state.enemiesDefeated += 1;
  const difficulty = getDifficultySettings();
  const mirrorBonus = 1 + getUpgradeLevel("mirror") * 0.08 + (state.itemBoosts.mirror || 0) * 0.035;
  const fearReward = Math.round((enemy.reward + state.room * 4) * mirrorBonus * difficulty.reward);
  const shardReward = state.room % 3 === 0 ? 2 : 1;
  addFear(fearReward);
  state.shards += shardReward;
  state.pressure = Math.max(0, state.pressure - 18);
  state.sanity = Math.min(100, state.sanity + 8 + getUpgradeLevel("candle"));
  state.bestRoom = Math.max(state.bestRoom, state.room);
  state.runBestRoom = Math.max(state.runBestRoom, state.room);
  logLine("good", t("enemyDefeated"));
  logLine("gain", t("reward", { fear: formatNumber(fearReward), shards: shardReward }));
  rollItemDrops();
  advanceContract("hunts");
  advanceContract("rooms");
  checkAchievements();
  playBuySound();
  if (state.autoAdvanceRooms) {
    window.setTimeout(() => {
      if (state.autoAdvanceRooms && state.phase === "combat" && state.targetHp <= 0 && !state.gameCompleted) nextRoom();
    }, 520);
  }
}

function defeatCheckpointDoor(door) {
  const difficulty = getDifficultySettings();
  const mirrorBonus = 1 + getUpgradeLevel("mirror") * 0.08 + (state.itemBoosts.mirror || 0) * 0.035;
  const fearReward = Math.round((door.reward + state.room * 9) * mirrorBonus * difficulty.reward);
  const shardReward = state.room >= FINAL_ROOM ? 25 : Math.max(3, Math.floor(state.room / 10));
  addFear(fearReward);
  state.shards += shardReward;
  state.pressure = Math.max(0, state.pressure - 28);
  state.sanity = Math.min(100, state.sanity + 12 + getUpgradeLevel("candle"));
  state.bestRoom = Math.max(state.bestRoom, state.room);
  state.runBestRoom = Math.max(state.runBestRoom, state.room);
  logLine("good", t("checkpointDoorOpened", { door: t(door.nameKey), room: state.room }));
  logLine("gain", t("reward", { fear: formatNumber(fearReward), shards: shardReward }));
  advanceContract("rooms");
  checkAchievements();
  playBuySound();

  if (state.room >= FINAL_ROOM) {
    completeGame();
    return;
  }

  if (state.autoAdvanceRooms) {
    window.setTimeout(() => {
      if (state.autoAdvanceRooms && state.phase === "combat" && state.targetHp <= 0 && !state.gameCompleted) nextRoom();
    }, 620);
  }
}

function completeGame() {
  if (state.gameCompleted) return;
  state.gameCompleted = true;
  state.autoAdvanceRooms = false;
  state.autoEnabled = false;
  logLine("gain", t("finalLog"));
  triggerPanic(t("finalPanic"), 1250);
  window.setTimeout(() => {
    openNotice(t("finalTitle"), t("finalText"));
  }, 780);
  saveState(true, { ignoreAutoSave: true });
}

function rollItemDrops() {
  for (const item of itemDefs) {
    if (state.enemiesDefeated > 0 && state.enemiesDefeated % item.every === 0) {
      state.inventory[item.id] = (state.inventory[item.id] || 0) + 1;
      state.itemsFound += 1;
      advanceContract("craft");
      logLine("gain", t("itemDropped", { item: t(item.nameKey) }));
    }
  }
}

function getMerchantStock() {
  return merchantStockDefs.filter((offer) => state.room >= offer.unlockRoom);
}

function getMerchantPrice(offer) {
  const merchantVisits = Math.max(1, Math.ceil(state.room / MERCHANT_INTERVAL));
  return Math.ceil(offer.baseCost + merchantVisits * 1.35);
}

function buyMerchantOffer(id) {
  const offer = merchantStockDefs.find((entry) => entry.id === id);
  if (!offer || state.room < offer.unlockRoom) return;

  const price = getMerchantPrice(offer);
  if (state.shards < price) {
    logLine("bad", t("merchantNoCoins"));
    render();
    return;
  }

  state.shards -= price;

  if (offer.itemId) {
    state.inventory[offer.itemId] = (state.inventory[offer.itemId] || 0) + 1;
    const item = itemDefs.find((entry) => entry.id === offer.itemId);
    logLine("gain", t("merchantBought", { item: t(item.nameKey) }));
  } else if (offer.type === "heal") {
    state.playerHp = 100;
    state.sanity = Math.min(100, state.sanity + 35);
    state.pressure = Math.max(0, state.pressure - 35);
    logLine("gain", t("merchantHealed"));
  } else if (offer.type === "bundle") {
    for (const item of itemDefs) {
      state.inventory[item.id] = (state.inventory[item.id] || 0) + 1;
      state.itemsFound += 1;
      advanceContract("craft");
    }
    logLine("gain", t("merchantBundleBought"));
  }

  state.merchantPurchases += 1;
  checkAchievements();
  playBuySound();
  saveState(true);
  resetRenderSignatures();
  render();
}

function useInventoryItem(id) {
  const item = itemDefs.find((entry) => entry.id === id);
  if (!item) return;

  const owned = state.inventory[id] || 0;
  if (owned < item.cost) {
    logLine("bad", t("noItem"));
    render();
    return;
  }

  state.inventory[id] = owned - item.cost;
  state.itemBoosts[item.upgrade] = (state.itemBoosts[item.upgrade] || 0) + 1;
  const upgrade = upgradeDefs.find((entry) => entry.id === item.upgrade);
  logLine("gain", t("itemUsed", { item: t(item.nameKey), upgrade: t(upgrade.nameKey) }));
  checkAchievements();
  saveState(true);
  render();
}

function getNextDropDistance() {
  const defeated = state.enemiesDefeated || 0;
  return Math.min(
    ...itemDefs.map((item) => {
      const remainder = defeated % item.every;
      return remainder === 0 ? item.every : item.every - remainder;
    }),
  );
}

function nextRoom() {
  if (state.phase === "door" || state.targetHp > 0 || state.gameCompleted) return;
  closeMerchant();
  state.room += 1;
  state.bestRoom = Math.max(state.bestRoom, state.room);
  state.runBestRoom = Math.max(state.runBestRoom, state.room);
  createRoomTarget(state.room);
  state.pressure = Math.min(100, state.pressure + 7 * getDifficultySettings().pressure);
  saveState(true);
  render();
}

function enemyAttack() {
  const enemy = getCurrentEnemy();
  if (!enemy || state.targetHp <= 0) return;

  const difficulty = getDifficultySettings();
  const rawDamage = (enemy.damage + state.room * 0.8) * difficulty.enemyDamage;
  const damage = Math.max(1, rawDamage * (1 - getDefense()));
  state.playerHp = Math.max(0, state.playerHp - damage);
  state.sanity = Math.max(0, state.sanity - damage * 0.42 * difficulty.sanityLoss);
  state.pressure = Math.min(100, state.pressure + 4 * difficulty.pressure);
  logLine("bad", t("enemyHit", { enemy: t(enemy.nameKey), damage: formatNumber(damage) }));
  showFloat(`-${formatNumber(damage)}`, "bad");
  playPanicSound();

  if (state.playerHp <= 0 || state.sanity <= 0) {
    triggerPanic(t(state.sanity <= 0 ? "panicBlink" : "panicOpen"));
    state.playerHp = 72;
    state.sanity = 48;
    state.pressure = Math.max(18, state.pressure - 34);
    addFear(Math.max(8, state.room * 4));
  }
}

function retreat() {
  const doorHp = getDifficultySettings().doorHp;
  state.phase = "door";
  state.room = 0;
  state.targetId = "door";
  state.targetMaxHp = doorHp;
  state.targetHp = doorHp;
  state.playerHp = Math.max(65, state.playerHp);
  state.pressure = Math.max(0, state.pressure - 25);
  logLine("bad", t("retreatLog"));
  saveState(true);
  render();
}

function buyUpgrade(id) {
  const upgrade = upgradeDefs.find((item) => item.id === id);
  if (!upgrade) return;

  const level = getUpgradeLevel(id);
  const cost = getUpgradeCost(upgrade);
  if (level >= upgrade.max || Math.floor(state.fear) < cost || state.totalFear < upgrade.unlockAt) return;

  state.fear -= cost;
  state.upgrades[id] = level + 1;
  if (getAutoDamage() > 0) {
    state.autoEnabled = true;
  }
  logLine("gain", t("upgradeBought", { name: t(upgrade.nameKey) }));
  advanceContract("rituals");
  checkAchievements();
  playBuySound();
  saveState(true);
  render();
}

function checkStoryEvents() {
  for (const event of storyEvents) {
    if (state.totalFear >= event.totalFear && !state.unlockedEvents.includes(event.id)) {
      state.unlockedEvents.push(event.id);
      openEvent(event);
      break;
    }
  }
}

function openEvent(event) {
  if (!event) return;
  el.eventKicker.textContent = t("records");
  el.eventTitle.textContent = t(event.titleKey);
  el.eventText.textContent = t(event.textKey);
  el.eventModal.classList.add("is-open");
  el.eventModal.setAttribute("aria-hidden", "false");
  playWhisperSound();
}

function openNotice(title, text) {
  el.eventKicker.textContent = t("pause");
  el.eventTitle.textContent = title;
  el.eventText.textContent = text;
  el.eventModal.classList.add("is-open");
  el.eventModal.setAttribute("aria-hidden", "false");
  playWhisperSound();
}

function closeEvent() {
  if (autoClickerBlockActive) {
    releaseAutoClickerBlock();
    return;
  }

  el.eventModal.classList.remove("is-open");
  el.eventModal.setAttribute("aria-hidden", "true");
}

function renderI18n() {
  document.documentElement.lang = state.lang === "pt" ? "pt-BR" : state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = key === "prototype" ? `${t(key)} ${GAME_VERSION}` : t(key);
  });
  document.title = t("gameTitle");
}

function render() {
  renderI18n();
  const target = getCurrentTarget();
  const enemy = target.kind === "enemy" ? getCurrentEnemy() : null;
  const phaseDoor = state.phase === "door";
  const phaseCheckpointDoor = target.kind === "checkpointDoor";
  const phaseMerchant = target.kind === "merchant";
  const phaseAnyDoor = phaseDoor || phaseCheckpointDoor;
  const targetName = t(target.nameKey);
  const targetKicker = phaseDoor
    ? t("doorKicker")
    : phaseMerchant
      ? t("merchantKicker", { room: state.room })
      : phaseCheckpointDoor
        ? t("checkpointDoorKicker", { room: state.room })
        : t("room", { value: state.room });
  const hpPercent = Math.max(0, Math.min(100, (state.targetHp / state.targetMaxHp) * 100));
  const playerHpPercent = Math.max(0, Math.min(100, state.playerHp));

  el.languageSelect.value = state.lang;
  el.menuLanguageSelect.value = state.lang;
  el.menuVersion.textContent = `v${GAME_VERSION}`;
  el.roomLabel.textContent = t("room", { value: state.room });
  document.querySelector(".pixel-title").textContent = t(phaseDoor ? "combatMode" : "combatModeFight");
  el.fearValue.textContent = formatNumber(state.fear);
  el.fearStat.textContent = formatNumber(state.fear);
  el.shardValue.textContent = formatNumber(state.shards);
  el.hitValue.textContent = formatNumber(getHitPower());
  el.autoValue.textContent = `${decimalFormatters[state.lang].format(getAutoDamage())}/s`;
  el.sanityValue.textContent = `${Math.round(state.sanity)}%`;
  el.comboValue.textContent = `x${decimalFormatters[state.lang].format(getComboMultiplier())}`;
  el.echoValue.textContent = formatNumber(state.echoes);
  el.bestRoomValue.textContent = t(state.bestRoom > 0 ? "roomShort" : "roomDoor", { value: state.bestRoom });
  el.pressureText.textContent = `${Math.round(state.pressure)}%`;
  el.playerHpText.textContent = `${formatNumber(state.playerHp)}/100`;
  el.playerHpBar.style.width = `${playerHpPercent}%`;
  el.targetKicker.textContent = targetKicker;
  el.targetName.textContent = targetName;
  el.targetHpBar.style.width = `${hpPercent}%`;
  el.targetHpText.textContent = `${formatNumber(state.targetHp)}/${formatNumber(state.targetMaxHp)}`;
  el.mainActionText.textContent = autoClickerBlockActive
    ? t("autoClickerLockedAction")
    : t(phaseMerchant ? "merchantOpenShop" : phaseAnyDoor ? "knock" : "attack");
  el.mainActionIcon.textContent = autoClickerBlockActive ? "F6" : phaseMerchant ? "¤" : phaseAnyDoor ? "▥" : "†";
  el.mainAction.disabled = autoClickerBlockActive || state.gameCompleted || (!phaseMerchant && state.targetHp <= 0);
  el.nextRoomButton.disabled = phaseDoor || state.targetHp > 0 || state.gameCompleted;
  el.autoToggle.querySelector("span:last-child").textContent = t(state.autoEnabled ? "autoOn" : "autoOff");
  el.autoAdvanceToggle.querySelector("span:last-child").textContent = t(
    state.autoAdvanceRooms ? "autoAdvanceOn" : "autoAdvanceOff",
  );
  el.soundLabel.textContent = t(state.sound ? "soundOn" : "soundOff");
  el.soundToggle.textContent = t(state.sound ? "soundOn" : "soundOff");
  el.autoSaveToggle.textContent = t(state.autoSaveEnabled ? "autoSaveOn" : "autoSaveOff");
  el.menuAutoSaveToggle.textContent = t(state.autoSaveEnabled ? "autoSaveOn" : "autoSaveOff");
  el.saveLabel.textContent = t(state.autoSaveEnabled ? "autoSaveShortOn" : "autoSaveShortOff");
  el.musicVolume.value = String(Math.round(state.musicVolume * 100));
  el.musicVolumeValue.textContent = `${Math.round(state.musicVolume * 100)}%`;
  el.menuMusicVolume.value = String(Math.round(state.musicVolume * 100));
  el.menuMusicVolumeValue.textContent = `${Math.round(state.musicVolume * 100)}%`;
  el.sfxVolume.value = String(Math.round(state.sfxVolume * 100));
  el.sfxVolumeValue.textContent = `${Math.round(state.sfxVolume * 100)}%`;
  el.menuSfxVolume.value = String(Math.round(state.sfxVolume * 100));
  el.menuSfxVolumeValue.textContent = `${Math.round(state.sfxVolume * 100)}%`;
  el.pauseLanguageSelect.value = state.lang;
  el.continueButton.disabled = !state.saveCreated;
  el.difficultyButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.difficulty === selectedDifficulty);
  });
  el.assetPackLabel.textContent = t(externalAssetsReady ? "assetExternal" : "assetInternal");
  el.inventoryTitle.textContent = t("inventoryTitle");
  el.inventoryHelp.textContent = `${t("inventoryHelp")} ${t("enemiesDefeated", {
    value: formatNumber(state.enemiesDefeated),
  })}`;
  el.nextDropText.textContent = t("nextDrop", { value: getNextDropDistance() });
  el.chapterNote.textContent = getCaption();
  el.arena.classList.toggle("is-door", phaseAnyDoor);
  el.arena.classList.toggle("is-checkpoint-door", phaseCheckpointDoor);
  el.arena.classList.toggle("is-merchant-room", phaseMerchant);
  el.arena.classList.toggle("is-final-room", state.gameCompleted || state.room >= FINAL_ROOM);
  el.arena.dataset.target = target.sprite;
  el.enemySprite.className = `enemy-sprite is-${target.sprite}`;
  el.petSprite.classList.toggle("is-active", !phaseAnyDoor && state.autoEnabled && getAutoDamage() > 0);
  el.portrait.className = `portrait is-${target.sprite}`;
  applyExternalSprite(target.sprite);

  renderCombatLog();
  renderRoomProgress();
  renderCombatMods();
  renderManualSaves();
  renderUpgrades();
  renderStoryLog();
  renderInventory();
  renderMerchant();
  renderGoals();
}

function getCaption() {
  if (state.gameCompleted) return t("finalCaption");
  if (state.phase === "door") return t("doorIntro");
  if (state.targetId === merchantDef.id) return t("merchantCaption");
  if (state.targetHp <= 0) return t("nextRoom");
  const checkpointDoor = getCurrentCheckpointDoor();
  if (checkpointDoor) return t("checkpointDoorAppeared", { door: t(checkpointDoor.nameKey), room: state.room });
  const enemy = getCurrentEnemy();
  return enemy ? t("enemyAppeared", { enemy: t(enemy.nameKey) }) : t("room", { value: state.room });
}

function renderCombatMods() {
  const enemy = getCurrentEnemy();
  const phaseDoor = state.phase === "door";
  const phaseCheckpointDoor = Boolean(getCurrentCheckpointDoor());
  const phaseMerchant = state.targetId === merchantDef.id;
  const critChance = Math.min(65, 4 + getUpgradeLevel("blade") * 0.8);
  const defense = getDefense() * 100;
  const autoDamage = getAutoDamage();
  const enemyDelay =
    phaseDoor || phaseCheckpointDoor || phaseMerchant ? 0 : Math.max(0.75, (enemy?.delay || 1) - state.room * 0.025);
  const values = [
    { icon: "†", value: `${decimalFormatters[state.lang].format(critChance)}%` },
    { icon: "▥", value: `${decimalFormatters[state.lang].format(autoDamage)}/s` },
    { icon: "※", value: `x${decimalFormatters[state.lang].format(getEchoMultiplier())}` },
    { icon: "▣", value: `${decimalFormatters[state.lang].format(defense)}%` },
    { icon: "◇", value: phaseDoor || phaseCheckpointDoor || phaseMerchant ? "0.0s" : `${decimalFormatters[state.lang].format(enemyDelay)}s` },
    { icon: "☗", value: `${Math.round(state.pressure)}%` },
    { icon: "◈", value: formatNumber(state.shards) },
  ];

  el.combatMods.replaceChildren(
    ...values.map((entry) => {
      const row = document.createElement("span");
      const value = document.createElement("strong");
      const icon = document.createElement("i");
      value.textContent = entry.value;
      icon.textContent = entry.icon;
      row.append(value, icon);
      return row;
    }),
  );
}

function renderCombatLog() {
  const signature = `${state.lang}|${state.log
    .map((line) => `${line.time}:${line.type}:${line.text}:${line.count || 1}`)
    .join("|")}`;
  if (signature === lastCombatLogSignature) return;
  lastCombatLogSignature = signature;

  if (!state.log.length) {
    el.combatLog.replaceChildren(createLogItem("hit", t("doorIntro"), "00:00"));
    return;
  }
  el.combatLog.replaceChildren(
    ...state.log.slice(0, 42).map((line) => createLogItem(line.type, line.text, line.time, line.count)),
  );
}

function renderRoomProgress() {
  const currentRoom = state.phase === "door" ? 0 : state.room;
  const visibleCount = 15;
  const start = Math.max(0, Math.min(Math.max(0, FINAL_ROOM - visibleCount + 1), currentRoom - 7));
  const nodes = Array.from({ length: visibleCount }, (_, index) => start + index).filter((room) => room <= FINAL_ROOM);
  const signature = `${state.lang}|${state.phase}|${state.room}|${state.targetId}|${state.targetHp <= 0}|${state.gameCompleted}|${nodes.join(",")}`;
  if (signature === lastRoomProgressSignature) return;
  lastRoomProgressSignature = signature;

  el.roomProgress.replaceChildren(
    ...nodes.map((roomNumber) => {
      const item = document.createElement("li");
      const marker = document.createElement("span");
      const checkpoint = isCheckpointRoom(roomNumber);
      const merchant = isMerchantRoom(roomNumber);
      const final = roomNumber === FINAL_ROOM;
      const completed =
        roomNumber === 0 ? state.phase !== "door" : roomNumber < state.room || (roomNumber === state.room && state.targetHp <= 0);
      const current = roomNumber === currentRoom && !completed;
      const future = roomNumber > currentRoom;

      item.className = [
        "room-node",
        roomNumber === 0 ? "is-door" : "",
        checkpoint ? "is-checkpoint" : "",
        merchant ? "is-merchant" : "",
        final ? "is-final" : "",
        completed ? "is-complete" : "",
        current ? "is-current" : "",
        future ? "is-future" : "",
      ]
        .filter(Boolean)
        .join(" ");
      marker.textContent =
        roomNumber === 0
          ? "P"
          : final
            ? "F"
            : checkpoint
              ? "D"
              : merchant
                ? "M"
              : current
                ? String(roomNumber)
                : String(roomNumber % 10);
      marker.title =
        roomNumber === 0
          ? t("roomDoor")
          : merchant
            ? t("merchantKicker", { room: roomNumber })
            : checkpoint
            ? t("checkpointDoorKicker", { room: roomNumber })
            : t("room", { value: roomNumber });
      item.append(marker);
      return item;
    }),
  );
}

function renderManualSaves() {
  const slots = [1, 2, 3].map((slot) => readManualSlot(slot));
  const signature = JSON.stringify({
    lang: state.lang,
    slots: slots.map((slot) =>
      slot
        ? {
            savedAt: slot.savedAt,
            room: slot.state?.room,
            phase: slot.state?.phase,
            fear: Math.floor(slot.state?.fear || 0),
          }
        : null,
    ),
  });
  if (signature === lastManualSaveSignature) return;
  lastManualSaveSignature = signature;

  const rows = slots.map((slotData, index) => createManualSaveRow(index + 1, slotData));
  el.menuManualSaves.replaceChildren(...rows.map((row) => row.cloneNode(true)));
  el.pauseManualSaves.replaceChildren(...rows);
  wireManualSaveButtons(el.menuManualSaves);
  wireManualSaveButtons(el.pauseManualSaves);
}

function createManualSaveRow(slot, slotData) {
  const row = document.createElement("article");
  row.className = "manual-save-row";

  const info = document.createElement("div");
  const title = document.createElement("strong");
  const detail = document.createElement("span");
  title.textContent = t("manualSlot", { value: slot });
  detail.textContent = slotData ? describeManualSlot(slotData) : t("emptySlot");
  info.append(title, detail);

  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.dataset.manualSave = String(slot);
  saveButton.textContent = t("saveSlot");

  const loadButton = document.createElement("button");
  loadButton.type = "button";
  loadButton.dataset.manualLoad = String(slot);
  loadButton.textContent = t("loadSlot");
  loadButton.disabled = !slotData;

  row.append(info, saveButton, loadButton);
  return row;
}

function describeManualSlot(slotData) {
  const saved = normalizeState(slotData.state || {});
  const label = saved.phase === "door" ? t("roomDoor") : t("room", { value: saved.room });
  const date = new Date(slotData.savedAt);
  const when = Number.isNaN(date.getTime()) ? "" : date.toLocaleString();
  return `${label} | ${formatNumber(saved.fear)} ${t("fear").toLowerCase()}${when ? ` | ${when}` : ""}`;
}

function wireManualSaveButtons(container) {
  container.querySelectorAll("[data-manual-save]").forEach((button) => {
    button.addEventListener("click", () => saveManualSlot(Number(button.dataset.manualSave)));
  });
  container.querySelectorAll("[data-manual-load]").forEach((button) => {
    button.addEventListener("click", () => loadManualSlot(Number(button.dataset.manualLoad)));
  });
}

function manualSlotKey(slot) {
  return `${MANUAL_SAVE_PREFIX}${slot}`;
}

function resetRenderSignatures() {
  lastUpgradeSignature = "";
  lastStorySignature = "";
  lastCombatLogSignature = "";
  lastInventorySignature = "";
  lastMerchantSignature = "";
  lastRoomProgressSignature = "";
  lastManualSaveSignature = "";
  lastGoalsSignature = "";
}

function readManualSlot(slot) {
  try {
    const raw = localStorage.getItem(manualSlotKey(slot));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveManualSlot(slot) {
  saveSettings();
  localStorage.setItem(
    manualSlotKey(slot),
    JSON.stringify({
      savedAt: new Date().toISOString(),
      version: GAME_VERSION,
      state,
    }),
  );
  lastManualSaveSignature = "";
  logLine("gain", t("manualSaved", { value: slot }));
  render();
}

function loadManualSlot(slot) {
  const slotData = readManualSlot(slot);
  if (!slotData?.state) {
    logLine("bad", t("noManualSave"));
    render();
    return;
  }

  state = normalizeState(slotData.state);
  selectedDifficulty = state.difficulty;
  autoClickerBlockActive = Boolean(state.autoClickerNeedsF6);
  recentActionTimes = [];
  autoTimer = 0;
  isPaused = false;
  el.pauseModal.classList.remove("is-open");
  el.pauseModal.setAttribute("aria-hidden", "true");
  el.inventoryModal.classList.remove("is-open");
  el.inventoryModal.setAttribute("aria-hidden", "true");
  resetRenderSignatures();
  saveSettings();
  if (state.autoSaveEnabled) saveState(true, { ignoreAutoSave: true });
  logLine("gain", t("manualLoaded", { value: slot }));
  closeMainMenu();
  render();
}

function createLogItem(type, text, time, count = 1) {
  const item = document.createElement("li");
  const timeSpan = document.createElement("span");
  const textSpan = document.createElement("span");
  timeSpan.className = "time";
  textSpan.className = type;
  timeSpan.textContent = `(${time}) `;
  textSpan.textContent = count > 1 ? `${text} x${count}` : text;
  item.append(timeSpan, textSpan);
  return item;
}

function renderUpgrades() {
  const signature = JSON.stringify({
    lang: state.lang,
    fear: Math.floor(state.fear),
    totalFear: Math.floor(state.totalFear),
    upgrades: state.upgrades,
    boosts: state.itemBoosts,
  });
  if (signature === lastUpgradeSignature) return;
  lastUpgradeSignature = signature;

  el.upgradeList.replaceChildren(
    ...upgradeDefs.map((upgrade) => {
      const level = getUpgradeLevel(upgrade.id);
      const unlocked = state.totalFear >= upgrade.unlockAt;
      const atMax = level >= upgrade.max;
      const cost = getUpgradeCost(upgrade);
      const canBuy = unlocked && !atMax && Math.floor(state.fear) >= cost;

      const card = document.createElement("article");
      card.className = `upgrade-card${unlocked ? "" : " is-locked"}`;
      card.dataset.upgradeId = upgrade.id;

      const info = document.createElement("div");
      const title = document.createElement("h3");
      const description = document.createElement("p");
      title.textContent = unlocked ? t(upgrade.nameKey) : t("locked");
      description.textContent = unlocked
        ? t(upgrade.descriptionKey)
        : t("unlock", { value: formatNumber(upgrade.unlockAt) });

      const meta = document.createElement("div");
      meta.className = "upgrade-meta";
      const levelTag = document.createElement("span");
      const costTag = document.createElement("span");
      const boostTag = document.createElement("span");
      levelTag.textContent = `${t("level")} ${level}/${upgrade.max}`;
      costTag.textContent = atMax ? t("complete") : `${formatNumber(cost)} ${t("fear").toLowerCase()}`;
      boostTag.textContent = `+${state.itemBoosts[upgrade.id] || 0}`;
      meta.append(levelTag, costTag, boostTag);
      info.append(title, description, meta);

      const button = document.createElement("button");
      button.className = "buy-button";
      button.type = "button";
      button.textContent = atMax ? t("ok") : t("buy");
      button.disabled = !canBuy;
      button.addEventListener("click", () => buyUpgrade(upgrade.id));

      card.append(info, button);
      return card;
    }),
  );
}

function renderInventory() {
  const signature = JSON.stringify({
    lang: state.lang,
    inventory: state.inventory,
    boosts: state.itemBoosts,
    defeated: state.enemiesDefeated,
  });
  if (signature === lastInventorySignature) return;
  lastInventorySignature = signature;

  const itemSlots = itemDefs.map((item) => {
    const owned = state.inventory[item.id] || 0;
    const boostLevel = state.itemBoosts[item.upgrade] || 0;
    const slot = document.createElement("article");
    slot.className = `inventory-slot${owned > 0 ? " has-item" : ""}`;
    slot.dataset.itemId = item.id;

    const icon = document.createElement("div");
    icon.className = "item-icon";
    icon.textContent = item.icon;

    const count = document.createElement("span");
    count.className = "item-count";
    count.textContent = `x${owned}`;

    const title = document.createElement("strong");
    title.textContent = t(item.nameKey);

    const description = document.createElement("p");
    description.textContent = `${t(item.descriptionKey)} +${boostLevel}`;

    const cost = document.createElement("p");
    cost.textContent = `${t("itemOwned", { value: owned })} | ${t("itemCost", { value: item.cost })}`;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = t("useItem");
    button.disabled = owned < item.cost;
    button.addEventListener("click", () => useInventoryItem(item.id));

    slot.append(icon, count, title, description, cost, button);
    return slot;
  });

  const emptySlots = Array.from({ length: Math.max(0, 20 - itemSlots.length) }, () => {
    const slot = document.createElement("article");
    slot.className = "inventory-slot";
    return slot;
  });

  el.inventoryGrid.replaceChildren(...itemSlots, ...emptySlots);
}

function renderMerchant() {
  if (!el.merchantStock) return;
  const signature = JSON.stringify({
    lang: state.lang,
    room: state.room,
    shards: state.shards,
    inventory: state.inventory,
    hp: Math.round(state.playerHp),
    sanity: Math.round(state.sanity),
    targetId: state.targetId,
  });
  if (signature === lastMerchantSignature) return;
  lastMerchantSignature = signature;

  const stock = getMerchantStock();
  el.merchantHelp.textContent = t("merchantHelp", { coins: formatNumber(state.shards) });

  el.merchantStock.replaceChildren(
    ...stock.map((offer) => {
      const price = getMerchantPrice(offer);
      const item = offer.itemId ? itemDefs.find((entry) => entry.id === offer.itemId) : null;
      const card = document.createElement("article");
      card.className = "merchant-card";

      const info = document.createElement("div");
      const icon = document.createElement("span");
      const title = document.createElement("strong");
      const description = document.createElement("p");
      icon.className = "merchant-icon";
      icon.textContent = item?.icon || (offer.type === "heal" ? "✚" : "▦");
      title.textContent = item ? t(item.nameKey) : t(offer.nameKey);
      description.textContent = item ? t(item.descriptionKey) : t(offer.descriptionKey);
      info.append(icon, title, description);

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = t("merchantBuy", { price: formatNumber(price) });
      button.disabled = state.shards < price;
      button.addEventListener("click", () => buyMerchantOffer(offer.id));

      card.append(info, button);
      return card;
    }),
  );
}

function renderStoryLog() {
  const signature = `${state.lang}|${state.unlockedEvents.join(",")}`;
  if (signature === lastStorySignature) return;
  lastStorySignature = signature;

  const unlocked = storyEvents.filter((event) => state.unlockedEvents.includes(event.id));

  if (!unlocked.length) {
    const item = document.createElement("li");
    const title = document.createElement("strong");
    const text = document.createElement("span");
    title.textContent = t("noRecord");
    text.textContent = t("noRecordText");
    item.append(title, text);
    el.storyLog.replaceChildren(item);
    return;
  }

  el.storyLog.replaceChildren(
    ...unlocked.map((event) => {
      const item = document.createElement("li");
      const title = document.createElement("strong");
      const text = document.createElement("span");
      title.textContent = t(event.titleKey);
      text.textContent = t(event.textKey);
      item.append(title, text);
      return item;
    }),
  );
}

function renderGoals() {
  if (!el.contractList || !el.achievementList) return;
  const prestigeReward = getPrestigeReward();
  const signature = JSON.stringify({
    lang: state.lang,
    contractProgress: state.contractProgress,
    achievements: state.achievements,
    progress: getProgressSnapshot(),
    prestigeReward,
  });
  if (signature === lastGoalsSignature) return;
  lastGoalsSignature = signature;

  el.contractList.replaceChildren(...contractDefs.map((contract) => createContractCard(contract)));
  el.achievementList.replaceChildren(...achievementDefs.map((achievement) => createAchievementCard(achievement)));
  el.prestigeButton.disabled = prestigeReward <= 0 || state.gameCompleted;
  el.prestigeRewardText.textContent =
    prestigeReward > 0
      ? t("prestigeReady", { value: prestigeReward })
      : t("prestigeLocked", { value: PRESTIGE_MIN_ROOM });
}

function createContractCard(contract) {
  const value = state.contractProgress[contract.id] || 0;
  const percent = Math.max(0, Math.min(100, (value / contract.goal) * 100));
  const card = document.createElement("article");
  card.className = `goal-card${value >= contract.goal ? " is-complete" : ""}`;

  const title = document.createElement("strong");
  const description = document.createElement("p");
  const progress = document.createElement("div");
  const bar = document.createElement("span");
  const fill = document.createElement("i");
  const label = document.createElement("span");
  progress.className = "goal-progress";
  fill.style.width = `${percent}%`;
  title.textContent = t(contract.nameKey);
  description.textContent = t(contract.descriptionKey, {
    goal: contract.goal,
    fear: formatNumber(contract.rewardFear),
    shards: contract.rewardShards,
  });
  label.textContent = `${formatNumber(value)}/${formatNumber(contract.goal)}`;
  bar.append(fill);
  progress.append(bar, label);
  card.append(title, description, progress);
  return card;
}

function createAchievementCard(achievement) {
  const unlocked = Boolean(state.achievements[achievement.id]);
  const card = document.createElement("article");
  card.className = `goal-card${unlocked ? " is-complete" : ""}`;

  const title = document.createElement("strong");
  const description = document.createElement("p");
  const progress = document.createElement("p");
  title.textContent = unlocked ? t(achievement.nameKey) : t("locked");
  description.textContent = t(achievement.descriptionKey);
  progress.textContent = unlocked
    ? t("achievementClaimed", {
        fear: formatNumber(achievement.rewardFear),
        shards: achievement.rewardShards,
      })
    : t("achievementReward", {
        fear: formatNumber(achievement.rewardFear),
        shards: achievement.rewardShards,
      });
  card.append(title, description, progress);
  return card;
}

function drawArena() {
  frameCounter += 1;
  const w = el.canvas.width;
  const h = el.canvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#020302";
  ctx.fillRect(0, 0, w, h);

  const phaseDoor = state.phase === "door";
  const target = getCurrentTarget();
  const phaseAnyDoor = phaseDoor || target.kind === "checkpointDoor";
  const paletteByTarget = {
    door: ["#0c4a18", "#5d5d50", "#8e171d", "#1b1b1b"],
    "door-ash": ["#375038", "#8f8d79", "#ff5b6c", "#151515"],
    "door-bone": ["#6a642e", "#d8d6b5", "#b90022", "#2b2418"],
    "door-eye": ["#2b214f", "#b34bff", "#00e635", "#13051d"],
    "door-chain": ["#414141", "#f2f2e8", "#22b8ff", "#090909"],
    "door-blood": ["#5f050b", "#ff5b6c", "#ffe047", "#190004"],
    "door-final": ["#ffffff", "#ffe047", "#ff5b6c", "#000000"],
    rat: ["#1d2a1b", "#6f6b55", "#9a202c", "#f2f2e8"],
    skeleton: ["#0f6a20", "#c8dcb2", "#b90022", "#1b31a8"],
    crawler: ["#2b1115", "#9c383f", "#f2f2e8", "#120406"],
    doll: ["#4b2f42", "#f0d7c7", "#22b8ff", "#180610"],
    wraith: ["#252572", "#7c1fa4", "#e2e2d5", "#840012"],
    moth: ["#51471d", "#ffe047", "#f2f2e8", "#1b1605"],
    hound: ["#351010", "#9a202c", "#f2f2e8", "#090303"],
    mask: ["#2c7a1d", "#9f32ef", "#e7e5cf", "#0328aa"],
    spider: ["#1b1b1b", "#b34bff", "#00e635", "#050505"],
    priest: ["#1f1f1f", "#e6e2c8", "#ff5b6c", "#060606"],
    brute: ["#3d4c25", "#c8dcb2", "#b90022", "#0c1208"],
    tvhead: ["#0d2335", "#22b8ff", "#f2f2e8", "#02080d"],
    fungus: ["#263d22", "#00e635", "#b34bff", "#061108"],
    twins: ["#332047", "#f2f2e8", "#ff5b6c", "#09030f"],
    choir: ["#3a1024", "#f2f2e8", "#22b8ff", "#09030f"],
    wellmouth: ["#101010", "#5d5d50", "#ff5b6c", "#000000"],
  };
  const palette = paletteByTarget[target.sprite] || paletteByTarget.door;
  const pulse = Math.sin(frameCounter / 18) * 10;
  const centerX = w / 2;
  const centerY = h / 2 + 10;
  const radius = phaseAnyDoor ? 78 + pulse + state.pressure * 0.08 : 92 + pulse + state.pressure * 0.18;

  for (let i = 0; i < 1800; i += 1) {
    const angle = (i * 137.5 + frameCounter * 0.08) * (Math.PI / 180);
    const dist = Math.sqrt((i * 47) % 1000) / Math.sqrt(1000);
    const x = centerX + Math.cos(angle) * radius * dist * 1.8;
    const y = centerY + Math.sin(angle) * radius * dist;
    const flicker = (i + frameCounter) % 9;
    ctx.fillStyle = flicker < 4 ? palette[0] : flicker < 7 ? palette[1] : palette[2];
    ctx.fillRect(Math.floor(x / 2) * 2, Math.floor(y / 2) * 2, 2, 2);
  }

  for (let i = 0; i < 42; i += 1) {
    const x = (i * 83 + frameCounter * (i % 4)) % w;
    const y = (i * 47 + frameCounter * 0.7) % h;
    ctx.fillStyle = i % 3 === 0 ? "#b90022" : i % 3 === 1 ? "#f2f2e8" : palette[3];
    ctx.fillRect(Math.floor(x / 3) * 3, Math.floor(y / 3) * 3, i % 2 ? 3 : 6, i % 2 ? 6 : 3);
  }

  ctx.strokeStyle = phaseAnyDoor ? palette[2] : palette[1];
  ctx.lineWidth = 3;
  ctx.strokeRect(centerX - 76, centerY - 58, 152, 116);
  ctx.strokeStyle = palette[2];
  ctx.globalAlpha = 0.45;
  ctx.strokeRect(centerX - 90, centerY - 72, 180, 144);
  ctx.globalAlpha = 1;

  ctx.fillStyle = phaseAnyDoor ? "#17090a" : "#171711";
  ctx.fillRect(centerX - 48, centerY - 36, 96, 72);

  if (!phaseAnyDoor) {
    ctx.fillStyle = "#f2f2e8";
    for (let i = 0; i < 9; i += 1) {
      const x = 48 + ((i * 71 + frameCounter) % (w - 96));
      const y = 34 + ((i * 43) % (h - 82));
      ctx.fillRect(x, y, 10, 6);
    }
  }
}

function tick(deltaSeconds) {
  if (isPaused || isMainMenuOpen || isBlockingGameplayMessageOpen()) {
    render();
    drawArena();
    return;
  }

  if (state.activeCombo > 0 && performance.now() > state.comboExpiresAt) {
    state.activeCombo = 0;
  }

  const autoDamage = getAutoDamage();
  if (state.phase === "combat" && state.targetHp > 0) {
    const enemy = getCurrentEnemy();
    if (enemy) {
      state.enemyTimer -= deltaSeconds;
    }
    if (enemy && state.enemyTimer <= 0) {
      state.enemyTimer = Math.max(0.75, enemy.delay - state.room * 0.025);
      enemyAttack();
    }

    if (state.autoEnabled && autoDamage > 0) {
      autoTimer += deltaSeconds;
      if (autoTimer >= 1) {
        autoTimer = 0;
        hitEnemy(autoDamage, "auto");
      }
    }
  }

  const candle = getUpgradeLevel("candle");
  const candleBoost = state.itemBoosts.candle || 0;
  state.sanity = Math.min(100, state.sanity + (0.25 + candle * 0.03 + candleBoost * 0.018) * deltaSeconds);
  state.pressure = Math.max(0, state.pressure - (1.2 + candle * 0.03 + candleBoost * 0.016) * deltaSeconds);
  saveState();
  render();
  drawArena();
}

function isBlockingGameplayMessageOpen() {
  return (
    el.eventModal.classList.contains("is-open") ||
    el.inventoryModal.classList.contains("is-open") ||
    el.merchantModal.classList.contains("is-open") ||
    el.pauseModal.classList.contains("is-open")
  );
}

function loop(now) {
  const deltaSeconds = Math.min(0.2, (now - lastFrameAt) / 1000);
  lastFrameAt = now;
  tick(deltaSeconds);
  requestAnimationFrame(loop);
}

function showFloat(text, type) {
  const score = document.createElement("span");
  score.className = `float-score is-${type}`;
  score.textContent = text;
  const left = type === "bad" ? 16 + Math.random() * 12 : 72 + Math.random() * 18;
  const top = type === "auto" ? 48 + Math.random() * 24 : 34 + Math.random() * 34;
  score.style.left = `${left}%`;
  score.style.top = `${top}%`;
  el.floatLayer.append(score);
  window.setTimeout(() => score.remove(), 980);
}

function pulseSprite() {
  el.enemySprite.classList.add("is-hit");
  window.setTimeout(() => el.enemySprite.classList.remove("is-hit"), 180);
}

function showPlayerAttack() {
  el.attackSprite.classList.remove("is-swinging");
  void el.attackSprite.offsetWidth;
  el.attackSprite.classList.add("is-swinging");
  showSlash("player");
}

function showPetAttack() {
  el.petSprite.classList.add("is-active");
  el.petSprite.classList.remove("is-firing");
  void el.petSprite.offsetWidth;
  el.petSprite.classList.add("is-firing");
  showSlash("pet");
  window.setTimeout(() => el.petSprite.classList.remove("is-firing"), 320);
}

function showSlash(source) {
  const slash = document.createElement("span");
  slash.className = `slash-effect is-${source} slash-${Math.floor(Math.random() * 3) + 1}`;
  slash.style.left = `${38 + Math.random() * 16}%`;
  slash.style.top = `${35 + Math.random() * 24}%`;
  el.slashLayer.append(slash);
  window.setTimeout(() => slash.remove(), 360);
}

function triggerPanic(text, duration = 860) {
  el.panicText.textContent = text;
  el.panicFlash.classList.remove("is-on");
  void el.panicFlash.offsetWidth;
  el.panicFlash.classList.add("is-on");
  window.setTimeout(() => el.panicFlash.classList.remove("is-on"), duration);
}

function unlockAudio() {
  if (!state.sound) return;
  if (audioContext) {
    audioContext.resume?.();
    startMusicLoop();
    return;
  }

  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return;
  audioContext = new AudioCtor();
  startMusicLoop();
}

async function fileExists(path) {
  try {
    const response = await fetch(path, { method: "HEAD", cache: "no-store" });
    return response.ok;
  } catch {
    return false;
  }
}

async function loadExternalAssets() {
  const spriteEntries = Object.entries(externalAssetManifest.sprites);
  await Promise.all(
    spriteEntries.map(
      ([id, src]) =>
        new Promise((resolve) => {
          const image = new Image();
          image.onload = () => {
            externalSprites[id] = src;
            externalAssetsReady = true;
            resolve();
          };
          image.onerror = () => resolve();
          image.src = src;
        }),
    ),
  );
  await loadSpriteSheetFallback();

  const sfxEntries = Object.entries(externalAssetManifest.sfx);
  await Promise.all(
    sfxEntries.map(async ([id, src]) => {
      if (!(await fileExists(src))) return;
      const audio = new Audio(src);
      audio.preload = "auto";
      audio.volume = state.sfxVolume;
      externalSfx[id] = audio;
      externalAssetsReady = true;
    }),
  );

  const musicPath = await findFirstExistingFile(externalAssetManifest.music.loop);
  if (musicPath) {
    musicLoop = new Audio(musicPath);
    musicLoop.loop = true;
    musicLoop.preload = "auto";
    updateMusicVolume();
    externalMusicReady = true;
    externalAssetsReady = true;
    if (audioContext) startMusicLoop();
  }

  render();
}

async function loadSpriteSheetFallback() {
  const sheet = externalAssetManifest.spriteSheet;
  if (!(await fileExists(sheet.src))) return;

  await new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      Object.entries(sheet.frames).forEach(([id, position]) => {
        if (externalSprites[id]) return;
        externalSprites[id] = {
          src: sheet.src,
          backgroundPosition: position,
          backgroundSize: sheet.backgroundSize,
        };
      });
      externalAssetsReady = true;
      resolve();
    };
    image.onerror = () => resolve();
    image.src = sheet.src;
  });
}

async function findFirstExistingFile(paths) {
  const candidates = Array.isArray(paths) ? paths : [paths];
  for (const path of candidates) {
    if (await fileExists(path)) return path;
  }
  return null;
}

function playExternalSfx(id) {
  if (!state.sound || state.sfxVolume <= 0 || !externalSfx[id]) return false;
  const sound = externalSfx[id].cloneNode();
  sound.volume = state.sfxVolume;
  sound.play().catch(() => {});
  return true;
}

function startMusicLoop() {
  if (!state.sound) return;

  if (externalMusicReady && musicLoop) {
    updateMusicVolume();
    stopAmbientMusic();
    musicLoop.play().catch(() => {
      startAmbientMusic();
    });
    return;
  }

  startAmbientMusic();
}

function stopMusicLoop() {
  if (musicLoop) musicLoop.pause();
  stopAmbientMusic();
}

function updateMusicVolume() {
  const volume = state.sound ? state.musicVolume : 0;
  if (musicLoop) musicLoop.volume = volume;
  if (ambientMusic && audioContext) {
    ambientMusic.gain.gain.setTargetAtTime(volume * 0.055, audioContext.currentTime, 0.08);
  }
}

function startAmbientMusic() {
  if (!state.sound || !audioContext || ambientMusic) {
    updateMusicVolume();
    return;
  }

  const gain = audioContext.createGain();
  gain.gain.setValueAtTime(Math.max(0.0001, state.musicVolume * 0.055), audioContext.currentTime);
  gain.connect(audioContext.destination);

  const oscillators = [46.25, 55, 92.5].map((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    oscillator.type = index === 1 ? "triangle" : "sine";
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.detune.setValueAtTime(index === 2 ? -18 : 0, audioContext.currentTime);
    oscillator.connect(gain);
    oscillator.start();
    return oscillator;
  });

  ambientMusic = { gain, oscillators };
}

function stopAmbientMusic() {
  if (!ambientMusic) return;
  const stopAt = audioContext ? audioContext.currentTime + 0.12 : 0;
  if (audioContext) {
    ambientMusic.gain.gain.setTargetAtTime(0.0001, audioContext.currentTime, 0.04);
  }
  ambientMusic.oscillators.forEach((oscillator) => {
    try {
      oscillator.stop(stopAt);
    } catch {}
  });
  ambientMusic = null;
}

function applyExternalSprite(spriteId) {
  const sprite = externalSprites[spriteId];
  const src = typeof sprite === "string" ? sprite : sprite?.src;
  const enemySpan = el.enemySprite.querySelector("span");
  const portraitSpan = el.portrait.querySelector("span");
  el.enemySprite.classList.toggle("has-external", Boolean(src));
  el.portrait.classList.toggle("has-external", Boolean(src));

  if (!src) {
    enemySpan.style.backgroundImage = "";
    enemySpan.style.backgroundPosition = "";
    enemySpan.style.backgroundSize = "";
    portraitSpan.style.backgroundImage = "";
    portraitSpan.style.backgroundPosition = "";
    portraitSpan.style.backgroundSize = "";
    return;
  }

  const backgroundPosition = sprite.backgroundPosition || "center";
  const backgroundSize = sprite.backgroundSize || "contain";
  enemySpan.style.backgroundImage = `url("${src}")`;
  enemySpan.style.backgroundPosition = backgroundPosition;
  enemySpan.style.backgroundSize = backgroundSize;
  portraitSpan.style.backgroundImage = `url("${src}")`;
  portraitSpan.style.backgroundPosition = backgroundPosition;
  portraitSpan.style.backgroundSize = backgroundSize;
}

function playTone(frequency, duration, gainValue, type = "sine", delay = 0) {
  if (!state.sound || state.sfxVolume <= 0 || !audioContext) return;
  const now = audioContext.currentTime + delay;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  oscillator.frequency.exponentialRampToValueAtTime(Math.max(24, frequency * 0.52), now + duration);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(gainValue * state.sfxVolume, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.04);
}

function playKnockSound() {
  if (playExternalSfx("knock")) return;
  playTone(76, 0.1, 0.2, "triangle");
  playTone(42, 0.18, 0.18, "sine", 0.035);
}

function playHitSound() {
  if (playExternalSfx("hit")) return;
  playTone(132, 0.08, 0.12, "square");
  playTone(58, 0.16, 0.12, "triangle", 0.03);
}

function playBuySound() {
  if (playExternalSfx("buy")) return;
  playTone(260, 0.08, 0.08, "square");
  playTone(340, 0.11, 0.05, "triangle", 0.055);
}

function playWhisperSound() {
  if (playExternalSfx("whisper")) return;
  playTone(210, 0.42, 0.035, "sawtooth");
  playTone(122, 0.48, 0.026, "sine", 0.05);
}

function playPanicSound() {
  if (playExternalSfx("panic")) return;
  playTone(34, 0.52, 0.24, "sawtooth");
  playTone(540, 0.12, 0.08, "square", 0.035);
}

function wireEvents() {
  el.newGameButton.addEventListener("click", () => {
    selectedDifficulty = state.difficulty || "normal";
    showMenuScreen("menuDifficulty");
  });
  el.continueButton.addEventListener("click", continueSave);
  el.menuOptionsButton.addEventListener("click", () => showMenuScreen("menuOptions"));
  el.quitButton.addEventListener("click", requestQuit);
  el.difficultyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedDifficulty = button.dataset.difficulty;
      render();
    });
  });
  el.startLoreButton.addEventListener("click", startNewSave);
  el.difficultyBackButton.addEventListener("click", () => showMenuScreen("menuHome"));
  el.beginGameButton.addEventListener("click", beginGameFromLore);
  el.menuOptionsBackButton.addEventListener("click", () => showMenuScreen("menuHome"));
  el.menuLanguageSelect.addEventListener("change", () => {
    state.lang = el.menuLanguageSelect.value;
    saveState(true);
    render();
  });
  el.menuMusicVolume.addEventListener("input", () => {
    state.musicVolume = clampVolume(Number(el.menuMusicVolume.value) / 100, defaultState.musicVolume);
    updateMusicVolume();
    if (state.sound) startMusicLoop();
    saveState(true);
    render();
  });
  el.menuSfxVolume.addEventListener("input", () => {
    state.sfxVolume = clampVolume(Number(el.menuSfxVolume.value) / 100, defaultState.sfxVolume);
    Object.values(externalSfx).forEach((sound) => {
      sound.volume = state.sfxVolume;
    });
    saveState(true);
    render();
  });
  el.menuAutoSaveToggle.addEventListener("click", toggleAutoSave);
  el.mainAction.addEventListener("click", mainAction);
  el.nextRoomButton.addEventListener("click", nextRoom);
  el.surrenderButton.addEventListener("click", retreat);
  el.pauseToggle.addEventListener("click", openPauseMenu);
  el.pauseClose.addEventListener("click", closePauseMenu);
  el.pauseModal.addEventListener("click", (event) => {
    if (event.target === el.pauseModal) closePauseMenu();
  });
  el.autoToggle.addEventListener("click", () => {
    unlockAudio();
    state.autoEnabled = !state.autoEnabled;
    if (state.autoEnabled) startMusicLoop();
    saveState(true);
    render();
  });
  el.autoAdvanceToggle.addEventListener("click", () => {
    state.autoAdvanceRooms = !state.autoAdvanceRooms;
    saveState(true);
    render();
    if (state.autoAdvanceRooms && state.phase === "combat" && state.targetHp <= 0) nextRoom();
  });
  el.languageSelect.addEventListener("change", () => {
    state.lang = el.languageSelect.value;
    saveState(true);
    render();
  });
  el.pauseLanguageSelect.addEventListener("change", () => {
    state.lang = el.pauseLanguageSelect.value;
    saveState(true);
    render();
  });
  el.soundToggle.addEventListener("click", () => {
    state.sound = !state.sound;
    if (!state.sound) {
      stopMusicLoop();
      if (audioContext) {
        audioContext.close();
        audioContext = null;
      }
    } else {
      unlockAudio();
      startMusicLoop();
    }
    saveState(true);
    render();
  });
  el.autoSaveToggle.addEventListener("click", toggleAutoSave);
  el.musicVolume.addEventListener("input", () => {
    state.musicVolume = clampVolume(Number(el.musicVolume.value) / 100, defaultState.musicVolume);
    updateMusicVolume();
    if (state.sound) startMusicLoop();
    saveState(true);
    render();
  });
  el.sfxVolume.addEventListener("input", () => {
    state.sfxVolume = clampVolume(Number(el.sfxVolume.value) / 100, defaultState.sfxVolume);
    Object.values(externalSfx).forEach((sound) => {
      sound.volume = state.sfxVolume;
    });
    saveState(true);
    render();
  });
  el.inventoryToggle.addEventListener("click", () => {
    el.inventoryModal.classList.add("is-open");
    el.inventoryModal.setAttribute("aria-hidden", "false");
    renderInventory();
  });
  el.inventoryClose.addEventListener("click", closeInventory);
  el.inventoryModal.addEventListener("click", (event) => {
    if (event.target === el.inventoryModal) closeInventory();
  });
  el.merchantClose.addEventListener("click", closeMerchant);
  el.merchantModal.addEventListener("click", (event) => {
    if (event.target === el.merchantModal) closeMerchant();
  });
  el.prestigeButton.addEventListener("click", performPrestige);
  el.resetButton.addEventListener("click", () => {
    resetGame();
  });
  el.pauseResetButton.addEventListener("click", () => {
    resetGame();
  });
  el.eventClose.addEventListener("click", closeEvent);
  el.eventModal.addEventListener("click", (event) => {
    if (event.target === el.eventModal) closeEvent();
  });
  el.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      el.tabs.forEach((item) => item.classList.remove("is-active"));
      el.panels.forEach((panel) => panel.classList.remove("is-active"));
      tab.classList.add("is-active");
      document.querySelector(`#${tab.dataset.tab}Panel`).classList.add("is-active");
    });
  });
  window.addEventListener("beforeunload", () => saveState(true));
  window.addEventListener("keydown", handleGlobalKey, true);
  window.addEventListener("keyup", handleGlobalKey, true);
  document.addEventListener("keydown", handleGlobalKey, true);
  document.addEventListener("keyup", handleGlobalKey, true);
}

function isAutoClickerReleaseKey(event) {
  return event.key === "F6" || event.code === "F6" || event.keyCode === 117 || event.which === 117;
}

function handleGlobalKey(event) {
  if (autoClickerBlockActive && isAutoClickerReleaseKey(event)) {
    event.preventDefault();
    event.stopPropagation();
    releaseAutoClickerBlock();
    return;
  }

  if (event.type !== "keydown") return;

  if (event.key === "Escape" && isMainMenuOpen) {
    showMenuScreen("menuHome");
    return;
  }

  if (event.key === "Escape" && el.pauseModal.classList.contains("is-open")) {
    closePauseMenu();
  }
}

function releaseAutoClickerBlock() {
  if (!autoClickerBlockActive && !state.autoClickerNeedsF6) return;
  if (autoClickerNoticeTimer) {
    window.clearTimeout(autoClickerNoticeTimer);
    autoClickerNoticeTimer = null;
  }
  autoClickerBlockActive = false;
  state.autoClickerNeedsF6 = false;
  el.eventModal.classList.remove("is-open");
  el.eventModal.setAttribute("aria-hidden", "true");
  logLine("gain", t("autoClickerReleased"));
  saveState(true, { ignoreAutoSave: true });
  render();
}

function closeInventory() {
  el.inventoryModal.classList.remove("is-open");
  el.inventoryModal.setAttribute("aria-hidden", "true");
}

function openMerchant() {
  if (state.targetId !== merchantDef.id) return;
  el.merchantModal.classList.add("is-open");
  el.merchantModal.setAttribute("aria-hidden", "false");
  lastMerchantSignature = "";
  renderMerchant();
}

function closeMerchant() {
  el.merchantModal.classList.remove("is-open");
  el.merchantModal.setAttribute("aria-hidden", "true");
}

function showMenuScreen(screenId) {
  isMainMenuOpen = true;
  el.mainMenu.classList.add("is-open");
  el.mainMenu.setAttribute("aria-hidden", "false");
  el.menuScreens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.id === screenId);
  });
  render();
}

function closeMainMenu() {
  isMainMenuOpen = false;
  el.mainMenu.classList.remove("is-open");
  el.mainMenu.setAttribute("aria-hidden", "true");
  unlockAudio();
  startMusicLoop();
  render();
}

function createFreshState(difficulty) {
  const previousSettings = {
    lang: state.lang,
    sound: state.sound,
    autoSaveEnabled: state.autoSaveEnabled,
    musicVolume: state.musicVolume,
    sfxVolume: state.sfxVolume,
  };
  const fresh = structuredClone(defaultState);
  Object.assign(fresh, previousSettings, {
    saveCreated: true,
    introRead: false,
    difficulty,
  });
  const doorHp = getDifficultySettingsFor(difficulty).doorHp;
  fresh.targetMaxHp = doorHp;
  fresh.targetHp = doorHp;
  return fresh;
}

function getDifficultySettingsFor(difficulty) {
  const previousDifficulty = state.difficulty;
  state.difficulty = difficulty;
  const settings = getDifficultySettings();
  state.difficulty = previousDifficulty;
  return settings;
}

function startNewSave() {
  if (state.saveCreated && !window.confirm(t("resetConfirm"))) return;
  state = createFreshState(selectedDifficulty);
  autoClickerBlockActive = false;
  recentActionTimes = [];
  autoTimer = 0;
  resetRenderSignatures();
  saveState(true);
  showMenuScreen("menuLore");
}

function continueSave() {
  if (!state.saveCreated) return;
  if (!state.introRead) {
    showMenuScreen("menuLore");
    return;
  }
  closeMainMenu();
}

function beginGameFromLore() {
  state.introRead = true;
  state.saveCreated = true;
  saveState(true);
  closeMainMenu();
}

function requestQuit() {
  window.close();
  window.setTimeout(() => {
    if (!document.hidden) window.alert(`${t("quitNoticeTitle")}\n\n${t("quitNoticeText")}`);
  }, 120);
}

function toggleAutoSave() {
  state.autoSaveEnabled = !state.autoSaveEnabled;
  saveSettings();
  if (state.autoSaveEnabled) {
    saveState(true, { ignoreAutoSave: true });
  } else {
    el.saveLabel.textContent = t("autoSaveShortOff");
  }
  render();
}

function openPauseMenu() {
  if (isMainMenuOpen) return;
  isPaused = true;
  el.pauseModal.classList.add("is-open");
  el.pauseModal.setAttribute("aria-hidden", "false");
  render();
}

function closePauseMenu() {
  isPaused = false;
  el.pauseModal.classList.remove("is-open");
  el.pauseModal.setAttribute("aria-hidden", "true");
  render();
}

function resetGame() {
  if (!window.confirm(t("resetConfirm"))) return;
  state = structuredClone(defaultState);
  localStorage.removeItem(SAVE_KEY);
  selectedDifficulty = state.difficulty;
  resetRenderSignatures();
  recentActionTimes = [];
  autoClickerBlockActive = false;
  isPaused = false;
  el.pauseModal.classList.remove("is-open");
  el.pauseModal.setAttribute("aria-hidden", "true");
  saveState(true);
  showMenuScreen("menuHome");
  render();
}

async function boot() {
  await loadLocales();

  if (state.phase === "combat" && !state.gameCompleted && !getCurrentEnemy() && !getCurrentCheckpointDoor()) {
    createRoomTarget(Math.max(1, state.room));
  }

  wireEvents();
  render();
  drawArena();
  loadExternalAssets();
  if (autoClickerBlockActive && state.introRead) {
    window.setTimeout(() => {
      openNotice(t("autoClickerTitle"), t("autoClickerText"));
    }, 120);
  }
  requestAnimationFrame(loop);
}

boot();
