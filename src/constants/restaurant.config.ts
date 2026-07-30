import type { RestaurantConfig } from '@/types/restaurant'
import logo from '@/assets/images/logo.jpeg'

export const restaurantConfig: RestaurantConfig = {
  name: 'Deck Boi na Brasa Grill',
  shortName: 'Boi na Brasa',
  tagline: 'Bar & Restaurante',
  description:
    'Churrasco no ponto, ambiente descontraído e muito sabor na brasa.',
  logo,
  address: {
    street: 'Endereço a definir',
    city: 'Cidade',
    state: 'UF',
  },
  phone: '',
  whatsapp: '',
  openingHours: [{ days: 'Ter. a Dom.', hours: '18h às 23h' }],
  social: [],
}
