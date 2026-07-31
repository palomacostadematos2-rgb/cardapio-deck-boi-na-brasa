import type { Product } from '@/types/product'
import ProductCard from '@/components/menu/ProductCard'

interface ProductGroupProps {
  title: string
  products: Product[]
}

function ProductGroup({ title, products }: ProductGroupProps) {
  return (
    <div>
      {title && (
        <h3 className="font-script text-flame-300 mb-3 text-lg">{title}</h3>
      )}
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductGroup
