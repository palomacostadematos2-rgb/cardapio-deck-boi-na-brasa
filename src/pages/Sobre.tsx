import { Clock, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import PageContainer from '@/components/ui/PageContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import WoodDivider from '@/components/ui/WoodDivider'
import Logo from '@/components/ui/Logo'
import Seo from '@/components/common/Seo'
import { restaurantConfig } from '@/constants/restaurant.config'
import { fadeUp, staggerChildren } from '@/constants/animations'

function Sobre() {
  return (
    <main id="conteudo" className="py-section">
      <Seo
        title="Sobre"
        description={`Conheça o ${restaurantConfig.name}: endereço, horário de funcionamento e a história da casa.`}
        path="/sobre"
      />
      <PageContainer className="mx-auto flex max-w-xl flex-col gap-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="flex flex-col items-center gap-6 text-center"
        >
          <motion.div variants={fadeUp}>
            <Logo size="lg" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <SectionTitle
              as="h1"
              eyebrow={restaurantConfig.tagline}
              title={restaurantConfig.name}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-cream-dim text-sm sm:text-base"
          >
            {restaurantConfig.description}
          </motion.p>

          <motion.div variants={fadeUp} className="w-full">
            <WoodDivider />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="border-wood-800 bg-surface flex w-full flex-col gap-5 rounded-2xl border p-6 text-left sm:p-8"
          >
            <div className="flex items-start gap-3">
              <MapPin
                className="text-flame-300 mt-0.5 h-5 w-5 shrink-0"
                aria-hidden
              />
              <div>
                <p className="text-cream text-sm font-medium sm:text-base">
                  Endereço
                </p>
                <p className="text-cream-dim text-sm sm:text-base">
                  {restaurantConfig.address.street} —{' '}
                  {restaurantConfig.address.city}/
                  {restaurantConfig.address.state}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock
                className="text-flame-300 mt-0.5 h-5 w-5 shrink-0"
                aria-hidden
              />
              <div>
                <p className="text-cream text-sm font-medium sm:text-base">
                  Horário de funcionamento
                </p>
                <ul className="text-cream-dim text-sm sm:text-base">
                  {restaurantConfig.openingHours.map((item) => (
                    <li key={item.days}>
                      {item.days}: {item.hours}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </PageContainer>
    </main>
  )
}

export default Sobre
