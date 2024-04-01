import React from 'react'

import { Button } from '@/components/ui/button'

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary: () => void
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => (
  <div
    role="alert"
    className="flex flex-col min-h-screen w-full bg-black items-start justify-center p-3 xs2:items-center"
  >
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight w-[min-content] sm:w-[max-content]">
      Something went wrong 🥺
    </h1>
    <p className="mb-5 leading-7 [&:not(:first-child)]:mt-6 sm:flex">
      {error.message}
    </p>
    <Button
      onClick={resetErrorBoundary}
      className="mt-10 h-[50px] xs:w-[300px] xs2:w-[200px]"
    >
      Try again
    </Button>
  </div>
)

export default ErrorFallback
