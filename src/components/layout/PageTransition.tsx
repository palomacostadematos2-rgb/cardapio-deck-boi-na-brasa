import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { pageFade } from '@/constants/animations'

function PageTransition() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageFade}
        className="flex flex-1 flex-col"
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
