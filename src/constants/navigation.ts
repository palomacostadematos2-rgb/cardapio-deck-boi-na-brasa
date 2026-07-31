export interface NavItem {
  label: string
  to: string
}

export const navItems: NavItem[] = [
  { label: 'Início', to: '/' },
  { label: 'Cardápio', to: '/cardapio' },
  { label: 'Sobre', to: '/sobre' },
]
