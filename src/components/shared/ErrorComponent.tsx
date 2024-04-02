import { Button } from '@/components/ui/button'

export const ErrorComponent: React.FC<{ reload: () => void }> = ({
  reload,
}) => (
  <div className="min-h-screen w-[1200px]">
    <h3 className="mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight">
      Error fetching games
    </h3>
    <Button onClick={reload} className="mt-10">
      Reload
    </Button>
  </div>
)
