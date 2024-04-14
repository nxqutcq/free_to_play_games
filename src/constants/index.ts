export const GAME_TYPES = [
  { name: 'MMORPG', url: '/games/mmorpg' },
  { name: 'Shooter', url: '/games/shooter' },
  { name: 'MOBA', url: '/games/moba' },
  { name: 'Anime', url: '/games/anime' },
  { name: 'Battle Royale', url: '/games/battle-royale' },
  { name: 'Strategy', url: '/games/strategy' },
  { name: 'Fantasy', url: '/games/fantasy' },
  { name: 'Sci-Fi', url: '/games/sci-fi' },
  { name: 'Card Games', url: '/games/card' },
  { name: 'Racing', url: '/games/racing' },
  { name: 'Fighting', url: '/games/fighting' },
  { name: 'Social', url: '/games/social' },
  { name: 'Sports', url: '/games/sports' },
  { name: 'Free To PlayGames Games', url: '/games' },
]

export const faqData = [
  {
    question: 'What is FreeToGame?',
    answer: [
      'FreeToGame.com is a gaming platform that brings together the best Free-to-Play Multiplayer Online Games and MMO Games into one convenient place. Not only does it offer a curated selection of free games across various genres, but it also rewards gamers with free premium loot and exclusive perks.',
      "Additionally, users can maintain their own games library, track their gaming history, and easily search for their next favorite game. Whether you're into MMORPGs, MOBAs, FPS, or strategy games, FreeToGame offers a comprehensive gaming experience tailored to your interests.",
      'FreeToGame also offers a free public API that can be accessed without any restrictions or the need to create an account. This Free-To-Play Games Database API provides developers and enthusiasts with valuable data to enhance their gaming projects.',
    ],
  },
  {
    question: 'What is free-to-play in games?',
    answer: [
      'Free-to-play games are those amazing titles you can jump into without any upfront cost. Not all games are created equal, but the bottom line is, you should be able to enjoy the game without ever needing to open your wallet.',
      "You have the freedom to test out a free-to-play game for as long as you like, really get a feel for it, and if it clicks with you, there's also the option to treat yourself to some cool extras like skins, weapons, or expansions.",
      "However, it's important to note that those paid extras should always be completely optional. A good free-to-play game should never obligate you to spend any money.",
    ],
  },
  {
    question: 'Can I play PC games for free?',
    answer: [
      "Absolutely! There's a plethora of PC games available for free. Many games follow a 'free-to-play' model, meaning you can download and start playing them without spending a dime.",
      'While most free-to-play games offer optional in-game purchases for extra content or customization, the core experience is usually completely free.',
    ],
  },
  {
    question: 'Are free-to-play games free?',
    answer: [
      'Free-to-play games are indeed free to install and play initially. However, once players delve into the game, they often encounter optional opportunities to purchase additional content such as items, maps, and customization options. Some games also integrate in-game advertising as a means to generate income.',
    ],
  },
]

export const requirements = [
  { name: 'OS', key: 'os' },
  { name: 'Processor', key: 'processor' },
  { name: 'Memory', key: 'memory' },
  { name: 'Graphics', key: 'graphics' },
  { name: 'Storage', key: 'storage' },
]
export const allGenres = [
  { value: 'mmorpg', label: 'MMORPG', color: '#FF0000' },
  { value: 'shooter', label: 'Shooter', color: '#00FF00' },
  { value: 'strategy', label: 'Strategy', color: '#0000FF' },
  { value: 'moba', label: 'MOBA', color: '#FF00FF' },
  { value: 'racing', label: 'Racing', color: '#FFFF00' },
  { value: 'sports', label: 'Sports', color: '#00FFFF' },
  { value: 'social', label: 'Social', color: '#FFA500' },
  { value: 'sandbox', label: 'Sandbox', color: '#800080' },
  { value: 'open-world', label: 'Open World', color: '#008000' },
  { value: 'survival', label: 'Survival', color: '#FF4500' },
  { value: 'pvp', label: 'PvP', color: '#FF1493' },
  { value: 'pve', label: 'PvE', color: '#1E90FF' },
  { value: 'pixel', label: 'Pixel', color: '#FFD700' },
  { value: 'voxel', label: 'Voxel', color: '#8B4513' },
  { value: 'zombie', label: 'Zombie', color: '#00CED1' },
  { value: 'turn-based', label: 'Turn-based', color: '#8A2BE2' },
  { value: 'first-person', label: 'First Person', color: '#708090' },
  { value: 'third-person', label: 'Third Person', color: '#FF69B4' },
  { value: 'top-down', label: 'Top-down', color: '#7CFC00' },
  { value: 'tank', label: 'Tank', color: '#800000' },
  { value: 'space', label: 'Space', color: '#4169E1' },
  { value: 'sailing', label: 'Sailing', color: '#32CD32' },
  { value: 'side-scroller', label: 'Side-scroller', color: '#FF8C00' },
  { value: 'superhero', label: 'Superhero', color: '#4B0082' },
  { value: 'permadeath', label: 'Permadeath', color: '#DC143C' },
  { value: 'card', label: 'Card', color: '#FF7F50' },
  { value: 'card', label: 'Card Game', color: '#FF7F50' },
  { value: 'battle-royale', label: 'Battle Royale', color: '#C71585' },
  { value: 'mmo', label: 'MMO', color: '#00FF7F' },
  { value: 'mmofps', label: 'MMOFPS', color: '#2E8B57' },
  { value: 'mmotps', label: 'MMOTPS', color: '#DB7093' },
  { value: '3d', label: '3D', color: '#6495ED' },
  { value: '2d', label: '2D', color: '#FF00FF' },
  { value: 'anime', label: 'Anime', color: '#9932CC' },
  { value: 'fantasy', label: 'Fantasy', color: '#FF4500' },
  { value: 'sci-fi', label: 'Sci-Fi', color: '#8B0000' },
  { value: 'fighting', label: 'Fighting', color: '#8B008B' },
  { value: 'action-rpg', label: 'Action RPG', color: '#DCDCDC' },
  { value: 'action', label: 'Action', color: '#FF6347' },
  { value: 'military', label: 'Military', color: '#4682B4' },
  { value: 'martial-arts', label: 'Martial Arts', color: '#FFFAF0' },
  { value: 'flight', label: 'Flight', color: '#87CEEB' },
  { value: 'low-spec', label: 'Low Spec', color: '#A0522D' },
  { value: 'tower-defense', label: 'Tower Defense', color: '#7B68EE' },
  { value: 'horror', label: 'Horror', color: '#FFB6C1' },
  { value: 'mmorts', label: 'MMORTS', color: '#00FF00' },
  { value: 'mmoarpg', label: 'MMOARPG', color: '#947a31' },
  { value: 'arpg', label: 'ARPG', color: '#91bfff' },
  { value: 'action-game', label: 'Action Game', color: '#5c308c' },
]

export const selectOptions = [
  {
    placeholder: 'Platform',
    options: [
      { value: 'all', label: 'All' },
      { value: 'pc', label: 'PC (Windows)' },
      { value: 'browser', label: 'Browser (Web)' },
    ],
    onChange: (value: string) => {
      console.log('Platform changed:', value)
    },
  },
  {
    placeholder: 'Genre/Tag',
    options: allGenres,
    onChange: (value: string) => {
      console.log('Category changed:', value)
    },
  },
  {
    placeholder: 'Sort By',
    options: [
      { value: 'release-date', label: 'Release date' },
      { value: 'popularity', label: 'Popularity' },
      { value: 'alphabetical', label: 'Alphabetical' },
      { value: 'relevance', label: 'Relevance' },
    ],
    onChange: (value: string) => {
      console.log('Sort changed:', value)
    },
  },
]
