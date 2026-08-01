import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/components/layout/RootLayout'
import Home from '@/pages/Home'
import { Cardapio, ProdutoDetalhe, Sobre, NotFound } from '@/routes/lazyPages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'cardapio', element: <Cardapio /> },
      { path: 'cardapio/:productId', element: <ProdutoDetalhe /> },
      { path: 'sobre', element: <Sobre /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
