/**
 * Resolve automaticamente a imagem de fundo de uma categoria, se existir.
 *
 * Basta salvar um arquivo em src/assets/images/categories/ com o nome exato
 * do `id` da categoria (ex.: cervejas.jpg para a categoria "cervejas") —
 * nenhuma edição do products.json é necessária. As imagens de categoria são
 * o único lugar do cardápio que exibe fotografia; produtos são somente
 * texto (nome, descrição, preço).
 */
const modules = import.meta.glob(
  '/src/assets/images/categories/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' },
) as Record<string, string>

const categoryImageMap = new Map<string, string>()

for (const [filePath, url] of Object.entries(modules)) {
  const fileName = filePath.split('/').pop() ?? ''
  const id = fileName.replace(/\.(jpg|jpeg|png|webp)$/i, '')
  categoryImageMap.set(id, url)
}

export function getCategoryImage(categoryId: string): string | undefined {
  return categoryImageMap.get(categoryId)
}
