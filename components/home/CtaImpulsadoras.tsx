import Link from 'next/link'

export function CtaImpulsadoras() {
  return (
    <section className="px-5 lg:px-10 py-16 bg-rose-100">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs tracking-[0.25em] text-rose-700 font-semibold mb-3">¿ERES IMPULSADORA?</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
            Gana con tu{' '}
            <span className="font-script text-rose-500 text-5xl font-normal">talento</span>
          </h2>
          <p className="text-ink-500 text-base leading-relaxed mt-6 max-w-md">
            Crea gratis tu perfil, recibe propuestas directas por WhatsApp y gestiona tus propios eventos sin comisiones.
          </p>
          <Link href="/registro" className="btn-dark mt-7">CREAR MI PERFIL →</Link>
        </div>
        <div className="hidden md:block aspect-portrait bg-gradient-to-br from-rose-200 to-rose-50 shadow-card" />
      </div>
    </section>
  )
}
