const pasos = [
  { icon: 'ph-magnifying-glass', titulo: 'Explora', texto: 'Revisa perfiles de impulsadoras verificadas con sus tarifas y disponibilidad.' },
  { icon: 'ph-chat-circle-dots', titulo: 'Contacta', texto: 'Habla directamente por WhatsApp con la impulsadora que te interese. Sin intermediarios.' },
  { icon: 'ph-check-circle', titulo: 'Agenda', texto: 'Cierra el servicio, coordina el evento y gestiona todo con quien ya conoces.' },
]

export function ComoFunciona() {
  return (
    <section className="px-5 lg:px-10 py-16 bg-ink-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.25em] text-rose-500 font-semibold mb-2">CÓMO FUNCIONA</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold">Tres pasos. Sin fricciones.</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {pasos.map((p, idx) => (
            <div key={p.titulo} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-500/10 text-rose-500 mb-4">
                <i className={`ph-duotone ${p.icon} text-3xl`} aria-hidden />
              </div>
              <p className="text-xs tracking-wider text-rose-500 mb-2">PASO {idx + 1}</p>
              <h3 className="font-serif text-xl font-semibold mb-2">{p.titulo}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
