import React from 'react'

const FetchingLoader: React.FC = () => {
  return (
    <div className="loader-container xl:w-[1200px]">
      <div className="loader">
        {[...Array(6)].map((_, index) => (
          <div key={index} className={`loader-dot loader-dot-${index + 1}`} />
        ))}
        <div className="loader-text"></div>
      </div>
    </div>
  )
}

export default FetchingLoader
