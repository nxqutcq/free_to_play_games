import React from 'react'

import { requirements } from '@/constants'
import { SystemRequirementsProps } from '@/types/games'

const SystemRequirements: React.FC<SystemRequirementsProps> = ({ data }) => {
  return (
    <div>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight sm:flex">
        Minimum System Requirements:
      </h4>
      <ul className="mb-5 my-6 ml-6 list-disc [&>li]:mt-2  sm:flex sm:flex-col">
        {requirements.map((req, index) => (
          <li key={index}>
            {req.name}:{' '}
            {data.minimum_system_requirements[req.key] || 'Not specified'}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SystemRequirements
