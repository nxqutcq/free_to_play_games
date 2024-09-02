import { User } from 'firebase/auth'

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
  className?: string
}
interface Screenshot {
  id: number
  image: string
}
export interface GamesBunchItemProps {
  game: Game
}
export interface GameInfoProps {
  data: GameDetails
}
export interface RandomGamesProps {
  data: Game[] | undefined
}
export interface MostPlayedGamesProps {
  mostPlayedGames: Game[] | undefined
}

export interface SearchBarProps {
  data: Game[]
}

export interface SortingPanelProps {
  onSortChange: (value: string) => void
  onCategoryChange: (value: string) => void
  onPlatformChange: (value: string) => void
}

export interface SelectOption {
  value: string
  label: string
}

export interface SortingSelectorsProps {
  onPlatformChange: (newPlatform: string) => void
  onSortChange: (newSortBy: string) => void
  onCategoryChange: (newCategory: string) => void
}
export interface IconProps {
  className?: string
}
export type SystemRequirementsProps = Omit<GameInfoProps, 'goBack'>
export type ScreenshotsProps = Omit<GameInfoProps, 'goBack'>
export interface GamesBunchProps {
  data: Game[]
}
export interface GamesCountProps {
  gamesCount: number
  category: string | undefined
}
export type PlatformIconsProps = Pick<Game, 'platform'>
export type GenreProps = Pick<Game, 'genre'>
export interface CarouselProps {
  images: string[]
}

export type UserType = {
  currentUser: User | null | undefined
  userLoggedIn: boolean | undefined
}
export type DrawerType = {
  currentUser: User | null | undefined
  userLoggedIn: boolean | undefined
}
