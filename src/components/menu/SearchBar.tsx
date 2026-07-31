import { Search, X } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
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
        className="bg-surface border-wood-800 text-cream placeholder:text-cream-dim/70 focus:border-brasa-500 w-full rounded-full border py-3 pr-10 pl-11 text-sm outline-none transition-colors"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Limpar busca"
          className="text-cream-dim hover:text-cream absolute top-1/2 right-4 -translate-y-1/2"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

export default SearchBar
