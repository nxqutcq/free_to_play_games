import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import './styles/global.scss'
import ErrorFallback from './components/ErrorFallback.tsx'

import { Toaster } from '@/components/ui/toaster'

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 30000 } },
})

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter basename="/">
        <QueryClientProvider client={queryClient}>
          <App />
          <Toaster />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
