import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { focusRingClasses } from '@/constants/a11y'
import { cn } from '@/utils/cn'

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#conteudo"
        className={cn(
          'bg-brasa-500 text-cream fixed top-2 left-2 z-[100] -translate-y-20 rounded-full px-4 py-2 text-sm font-medium transition-transform focus:translate-y-0',
          focusRingClasses,
        )}
      >
        Pular para o conteúdo
      </a>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout
