import { Brand } from "./Brand"


export type Product = {
  id: string
  name: string
  description: string
  images: string[]
  brandId: string
  brand: Brand
  price: number
  category: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
}
