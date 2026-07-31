import menuData from '@/constants/products.json'
import type { Product, ProductCategory } from '@/types/product'

const categories = menuData.categories as ProductCategory[]
const products = menuData.products as Product[]

export function getMenuData() {
  return { categories, products }
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id)
}

export function getCategoryById(id: string) {
  return categories.find((category) => category.id === id)
}
