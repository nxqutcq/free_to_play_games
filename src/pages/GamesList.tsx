import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

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
  const { isLoading, isError, data } = gamesListQuery

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  if (isLoading)
    return (
      <div className="flex min-h-screen w-[1200px] justify-center items-center">
        Loading...
      </div>
    )
  if (isError)
    return (
      <div className="min-h-screen w-[1200px]">
        <h3 className="mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight">
          Error fetching games
        </h3>
        <Button onClick={() => window.location.reload()} className="mt-10">
          Reload
        </Button>
      </div>
    )
  if (!data)
    return (
      <div className="min-h-screen w-[1200px]">
        <Button className="mb-10" onClick={goBack}>
          Back
        </Button>
        <h3 className="mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight">
          No data available
        </h3>
      </div>
    )

  return (
    <div className="mb-10 min-h-screen w-[1200px]">
      <div className="overflow-x-hidden flex flex-wrap items-start gap-col-2 w-full flex-row">
        {data?.map((game) => (
          <article
            className="flex flex-col w-60 p-5 items-center overflow-x-hidden"
            key={game?.id}
          >
            <div className="flex w-full h-[110px]">
              {isLoading ? (
                <Skeleton className="w-full h-[110px]" />
              ) : (
                <img
                  loading="lazy"
                  className="w-full"
                  src={game?.thumbnail}
                  alt={game?.title}
                />
              )}
            </div>
            <h3 className="mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight">
              {game?.title}
            </h3>
            <p></p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {game?.short_description}
            </p>
            {game.id && (
              <Link to={`/games/${game.id}`}>
                <Button className="mt-5">Click me</Button>
              </Link>
            )}
          </article>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default GamesList
