import { useMemo, useState } from 'react'
import PageContainer from '@/components/ui/PageContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import CategoryTabs from '@/components/menu/CategoryTabs'
import ProductList from '@/components/menu/ProductList'
import menuData from '@/constants/products.json'
import type { Product, ProductCategory } from '@/types/product'

const categories = menuData.categories as ProductCategory[]
const products = menuData.products as Product[]

function Cardapio() {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '')

  const activeProducts = useMemo(
    () => products.filter((product) => product.categoryId === activeId),
    [activeId],
  )

  return (
    <main className="py-section">
      <PageContainer className="flex flex-col gap-8">
        <SectionTitle eyebrow="Tudo na brasa" title="Cardápio" />

        <CategoryTabs
          categories={categories}
          activeId={activeId}
          onChange={setActiveId}
        />

        <ProductList products={activeProducts} />
      </PageContainer>
    </main>
  )
}

export default Cardapio
