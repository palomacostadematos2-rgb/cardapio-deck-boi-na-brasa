import { Helmet } from 'react-helmet-async'
import { restaurantConfig, appUrl } from '@/constants/restaurant.config'

interface SeoProps {
  title: string
  description?: string
  path?: string
  image?: string
}

function Seo({ title, description, path = '', image }: SeoProps) {
  const fullTitle = `${title} | ${restaurantConfig.name}`
  const metaDescription = description ?? restaurantConfig.description
  const url = `${appUrl}${path}`
  const imageUrl = image ?? `${appUrl}/og-image.jpg`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={restaurantConfig.name} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}

export default Seo
