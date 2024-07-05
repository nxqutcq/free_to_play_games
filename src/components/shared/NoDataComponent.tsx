import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export const NoDataComponent: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen justify-center items-center flex flex-col w-full">
      <h3 className="mt-1 scroll-m-20 text-2xl font-semibold tracking-tight">
        No games found.
      </h3>
      <Button className="mt-10" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  )
}
