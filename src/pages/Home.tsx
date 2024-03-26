import React from 'react'

import { useGamesList } from '../services/queries'

import { Button } from '@/components/ui/button'

const Home: React.FC = () => {
  const gamesListQuery = useGamesList()
  const { isPending, isError, error } = gamesListQuery

  return (
    <main className="flex items-center min-h-screen w-[1200px] bg-[rgba(255,255,255,0.037)] mt-2 p-5;">
      {isPending ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="flex flex-wrap items-start gap-2 w-full flex-row justify-between">
          {gamesListQuery.data &&
            gamesListQuery.data.map((game) => (
              <article
                className="flex flex-col w-60 p-5 items-center rounded-md"
                key={game.id}
              >
                <h3 className="flex items-start w-full">{game.title}</h3>
                <img
                  loading="lazy"
                  className="w-full"
                  src={game.thumbnail}
                  alt={game.title}
                />
                <p>{game.short_description}</p>
                <Button className="mt-5">Click me</Button>
              </article>
            ))}
        </div>
      )}
    </main>
  )
}

export default Home
