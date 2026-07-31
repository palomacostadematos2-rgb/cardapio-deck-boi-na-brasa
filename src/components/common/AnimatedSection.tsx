import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/constants/animations'
import { cn } from '@/utils/cn'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={cn('py-section', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -80px 0px' }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
