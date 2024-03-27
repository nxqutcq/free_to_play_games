import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Loader from '@/components/shared/Loader'
import { Button } from '@/components/ui/button'
import { useGameDetails } from '@/services/queries'

const GamePage: React.FC = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const { id } = useParams<{ id: string }>()

  const { data, isLoading, isError } = useGameDetails(id || '')
  if (isLoading)
    return (
      <div className="flex min-h-screen w-[1200px] justify-center items-center">
        <Loader />
      </div>
    )
  if (isError)
    return (
      <div className="min-h-screen w-[1200px]">
        <h3 className="mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight">
          Error fetching game
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
    <article className="min-h-screen mb-10 w-[1200px] overflow-x-hidden">
      <Button className="mb-10" onClick={goBack}>
        Back
      </Button>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {data?.title}
      </h2>
      <p className="mb-5 leading-7 [&:not(:first-child)]:mt-6">
        {data?.short_description}
      </p>
      <img src={data?.thumbnail} alt={data?.title} />
      <p className="mb-5 leading-7 [&:not(:first-child)]:mt-6">
        {data?.description}
      </p>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Minimum System Requirements:
      </h4>
      <ul className="mb-5 my-6 ml-6 list-disc [&>li]:mt-2">
        <li>OS: {data.minimum_system_requirements?.os || 'Not specified'}</li>
        <li>
          Processor:{' '}
          {data.minimum_system_requirements?.processor || 'Not specified'}
        </li>
        <li>
          Memory: {data.minimum_system_requirements?.memory || 'Not specified'}
        </li>
        <li>
          Graphics:{' '}
          {data.minimum_system_requirements?.graphics || 'Not specified'}
        </li>
        <li>
          Storage:{' '}
          {data.minimum_system_requirements?.storage || 'Not specified'}
        </li>
      </ul>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Screenshots:
      </h4>
      <div className="flex gap-1">
        {data?.screenshots && data.screenshots.length > 0 ? (
          data.screenshots.map((screenshot) => (
            <img
              width="450px"
              key={screenshot?.id}
              src={screenshot?.image}
              alt={`Screenshot ${screenshot?.id}`}
            />
          ))
        ) : (
          <p>No screenshots available</p>
        )}
      </div>
    </article>
  )
}
export default GamePage
