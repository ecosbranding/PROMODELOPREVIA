import { BarraAnuncio } from '@/components/home/BarraAnuncio'
import { NavHome } from '@/components/layout/NavHome'
import { Hero } from '@/components/home/Hero'
import { AvisosUrgentes } from '@/components/home/AvisosUrgentes'
import { ImpulsadorasDestacadas } from '@/components/home/ImpulsadorasDestacadas'
import { EventosDisponibles } from '@/components/home/EventosDisponibles'
import { ComoFunciona } from '@/components/home/ComoFunciona'
import { CtaImpulsadoras } from '@/components/home/CtaImpulsadoras'
import { CtaEmpresas } from '@/components/home/CtaEmpresas'
import { Footer } from '@/components/layout/Footer'

export const revalidate = 300 // ISR cada 5 min

export default function HomePage() {
  return (
    <>
      <BarraAnuncio />
      <NavHome />
      <main id="main">
        <Hero />
        <AvisosUrgentes />
        <ImpulsadorasDestacadas />
        <EventosDisponibles />
        <ComoFunciona />
        <CtaImpulsadoras />
        <CtaEmpresas />
      </main>
      <Footer />
    </>
  )
}
