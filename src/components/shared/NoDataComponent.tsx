import { Button } from '@/components/ui/button'

export const NoDataComponent: React.FC<{ goBack: () => void }> = ({
  goBack,
}) => (
  <div className="min-h-screen justify-center items-center flex flex-col w-full">
    <h3 className="mt-1 scroll-m-20 text-2xl font-semibold tracking-tight">
      No data available
    </h3>
    <Button className="mt-10" onClick={goBack}>
      Back
    </Button>
  </div>
)
