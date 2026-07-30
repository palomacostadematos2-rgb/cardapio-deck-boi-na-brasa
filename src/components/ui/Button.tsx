import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'outline' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brasa-500 text-cream hover:bg-brasa-400 shadow-md shadow-brasa-600/30',
  outline: 'border border-wood-600 text-cream hover:bg-surface-light',
  ghost: 'text-cream hover:bg-surface-light',
}

function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-full px-6 py-3 font-sans text-sm font-medium tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-60',
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  )
}

export default Button
