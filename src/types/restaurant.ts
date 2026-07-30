export interface RestaurantSocialLink {
  label: string
  url: string
  icon: 'instagram' | 'facebook' | 'whatsapp'
}

export interface RestaurantOpeningHours {
  days: string
  hours: string
}

export interface RestaurantConfig {
  name: string
  shortName: string
  tagline: string
  description: string
  logo: string
  address: {
    street: string
    city: string
    state: string
  }
  phone: string
  whatsapp: string
  openingHours: RestaurantOpeningHours[]
  social: RestaurantSocialLink[]
}
