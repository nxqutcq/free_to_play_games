import React from 'react'

import { useGamesList } from '../services/queries'
import styles from '../styles/main.module.scss'

import { Button } from '@/components/ui/button'

const Home: React.FC = () => {
  const gamesListQuery = useGamesList()
  const { isPending, isError, error } = gamesListQuery

  return (
    <main className={styles['main-page']}>
      {isPending ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'start',
            gap: '10px',
          }}
        >
          {gamesListQuery.data &&
            gamesListQuery.data.map((game) => (
              <article
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '250px',
                  padding: '0 20px 20px 20px',
                  alignItems: 'center',
                  borderRadius: '10px',
                }}
                key={game.id}
              >
                <h3
                  style={{
                    display: 'flex',
                    alignItems: 'start',
                    width: '100%',
                  }}
                >
                  {game.title}
                </h3>
                <img
                  loading="lazy"
                  width="100%"
                  src={game.thumbnail}
                  alt={game.title}
                />
                <p>{game.short_description}</p>
                <Button>Click me</Button>
              </article>
            ))}
        </div>
      )}
    </main>
  )
}

export default Home
