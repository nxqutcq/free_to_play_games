import React from 'react'

import { requirements } from '@/constants'
import { SystemRequirementsProps } from '@/types/games'

const SystemRequirements: React.FC<SystemRequirementsProps> = ({ data }) => {
  if (!data.minimum_system_requirements) {
    return null
  }
  return (
    <div className="pt-5">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight sm:flex">
        Minimum System Requirements:
      </h4>
      <ul className="mb-5 my-6 ml-6 list-disc [&>li]:mt-2  sm:flex sm:flex-col">
        {requirements &&
          requirements.map((req) => (
            <li key={req.key}>
              {req.name}:{' '}
              {data.minimum_system_requirements[req.key] || 'Not specified'}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default SystemRequirements
