import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import PageContainer from '@/components/ui/PageContainer'
import WoodDivider from '@/components/ui/WoodDivider'
import CategoryBadge from '@/components/menu/CategoryBadge'
import { getCategoryById, getProductById } from '@/hooks/useMenuData'
import { fadeUp, staggerChildren } from '@/constants/animations'
import { formatCurrency } from '@/utils/formatCurrency'

function ProdutoDetalhe() {
  const { productId } = useParams<{ productId: string }>()
  const product = productId ? getProductById(productId) : undefined
  const category = product ? getCategoryById(product.categoryId) : undefined

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [productId])

  if (!product) {
    return <Navigate to="/cardapio" replace />
  }

  return (
    <main className="py-section">
      <PageContainer className="mx-auto max-w-xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp}>
            <Link
              to="/cardapio"
              className="text-cream-dim hover:text-cream inline-flex items-center gap-2 text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Voltar ao cardápio
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="border-wood-800 bg-surface flex flex-col gap-5 rounded-2xl border p-6 text-center sm:p-8"
          >
            {category && (
              <CategoryBadge category={category} className="mx-auto" />
            )}

            {product.group && (
              <p className="font-script text-flame-300 text-lg">
                {product.group}
              </p>
            )}

            <h1 className="font-display text-cream text-2xl tracking-wide uppercase sm:text-3xl">
              {product.name}
            </h1>

            <WoodDivider />

            {product.description && (
              <p className="text-cream-dim text-sm sm:text-base">
                {product.description}
              </p>
            )}

            <p className="text-flame-300 font-display text-3xl sm:text-4xl">
              {formatCurrency(product.price)}
            </p>
          </motion.div>
        </motion.div>
      </PageContainer>
    </main>
  )
}

export default ProdutoDetalhe
