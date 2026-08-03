import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageContainer from '@/components/ui/PageContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import BackLink from '@/components/ui/BackLink'
import Seo from '@/components/common/Seo'
import CategoryGrid from '@/components/menu/CategoryGrid'
import ProductList from '@/components/menu/ProductList'
import SearchBar from '@/components/menu/SearchBar'
import { categoryIconMap } from '@/constants/categoryIcons'
import { getMenuData } from '@/utils/menuData'
import { useProductSearch } from '@/hooks/useProductSearch'
import { pageFade } from '@/constants/animations'

const { categories, products } = getMenuData()

function Cardapio() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  )
  const [query, setQuery] = useState('')

  const selectedCategory = categories.find((c) => c.id === selectedCategoryId)
  const CategoryIcon = selectedCategory
    ? categoryIconMap[selectedCategory.icon]
    : undefined

  const categoryProducts = useMemo(
    () =>
      products.filter((product) => product.categoryId === selectedCategoryId),
    [selectedCategoryId],
  )

  const searchResults = useProductSearch(categoryProducts, query)
  const displayedProducts = searchResults ?? categoryProducts

  function handleSelectCategory(categoryId: string) {
    setSelectedCategoryId(categoryId)
    setQuery('')
  }

  function handleBack() {
    setSelectedCategoryId(null)
    setQuery('')
  }

  return (
    <main id="conteudo" className="py-section">
      <Seo
        title="Cardápio"
        description="Cervejas artesanais, drinks autorais, destilados, sucos, petiscos e porções do Deck Boi na Brasa Grill."
        path="/cardapio"
      />
      <PageContainer className="flex flex-col gap-8">
        <SectionTitle as="h1" eyebrow="Tudo na brasa" title="Cardápio" />

        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div
              key="categories"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageFade}
            >
              <CategoryGrid
                categories={categories}
                onSelect={handleSelectCategory}
              />
            </motion.div>
          ) : (
            <motion.div
              key={selectedCategory.id}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageFade}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <BackLink onClick={handleBack}>Voltar às categorias</BackLink>

                <div className="flex items-center gap-2">
                  {CategoryIcon && (
                    <CategoryIcon
                      className="text-flame-300 h-6 w-6"
                      aria-hidden
                    />
                  )}
                  <h2 className="font-display text-cream text-xl tracking-wide uppercase sm:text-2xl">
                    {selectedCategory.name}
                  </h2>
                </div>
              </div>

              <SearchBar value={query} onChange={setQuery} />

              <ProductList
                products={displayedProducts}
                emptyMessage={
                  query
                    ? `Nenhum item encontrado para "${query}" em ${selectedCategory.name}.`
                    : 'Nenhum produto disponível nesta categoria.'
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </PageContainer>
    </main>
  )
}

export default Cardapio
