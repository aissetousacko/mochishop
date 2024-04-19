export interface simplifiedProduct {
  _id: string
  imageUrl: string
  name: string
  price: number
  slug: string
  category: string
}

export interface ProductDetail {
  _id: string
  imageUrl: string
  name: string
  price: number
  slug: string
  description: string
}

export interface dropdownOptions {
  label: string
  text: string
}
