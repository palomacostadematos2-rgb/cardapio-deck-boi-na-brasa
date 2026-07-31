import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/components/layout/RootLayout'
import Home from '@/pages/Home'
import Cardapio from '@/pages/Cardapio'
import ProdutoDetalhe from '@/pages/ProdutoDetalhe'
import Sobre from '@/pages/Sobre'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'cardapio', element: <Cardapio /> },
      { path: 'cardapio/:productId', element: <ProdutoDetalhe /> },
      { path: 'sobre', element: <Sobre /> },
    ],
  },
])
