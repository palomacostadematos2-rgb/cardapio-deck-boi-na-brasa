import sharp from 'sharp'
import path from 'node:path'

const source = path.resolve('src/assets/images/logo.jpeg')
const outDir = path.resolve('src/assets/images')

const SIZE = 480

async function run() {
  const image = sharp(source).resize(SIZE, SIZE, { fit: 'cover' })

  await image
    .clone()
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'logo-optimized.webp'))

  await image
    .clone()
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(outDir, 'logo-optimized.jpg'))

  console.log('Logo otimizada gerada em src/assets/images/')
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
