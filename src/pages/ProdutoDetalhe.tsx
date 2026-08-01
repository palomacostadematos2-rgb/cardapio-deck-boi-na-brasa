import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import PageContainer from '@/components/ui/PageContainer'
import WoodDivider from '@/components/ui/WoodDivider'
import CategoryBadge from '@/components/menu/CategoryBadge'
import ProductImage from '@/components/menu/ProductImage'
import Seo from '@/components/common/Seo'
import { getCategoryById, getProductById } from '@/utils/menuData'
import { fadeUp, scaleIn, staggerChildren } from '@/constants/animations'
import { focusRingClasses } from '@/constants/a11y'
import { formatCurrency } from '@/utils/formatCurrency'
import { cn } from '@/utils/cn'

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
    <main id="conteudo" className="py-section">
      <Seo
        title={product.name}
        description={
          product.description ??
          `Confira ${product.name} no cardápio do ${category?.name ?? 'restaurante'}.`
        }
        path={`/cardapio/${product.id}`}
        image={product.image}
      />
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
              className={cn(
                'text-cream-dim hover:text-cream inline-flex items-center gap-2 rounded-full text-sm transition-colors',
                focusRingClasses,
              )}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Voltar ao cardápio
            </Link>
          </motion.div>

          <motion.div
            variants={scaleIn}
            className="border-wood-800 bg-surface overflow-hidden rounded-2xl border"
          >
            <ProductImage
              image={product.image}
              name={product.name}
              categoryIcon={category?.icon}
              className="aspect-[4/3] w-full"
              iconClassName="h-12 w-12"
            />

            <div className="flex flex-col gap-5 p-6 text-center sm:p-8">
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
            </div>
          </motion.div>
        </motion.div>
      </PageContainer>
    </main>
  )
}

export default ProdutoDetalhe
