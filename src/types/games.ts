export interface Game {
  id: number
  title: string
  thumbnail: string
  short_description: string
  game_url: string
  genre: string
  platform: string
  publisher: string
  developer: string
  release_date: string
  freetogame_profile_url: string
}
export interface GameDetails extends Game {
  minimum_system_requirements: SystemRequirements
  screenshots: Screenshot[]
  description: string
  status: string
}
interface SystemRequirements {
  os: string
  processor: string
  memory: string
  graphics: string
  storage: string
  [key: string]: string
}
export type GameImageType = {
  src: string
  alt: string
}
interface Screenshot {
  id: number
  image: string
}
export interface GamesBunchItemProps {
  game: Game
  isLoading: boolean
}
export interface GameInfoProps {
  data: GameDetails
  goBack: () => void
}
export interface SortingPanelProps {
  data: Game[] | undefined
  isLoading: boolean
  gamesCount: number
  onSortChange: (value: string) => void
  onCategoryChange: (value: string) => void
  onPlatformChange: (value: string) => void
}
export interface RandomGamesProps {
  data: Game[]
}
export type SortingSelectorsProps = Omit<
  SortingPanelProps,
  'data' | 'isLoading' | 'gamesCount'
>
export interface IconProps {
  className?: string
}
export type SystemRequirementsProps = Omit<GameInfoProps, 'goBack'>
export type GameScreenshotsProps = Omit<GameInfoProps, 'goBack'>
