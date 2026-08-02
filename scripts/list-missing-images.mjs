import fs from 'node:fs'
import path from 'node:path'

const productsPath = path.resolve('src/constants/products.json')
const imagesDir = path.resolve('src/assets/images/products')
const outputPath = path.resolve('docs/produtos-sem-imagem.md')
const extensions = ['.webp', '.jpg', '.jpeg', '.png']

function hasImage(productId) {
  return extensions.some((ext) =>
    fs.existsSync(path.join(imagesDir, `${productId}${ext}`)),
  )
}

function run() {
  const data = JSON.parse(fs.readFileSync(productsPath, 'utf-8'))
  const categoryNames = new Map(data.categories.map((c) => [c.id, c.name]))

  const missing = data.products.filter(
    (product) => !hasImage(product.id) && !product.image,
  )

  const byCategory = new Map()
  for (const product of missing) {
    const key = product.categoryId
    if (!byCategory.has(key)) byCategory.set(key, [])
    byCategory.get(key).push(product)
  }

  const lines = []
  lines.push('# Produtos sem foto real')
  lines.push('')
  lines.push(
    `Gerado automaticamente por \`npm run images:missing\`. ${missing.length} de ${data.products.length} produtos ainda usam o placeholder padrão.`,
  )
  lines.push('')
  lines.push(
    'Para adicionar uma foto: salve o arquivo em `src/assets/images/products/{id}.jpg` ' +
      '(ou .webp/.png) e rode este script novamente para atualizar esta lista — a vinculação ' +
      'no site é automática, veja `src/assets/images/products/README.md`.',
  )
  lines.push('')

  for (const [categoryId, products] of byCategory) {
    lines.push(`## ${categoryNames.get(categoryId) ?? categoryId}`)
    lines.push('')
    let lastGroup = null
    for (const product of products) {
      if (product.group !== lastGroup) {
        lines.push(`**${product.group ?? 'Outros'}**`)
        lastGroup = product.group
      }
      lines.push(`- [ ] \`${product.id}\` — ${product.name}`)
    }
    lines.push('')
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, lines.join('\n'), 'utf-8')

  console.log(`Lista gerada em ${outputPath}`)
  console.log(`${missing.length} de ${data.products.length} produtos sem foto.`)
}

run()
