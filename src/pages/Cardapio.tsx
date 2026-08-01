import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageContainer from '@/components/ui/PageContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import Seo from '@/components/common/Seo'
import CategoryTabs from '@/components/menu/CategoryTabs'
import ProductList from '@/components/menu/ProductList'
import SearchBar from '@/components/menu/SearchBar'
import SearchResults from '@/components/menu/SearchResults'
import { getMenuData } from '@/utils/menuData'
import { useProductSearch } from '@/hooks/useProductSearch'
import { pageFade } from '@/constants/animations'

const { categories, products } = getMenuData()

function Cardapio() {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '')
  const [query, setQuery] = useState('')

  const searchResults = useProductSearch(products, query)

  const activeProducts = useMemo(
    () => products.filter((product) => product.categoryId === activeId),
    [activeId],
  )

  const isSearching = searchResults !== null
  const panelId = `panel-${activeId}`

  return (
    <main id="conteudo" className="py-section">
      <Seo
        title="Cardápio"
        description="Cervejas artesanais, drinks autorais, destilados, sucos, petiscos e porções do Deck Boi na Brasa Grill."
        path="/cardapio"
      />
      <PageContainer className="flex flex-col gap-8">
        <SectionTitle as="h1" eyebrow="Tudo na brasa" title="Cardápio" />

        <SearchBar value={query} onChange={setQuery} />

        <AnimatePresence mode="wait">
          {isSearching ? (
            <motion.div
              key="search"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageFade}
            >
              <SearchResults
                query={query}
                results={searchResults}
                categories={categories}
              />
            </motion.div>
          ) : (
            <motion.div
              key="browse"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageFade}
              className="flex flex-col gap-8"
            >
              <div className="border-wood-800/40 bg-background/95 sticky top-16 z-40 -mx-4 border-b px-4 backdrop-blur sm:static sm:mx-0 sm:border-none sm:bg-transparent sm:px-0 sm:backdrop-blur-none">
                <CategoryTabs
                  categories={categories}
                  activeId={activeId}
                  onChange={setActiveId}
                  panelId={panelId}
                />
              </div>
              <ProductList
                products={activeProducts}
                id={panelId}
                labelledBy={`tab-${activeId}`}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </PageContainer>
    </main>
  )
}

export default Cardapio
