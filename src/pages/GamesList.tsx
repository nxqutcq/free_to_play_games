import React from 'react'
import { Link } from 'react-router-dom'

import { useGamesList } from '../services/queries'

import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Skeleton } from '@/components/ui/skeleton'

const GamesList: React.FC = () => {
  const gamesListQuery = useGamesList()
  const { isPending, isError, error } = gamesListQuery

  return (
    <div className="mb-10 min-h-screen w-[1200px]">
      {isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="overflow-x-hidden flex flex-wrap items-start gap-col-2 w-full flex-row">
          {gamesListQuery.data &&
            gamesListQuery.data.map((game) => (
              <article
                className="flex flex-col w-60 p-5 items-center overflow-x-hidden"
                key={game.id}
              >
                <div className="flex w-full h-[110px]">
                  {isPending ? (
                    <Skeleton className="w-full h-[110px]" />
                  ) : (
                    <img
                      loading="lazy"
                      className="w-full"
                      src={game.thumbnail}
                      alt={game.title}
                    />
                  )}
                </div>
                <h3 className="mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight">
                  {game.title}
                </h3>
                <p></p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {game.short_description}
                </p>
                <Link to={`/games/${game.id}`}>
                  <Button className="mt-5">Click me</Button>
                </Link>
              </article>
            ))}
        </div>
      )}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default GamesList
