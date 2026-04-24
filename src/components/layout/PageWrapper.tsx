import type { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
}

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <main className="flex-1 pt-16">
        {children}
      </main>
    </div>
  )
}

export default PageWrapper