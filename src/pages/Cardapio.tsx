import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageContainer from '@/components/ui/PageContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import CategoryTabs from '@/components/menu/CategoryTabs'
import ProductList from '@/components/menu/ProductList'
import SearchBar from '@/components/menu/SearchBar'
import SearchResults from '@/components/menu/SearchResults'
import { useMenuData } from '@/hooks/useMenuData'
import { useProductSearch } from '@/hooks/useProductSearch'

function Cardapio() {
  const { categories, products } = useMenuData()
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '')
  const [query, setQuery] = useState('')

  const searchResults = useProductSearch(products, query)

  const activeProducts = useMemo(
    () => products.filter((product) => product.categoryId === activeId),
    [products, activeId],
  )

  const isSearching = searchResults !== null

  return (
    <main className="py-section">
      <PageContainer className="flex flex-col gap-8">
        <SectionTitle eyebrow="Tudo na brasa" title="Cardápio" />

        <SearchBar value={query} onChange={setQuery} />

        <AnimatePresence mode="wait">
          {isSearching ? (
            <motion.div
              key="search"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-8"
            >
              <CategoryTabs
                categories={categories}
                activeId={activeId}
                onChange={setActiveId}
              />
              <ProductList products={activeProducts} />
            </motion.div>
          )}
        </AnimatePresence>
      </PageContainer>
    </main>
  )
}

export default Cardapio
