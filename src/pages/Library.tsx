import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Library: React.FC = () => {
  const [selectedList, setSelectedList] = useState('all')

  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const selectedListFromURL = queryParams.get('selectedList')

  useEffect(() => {
    if (selectedListFromURL) {
      setSelectedList(selectedListFromURL)
    }
  }, [selectedListFromURL])

  const handleSelection = (listName: string) => {
    setSelectedList(listName)
    navigate(`?selectedList=${listName}`)
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Library</title>
      </Helmet>
      <div className="flex min-h-screen flex-row  my-10 gap-3 rounded-md">
        <div className="w-1/3 h-fit rounded-lg gap-y-1 p-3 border flex flex-col">
          <div
            className={`cursor-pointer rounded-t border-b hover:bg-accent transition-colors p-3 ${
              selectedList === 'all' ? 'side-stripe' : ''
            }`}
            onClick={() => handleSelection('all')}
          >
            All My Games
          </div>
          <div
            className={`cursor-pointer rounded-t border-b hover:bg-accent transition-colors p-3 ${
              selectedList === 'playLater' ? 'side-stripe' : ''
            }`}
            onClick={() => handleSelection('playLater')}
          >
            Play later
          </div>
          <div
            className={`cursor-pointer rounded-t border-b hover:bg-accent transition-colors p-3 ${
              selectedList === 'currentPlaying' ? 'side-stripe' : ''
            }`}
            onClick={() => handleSelection('currentPlaying')}
          >
            Current playing
          </div>
          <div
            className={`cursor-pointer rounded-t border-b hover:bg-accent transition-colors p-3 ${
              selectedList === 'played' ? 'side-stripe' : ''
            }`}
            onClick={() => handleSelection('played')}
          >
            Played
          </div>
          <div
            className={`cursor-pointer rounded-t border-b hover:bg-accent transition-colors p-3 ${
              selectedList === 'completed' ? 'side-stripe' : ''
            }`}
            onClick={() => handleSelection('completed')}
          >
            Completed
          </div>
        </div>
        <div className="w-full border p-3 rounded-lg">
          {selectedList === 'all' && (
            <div className="bg-slate-400">All My Games</div>
          )}
          {selectedList === 'playLater' && (
            <div className="bg-red-500">Play Later List</div>
          )}
          {selectedList === 'currentPlaying' && (
            <div className="bg-gray-800">Current Playing List</div>
          )}
          {selectedList === 'played' && (
            <div className="bg-orange-500">Played List</div>
          )}
          {selectedList === 'completed' && (
            <div className="bg-amber-400">Completed List</div>
          )}
        </div>
      </div>
    </HelmetProvider>
  )
}

export default Library
