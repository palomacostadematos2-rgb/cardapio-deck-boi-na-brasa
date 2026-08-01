import { Flame } from 'lucide-react'

function PageLoader() {
  return (
    <div
      className="flex flex-1 items-center justify-center py-24"
      role="status"
      aria-label="Carregando"
    >
      <Flame className="text-flame-500 h-8 w-8 animate-pulse" aria-hidden />
    </div>
  )
}

export default PageLoader
