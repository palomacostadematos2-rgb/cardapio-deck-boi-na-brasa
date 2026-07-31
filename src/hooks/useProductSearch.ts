import { useMemo } from 'react'
import type { Product } from '@/types/product'
import { normalizeText } from '@/utils/normalizeText'

export function useProductSearch(products: Product[], query: string) {
  return useMemo(() => {
    const normalizedQuery = normalizeText(query)

    if (!normalizedQuery) return null

    return products.filter((product) => {
      const haystack = normalizeText(
        `${product.name} ${product.description ?? ''} ${product.group ?? ''}`,
      )
      return haystack.includes(normalizedQuery)
    })
  }, [products, query])
}
