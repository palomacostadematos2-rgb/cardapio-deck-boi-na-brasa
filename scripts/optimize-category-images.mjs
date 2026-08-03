import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const dir = path.resolve('src/assets/images/categories')
const MAX_WIDTH = 1200

async function run() {
  const files = fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png)$/i.test(file))

  if (files.length === 0) {
    console.log('Nenhuma imagem .jpg/.jpeg/.png encontrada em', dir)
    return
  }

  for (const file of files) {
    const inputPath = path.join(dir, file)
    const baseName = file.replace(/\.(jpe?g|png)$/i, '')
    const outputPath = path.join(dir, `${baseName}.webp`)

    const before = fs.statSync(inputPath).size
    const image = sharp(inputPath)
    const metadata = await image.metadata()

    await image
      .resize({
        width: Math.min(metadata.width ?? MAX_WIDTH, MAX_WIDTH),
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toFile(outputPath)

    const after = fs.statSync(outputPath).size
    fs.unlinkSync(inputPath)

    console.log(
      `${file} → ${baseName}.webp (${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB)`,
    )
  }

  console.log(
    '\nLembre-se: o nome do arquivo (sem extensão) precisa ser exatamente o id da categoria.',
  )
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
