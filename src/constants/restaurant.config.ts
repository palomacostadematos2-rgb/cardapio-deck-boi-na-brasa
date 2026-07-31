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
    street: 'Rua Desembargador José Satyro, 302',
    city: 'Castelo',
    state: 'MG',
  },
  phone: '(31) 2552-4669',
  whatsapp: '(31) 97107-2705',
  openingHours: [
    { days: 'Terça a Sexta', hours: '17h às 23h45' },
    { days: 'Sábado e Feriados', hours: '11h às 23h45' },
    { days: 'Domingo', hours: '11h às 22h' },
  ],
  social: [
    {
      label: '@deckboinabrasa',
      url: 'https://instagram.com/deckboinabrasa',
      icon: 'instagram',
    },
  ],
}
