import React from 'react'

import { SystemRequirementsProps } from '@/types/games'

const SystemRequirements: React.FC<SystemRequirementsProps> = ({ data }) => (
  <div>
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight sm:flex">
      Minimum System Requirements:
    </h4>
    <ul className="mb-5 my-6 ml-6 list-disc [&>li]:mt-2  sm:flex sm:flex-col">
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
        Storage: {data.minimum_system_requirements?.storage || 'Not specified'}
      </li>
    </ul>
  </div>
)

export default SystemRequirements
