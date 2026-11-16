import Link from 'next/link'

export function Hero() {
  return (
    <section className="bg-rose-50 px-5 lg:px-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-[0.25em] text-rose-700 font-semibold mb-4">
            PROMODELO ECUADOR
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-ink-900">
            El{' '}
            <span className="font-script text-rose-500 text-5xl md:text-6xl lg:text-7xl font-normal">
              talento
            </span>
            {' '}que tu evento necesita.
          </h1>
          <p className="text-ink-500 text-base md:text-lg leading-relaxed mt-6 max-w-lg">
            Conecta directamente con impulsadoras verificadas en Ecuador. Sin intermediarios, sin comisiones. Contacto inmediato por WhatsApp.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/impulsadoras" className="btn-dark">VER IMPULSADORAS →</Link>
            <Link href="/registro-empresa" className="btn-ghost !py-4 !px-6">PUBLICAR UN EVENTO</Link>
          </div>

          <dl className="flex gap-8 mt-10 pt-8 border-t border-rose-200">
            <div>
              <dt className="text-xs text-ink-400 uppercase tracking-wider">Impulsadoras</dt>
              <dd className="font-serif text-3xl font-bold text-ink-900 mt-1">55+</dd>
            </div>
            <div>
              <dt className="text-xs text-ink-400 uppercase tracking-wider">Ciudades</dt>
              <dd className="font-serif text-3xl font-bold text-ink-900 mt-1">15</dd>
            </div>
            <div>
              <dt className="text-xs text-ink-400 uppercase tracking-wider">Ofertas activas</dt>
              <dd className="font-serif text-3xl font-bold text-ink-900 mt-1">22</dd>
            </div>
          </dl>
        </div>

        <div className="hidden md:block">
          <div className="aspect-portrait bg-gradient-to-br from-rose-200 via-rose-100 to-rose-50 rounded-sm shadow-card flex items-center justify-center">
            <span className="font-script text-rose-500 text-7xl opacity-80">promodelo</span>
          </div>
        </div>
      </div>
    </section>
  )
}
