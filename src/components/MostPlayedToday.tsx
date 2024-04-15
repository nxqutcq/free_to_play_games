import React from 'react'

const MostPlayedToday: React.FC = () => {
  return (
    <div>
      <h3 className="ml-2 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Most Played Today
      </h3>
      <div className="flex flex-col items-center gap-3 pb-3">
        <div className="w-[360px] bg-black h-[200px]"></div>
      </div>
    </div>
  )
}

export default MostPlayedToday
