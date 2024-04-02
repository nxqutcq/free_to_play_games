import { Button } from '@/components/ui/button'

export const NoDataComponent: React.FC<{ goBack: () => void }> = ({
  goBack,
}) => (
  <div className="min-h-screen w-[1200px]">
    <Button className="mb-10" onClick={goBack}>
      Back
    </Button>
    <h3 className="mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight">
      No data available
    </h3>
  </div>
)
