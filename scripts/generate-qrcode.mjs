import QRCode from 'qrcode'
import fs from 'node:fs'
import path from 'node:path'

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {}

  const content = fs.readFileSync(filePath, 'utf-8')
  const env = {}

  for (const line of content.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const [key, ...rest] = trimmed.split('=')
    if (!key) continue

    env[key.trim()] = rest.join('=').trim()
  }

  return env
}

// Segue a mesma ordem de precedência do Vite: .env.local sobrescreve .env.
const envFile = {
  ...loadEnvFile(path.resolve('.env')),
  ...loadEnvFile(path.resolve('.env.local')),
}

const appUrl =
  process.argv[2] || process.env.VITE_APP_URL || envFile.VITE_APP_URL

if (!appUrl) {
  console.error(
    'Defina VITE_APP_URL no arquivo .env (veja .env.example) ou passe a URL como argumento:\n' +
      '  npm run qrcode -- https://seudominio.com.br',
  )
  process.exit(1)
}

const targetUrl = new URL('/cardapio', appUrl).toString()
const outputPath = path.resolve('qrcode-cardapio.png')

await QRCode.toFile(outputPath, targetUrl, {
  width: 1024,
  margin: 2,
  color: { dark: '#140F0C', light: '#FFFFFF' },
})

console.log(`QR Code gerado: ${outputPath}`)
console.log(`Aponta para: ${targetUrl}`)
console.log(
  'Este arquivo não é versionado no Git — gere novamente sempre que VITE_APP_URL mudar.',
)
