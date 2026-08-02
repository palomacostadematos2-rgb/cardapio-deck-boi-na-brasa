import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { router } from '@/routes'

function App() {
  useEffect(() => {
    // Remove as tags estáticas de SEO (fallback para crawlers sem JS) assim
    // que o React monta — a partir daqui, react-helmet-async (via Seo.tsx)
    // controla título/description/canonical/Open Graph/Twitter Card.
    document
      .querySelectorAll('[data-default="true"]')
      .forEach((element) => element.remove())
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  )
}

export default App
