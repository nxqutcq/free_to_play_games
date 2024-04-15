import React from 'react'

const Recommendations: React.FC = () => {
  return (
    <div>
      <h3 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Personalized Recommendations
      </h3>
      <div className="flex h-[200px] justify-between items-center">
        <div className="w-[360px] rounded-md bg-gray-300 h-[190px]"></div>
        <div className="w-[360px] rounded-md bg-gray-300 h-[190px]"></div>
        <div className="w-[360px] rounded-md bg-gray-300 h-[190px]"></div>
      </div>
    </div>
  )
}

export default Recommendations
