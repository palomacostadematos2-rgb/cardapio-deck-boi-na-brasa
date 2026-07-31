import type { Product } from '@/types/product'
import ProductCard from '@/components/menu/ProductCard'

interface ProductGroupProps {
  title: string
  products: Product[]
}

function ProductGroup({ title, products }: ProductGroupProps) {
  return (
    <div>
      <h3 className="font-script text-flame-300 mb-2 text-lg">{title}</h3>
      <ul>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}

export default ProductGroup
