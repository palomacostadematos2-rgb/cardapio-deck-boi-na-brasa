import { Search, X } from 'lucide-react'
import { focusRingClasses } from '@/constants/a11y'
import { cn } from '@/utils/cn'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div
      className="relative rounded-full transition-shadow duration-300 focus-within:shadow-[0_0_24px_-6px_rgba(255,106,26,0.35)]"
      role="search"
    >
      <Search
        className="text-cream-dim pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2"
        aria-hidden
      />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar por nome, descrição ou ingrediente..."
        aria-label="Buscar no cardápio"
        className={cn(
          'bg-surface border-wood-800 text-cream placeholder:text-cream-dim/70 focus:border-brasa-500 w-full rounded-full border py-3 pr-10 pl-11 text-sm transition-colors',
          focusRingClasses,
        )}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Limpar busca"
          className={cn(
            'text-cream-dim hover:text-cream absolute top-1/2 right-4 -translate-y-1/2 rounded-full',
            focusRingClasses,
          )}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

export default SearchBar
