import { Component, type ErrorInfo, type ReactNode } from 'react'
import Button from '@/components/ui/Button'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Erro inesperado na aplicação:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
          <h1 className="font-display text-cream text-2xl uppercase">
            Algo deu errado
          </h1>
          <p className="text-cream-dim max-w-sm text-sm">
            Não foi possível carregar esta página. Tente recarregar.
          </p>
          <Button onClick={() => window.location.reload()}>Recarregar</Button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
