import { getAvisosActivos } from '@/lib/data/avisos'
import { CardAviso } from '@/components/cards/CardAviso'

export async function AvisosUrgentes() {
  const avisos = await getAvisosActivos()
  if (avisos.length === 0) return null

  return (
    <section className="px-5 lg:px-10 py-14 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
          <div>
            <p className="text-xs tracking-[0.25em] text-rose-700 font-semibold mb-2">AVISOS URGENTES</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold">Oportunidades esta semana</h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {avisos.map(aviso => <CardAviso key={aviso.id} aviso={aviso} />)}
        </div>
      </div>
    </section>
  )
}
