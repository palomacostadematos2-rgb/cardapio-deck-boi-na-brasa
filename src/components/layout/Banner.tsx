import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Logo from '@/components/ui/Logo'
import {
  buttonBaseClasses,
  buttonVariantClasses,
} from '@/constants/buttonStyles'
import PageContainer from '@/components/ui/PageContainer'
import { fadeUp, staggerChildren } from '@/constants/animations'
import { restaurantConfig } from '@/constants/restaurant.config'
import { cn } from '@/utils/cn'

function Banner() {
  return (
    <section className="from-surface via-background to-background relative overflow-hidden bg-gradient-to-b">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(180deg, var(--color-wood-800) 0px, var(--color-wood-800) 3px, transparent 3px, transparent 28px)',
        }}
        aria-hidden
      />
      <div className="from-background pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />

      <PageContainer className="relative flex flex-col items-center gap-6 py-20 text-center sm:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={fadeUp} className="relative">
            <div
              className="bg-flame-500/25 absolute inset-0 -z-10 scale-125 rounded-full blur-2xl"
              aria-hidden
            />
            <Logo size="xl" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-cream text-3xl leading-tight tracking-wide uppercase sm:text-5xl"
          >
            {restaurantConfig.shortName}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-script text-flame-300 text-2xl sm:text-3xl"
          >
            {restaurantConfig.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-cream-dim max-w-md text-sm sm:text-base"
          >
            {restaurantConfig.description}
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              to="/cardapio"
              className={cn(buttonBaseClasses, buttonVariantClasses.primary)}
            >
              Ver cardápio
            </Link>
          </motion.div>
        </motion.div>
      </PageContainer>
    </section>
  )
}

export default Banner
