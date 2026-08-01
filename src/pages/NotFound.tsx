import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import PageContainer from '@/components/ui/PageContainer'
import WoodDivider from '@/components/ui/WoodDivider'
import Seo from '@/components/common/Seo'
import {
  buttonBaseClasses,
  buttonVariantClasses,
} from '@/constants/buttonStyles'
import { fadeUp, staggerChildren } from '@/constants/animations'
import { cn } from '@/utils/cn'

function NotFound() {
  return (
    <main id="conteudo" className="py-section flex flex-1 items-center">
      <Seo title="Página não encontrada" />
      <PageContainer className="mx-auto flex max-w-md flex-col items-center gap-5 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="flex flex-col items-center gap-5"
        >
          <motion.div variants={fadeUp}>
            <Flame className="text-flame-500 h-10 w-10" aria-hidden />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-cream text-2xl tracking-wide uppercase sm:text-3xl"
          >
            Página não encontrada
          </motion.h1>

          <motion.div variants={fadeUp} className="w-full">
            <WoodDivider />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-cream-dim text-sm sm:text-base"
          >
            O endereço acessado não existe. Que tal voltar para o cardápio?
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
    </main>
  )
}

export default NotFound
