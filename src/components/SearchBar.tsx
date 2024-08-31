import { Search } from 'lucide-react'
import React, { useState, useEffect, useCallback, memo } from 'react'
import { generatePath, Link, useNavigate } from 'react-router-dom'

import LazyImage from './shared/LazyImage'

import { Input } from '@/components/ui/input'
import useDebounce from '@/hooks/useDebounce'
import { ROUTES } from '@/routes'
import { Game, SearchBarProps } from '@/types/games'

const SearchBar: React.FC<SearchBarProps> = ({ data }) => {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState<string>('')
  const [focused, setFocused] = useState(false)
  const [filteredGames, setFilteredGames] = useState<Game[]>(data)

  const debouncedSearchText = useDebounce(searchText, 400)

  const filterGames = useCallback(() => {
    if (debouncedSearchText === '') {
      setFilteredGames(data)
    } else {
      const filtered = data.filter((game) =>
        game.title.toLowerCase().includes(debouncedSearchText.toLowerCase())
      )
      setFilteredGames(filtered)
    }
  }, [data, debouncedSearchText])

  useEffect(() => {
    filterGames()
  }, [debouncedSearchText, filterGames])

  const handleSearchChange = (text: string) => {
    setSearchText(text)
    if (text) {
      navigate(`?search=${text}`, { replace: true })
    } else {
      navigate('', { replace: true })
    }
  }

  const handleFocus = () => {
    setFocused(true)
    if (searchText) {
      navigate(`?search=${searchText}`, { replace: true })
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setFocused(false)
    }
  }

  return (
    <div className="relative cursor-pointer rounded-full" onBlur={handleBlur}>
      <span className="absolute inset-y-0 left-4 flex items-center cursor-pointer">
        <Search
          className={`w-5 h-5 ${focused ? 'text-stone-500' : 'text-gray-500'}`}
        />
      </span>
      <Input
        className={`text-sm text-center rounded-md border transition-all duration-300}`}
        onFocus={handleFocus}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSearchChange(e.target.value)
        }
        id="search"
        name="search"
        type="search"
        placeholder="Search game"
        value={searchText}
      />
      {focused && searchText && (
        <div className="overflow-y-auto max-h-[450px] gap-1 flex flex-col min-w-[320px] absolute mt-5 rounded-md bg-background shadow-lg z-10">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <Link
                key={game.id}
                onClick={() => {
                  setFocused(false)
                  setSearchText('')
                }}
                to={generatePath(ROUTES.GAME_ID, { id: game.id })}
              >
                <div className="hover:bg-accent min-h-[fit] flex rounded-md items-center">
                  <div className="relative mr-3 min-w-[70px] overflow-hidden rounded-md rounded-r-none max-w-[100px]">
                    <LazyImage src={game.thumbnail} alt={game.title} />
                  </div>
                  <span>{game.title}</span>
                </div>
              </Link>
            ))
          ) : (
            <p className="p-3 z-50">Nothing found</p>
          )}
        </div>
      )}
    </div>
  )
}

export default memo(SearchBar)
