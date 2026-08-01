import sharp from 'sharp'
import path from 'node:path'

const logoPath = path.resolve('src/assets/images/logo-optimized.jpg')
const outPath = path.resolve('public/og-image.jpg')

const WIDTH = 1200
const HEIGHT = 630
const LOGO_SIZE = 420

async function run() {
  const background = sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 3,
      background: '#140f0c',
    },
  })

  const logo = await sharp(logoPath)
    .resize(LOGO_SIZE, LOGO_SIZE, { fit: 'cover' })
    .composite([
      {
        input: Buffer.from(
          `<svg width="${LOGO_SIZE}" height="${LOGO_SIZE}"><circle cx="${LOGO_SIZE / 2}" cy="${LOGO_SIZE / 2}" r="${LOGO_SIZE / 2}" fill="#fff"/></svg>`,
        ),
        blend: 'dest-in',
      },
    ])
    .png()
    .toBuffer()

  await background
    .composite([
      {
        input: logo,
        left: Math.round((WIDTH - LOGO_SIZE) / 2),
        top: Math.round((HEIGHT - LOGO_SIZE) / 2),
      },
    ])
    .jpeg({ quality: 85 })
    .toFile(outPath)

  console.log(`Imagem Open Graph gerada: ${outPath}`)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
