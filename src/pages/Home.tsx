import React from 'react'

import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions'
import usePageTitle from '@/hooks/usePageTitle'

const Home: React.FC = () => {
  usePageTitle('Home')
  return (
    <main className="mx-auto flex min-h-screen overflow-x-hidden items-center mt-2 p-5;">
      <div>
        <div>main</div>
        <div>
          <FrequentlyAskedQuestions />
        </div>
      </div>
    </main>
  )
}

export default Home
