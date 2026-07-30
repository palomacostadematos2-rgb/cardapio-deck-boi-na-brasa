export interface Product {
  id: string
  categoryId: string
  name: string
  description: string
  price: number
  image?: string
}

export interface ProductCategory {
  id: string
  name: string
}
