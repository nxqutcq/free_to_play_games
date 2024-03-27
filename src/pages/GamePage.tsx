import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { useGameDetails } from '@/services/queries'

const GamePage: React.FC = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const { id } = useParams<{ id: string }>()

  const { data, isLoading, isError } = useGameDetails(id || '')
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching game details</div>

  if (!data) return <div>No data available</div>
  return (
    <div className="min-h-screen">
      <Button onClick={goBack}>Back</Button>
      <h1>{data.title}</h1>
      <p>{data.short_description}</p>
      <img src={data.thumbnail} alt={data.title} />
      <h2>Description:</h2>
      <p>{data.description}</p>
      <h2>Minimum System Requirements:</h2>
      <ul>
        <li>OS: {data.minimum_system_requirements.os}</li>
        <li>Processor: {data.minimum_system_requirements.processor}</li>
        <li>Memory: {data.minimum_system_requirements.memory}</li>
        <li>Graphics: {data.minimum_system_requirements.graphics}</li>
        <li>Storage: {data.minimum_system_requirements.storage}</li>
      </ul>
      <h2>Screenshots:</h2>
      <div>
        {data.screenshots.map((screenshot) => (
          <img
            key={screenshot.id}
            src={screenshot.image}
            alt={`Screenshot ${screenshot.id}`}
          />
        ))}
      </div>
    </div>
  )
}
export default GamePage
