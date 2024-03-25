import React from 'react'

import { useGamesList } from '../services/queries'
import styles from '../styles/main.module.scss'

const MainPage: React.FC = () => {
  const gamesListQuery = useGamesList()

  if (gamesListQuery.error) return <div>ошибка</div>

  return (
    <div className={styles['main-page']}>
      {gamesListQuery.data &&
        gamesListQuery.data.map((game) => (
          <p key={game.id}>
            <img width="100px" src={game.thumbnail} alt={game.title} />
            {game.title}
          </p>
        ))}
    </div>
  )
}

export default MainPage
