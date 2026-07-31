import type { Product } from '@/types/product'

export function groupProducts(products: Product[]) {
  const groups = new Map<string, Product[]>()

  for (const product of products) {
    const key = product.group ?? ''
    const existing = groups.get(key)
    if (existing) {
      existing.push(product)
    } else {
      groups.set(key, [product])
    }
  }

  return Array.from(groups.entries())
}
