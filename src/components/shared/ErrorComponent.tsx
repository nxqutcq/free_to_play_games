import { Button } from '@/components/ui/button'

export const ErrorComponent: React.FC<{ reload: () => void }> = ({
  reload,
}) => (
  <div className="min-h-screen justify-center items-center flex flex-col w-full">
    <h3 className="mt-1 scroll-m-20 text-2xl font-semibold tracking-tight">
      Error fetching games
    </h3>
    <Button onClick={reload} className="mt-10">
      Reload
    </Button>
  </div>
)
