import { AnimatePresence, motion } from 'framer-motion'
import NavLinks from '@/components/layout/NavLinks'

interface MobileMenuProps {
  open: boolean
  onNavigate: () => void
}

function MobileMenu({ open, onNavigate }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="menu-mobile"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="border-wood-800/60 bg-background overflow-hidden border-b sm:hidden"
        >
          <NavLinks
            className="flex flex-col gap-1 px-4 py-3"
            onNavigate={onNavigate}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
