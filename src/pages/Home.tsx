import { Link } from 'react-router-dom'
import { UtensilsCrossed } from 'lucide-react'
import Banner from '@/components/layout/Banner'
import AnimatedSection from '@/components/common/AnimatedSection'
import PageContainer from '@/components/ui/PageContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import WoodDivider from '@/components/ui/WoodDivider'
import {
  buttonBaseClasses,
  buttonVariantClasses,
} from '@/constants/buttonStyles'
import { restaurantConfig } from '@/constants/restaurant.config'
import { cn } from '@/utils/cn'

function Home() {
  return (
    <main id="conteudo">
      <Banner />

      <AnimatedSection id="sobre">
        <PageContainer className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
          <SectionTitle eyebrow="Nossa história" title="Sobre a casa" />
          <p className="text-cream-dim text-sm sm:text-base">
            {restaurantConfig.description}
          </p>
        </PageContainer>
      </AnimatedSection>

      <AnimatedSection id="destaque" className="bg-surface">
        <PageContainer className="mx-auto flex max-w-md flex-col items-center gap-5 text-center">
          <div className="bg-brasa-500/10 text-brasa-400 ring-brasa-500/20 flex h-14 w-14 items-center justify-center rounded-full ring-1">
            <UtensilsCrossed className="h-7 w-7" aria-hidden />
          </div>
          <SectionTitle title="Conheça nosso cardápio" />
          <p className="text-cream-dim text-sm sm:text-base">
            Cervejas artesanais, drinks autorais, petiscos e porções — tudo na
            brasa.
          </p>
          <WoodDivider className="my-1" />
          <Link
            to="/cardapio"
            className={cn(buttonBaseClasses, buttonVariantClasses.outline)}
          >
            Ver cardápio completo
          </Link>
        </PageContainer>
      </AnimatedSection>
    </main>
  )
}

export default Home
