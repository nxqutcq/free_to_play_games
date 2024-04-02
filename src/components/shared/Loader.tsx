import { Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'

const Loader = ({ className }: { className?: string }) => {
  return (
    <div className="flex min-h-screen w-[1200px] justify-center items-center">
      <Loader2
        className={cn('my-28 h-11 w-11 text-primary/60', className)}
        style={{ animation: 'fast-spin 0.3s linear infinite' }}
      />
    </div>
  )
}

export default Loader
