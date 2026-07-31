export interface Product {
  id: string
  categoryId: string
  group?: string
  name: string
  description?: string
  price: number
  image?: string
}

export interface ProductCategory {
  id: string
  name: string
  icon: string
}
