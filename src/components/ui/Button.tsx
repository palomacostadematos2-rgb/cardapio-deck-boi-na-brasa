import type { ButtonHTMLAttributes } from 'react'
import {
  buttonBaseClasses,
  buttonVariantClasses,
  type ButtonVariant,
} from '@/constants/buttonStyles'
import { cn } from '@/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        buttonBaseClasses,
        buttonVariantClasses[variant],
        className,
      )}
      {...props}
    />
  )
}

export default Button
