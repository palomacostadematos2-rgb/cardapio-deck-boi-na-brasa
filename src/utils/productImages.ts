/**
 * Resolve automaticamente a foto de um produto, se existir.
 *
 * Basta salvar um arquivo em src/assets/images/products/ com o nome exato
 * do `id` do produto (ex.: cervejas-01.jpg para o produto "cervejas-01") —
 * nenhuma edição do products.json é necessária. O Vite processa e otimiza
 * a imagem no build automaticamente (hash, compressão de assets).
 */
const modules = import.meta.glob(
  '/src/assets/images/products/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' },
) as Record<string, string>

const productImageMap = new Map<string, string>()

for (const [filePath, url] of Object.entries(modules)) {
  const fileName = filePath.split('/').pop() ?? ''
  const id = fileName.replace(/\.(jpg|jpeg|png|webp)$/i, '')
  productImageMap.set(id, url)
}

export function getProductImage(productId: string): string | undefined {
  return productImageMap.get(productId)
}
