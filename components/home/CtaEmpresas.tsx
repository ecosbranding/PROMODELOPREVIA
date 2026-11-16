import Link from 'next/link'

export function CtaEmpresas() {
  return (
    <section className="px-5 lg:px-10 py-16 bg-ink-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs tracking-[0.25em] text-rose-500 font-semibold mb-3">¿TIENES UN EVENTO?</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
          Encuentra el{' '}
          <span className="font-script text-rose-500 text-5xl font-normal">talento</span>
          {' '}perfecto
        </h2>
        <p className="text-white/70 text-base leading-relaxed mt-6 max-w-xl mx-auto">
          Crea gratis tu cuenta de empresa, registra tus activaciones, ferias y lanzamientos, y las impulsadoras interesadas te contactan directo por WhatsApp.
        </p>
        <Link href="/registro-empresa" className="btn-dark mt-7 bg-rose-500 hover:bg-rose-700">
          REGISTRAR MI EMPRESA →
        </Link>
      </div>
    </section>
  )
}
