export type ButtonVariant = 'primary' | 'outline' | 'ghost'

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brasa-500 text-cream hover:bg-brasa-400 shadow-md shadow-brasa-600/30',
  outline: 'border border-wood-600 text-cream hover:bg-surface-light',
  ghost: 'text-cream hover:bg-surface-light',
}

export const buttonBaseClasses =
  'rounded-full px-6 py-3 font-sans text-sm font-medium tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-60'
