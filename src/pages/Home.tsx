import React from 'react'

import FrequentlyAskedQuestions from '@/components/FAQ'
import usePageTitle from '@/hooks/usePageTitle'

const Home: React.FC = () => {
  usePageTitle('Home')
  return (
    <main className="mx-auto flex min-h-screen overflow-x-hidden w-full items-center mt-2 p-5;">
      <div className="flex flex-col w-full">
        <div className="flex min-h-screen w-full">main</div>
        <div className="flex w-full">
          <FrequentlyAskedQuestions />
        </div>
      </div>
    </main>
  )
}

export default Home
