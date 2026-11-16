import { getEventosActivos } from '@/lib/data/eventos'
import { CardEvento } from '@/components/cards/CardEvento'

export async function EventosDisponibles() {
  const eventos = await getEventosActivos()
  const destacados = eventos.filter(e => e.tipo === 'destacado' || e.tipo === 'urgente').slice(0, 3)
  if (destacados.length === 0) return null

  return (
    <section className="px-5 lg:px-10 py-14 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-xs tracking-[0.25em] text-rose-700 font-semibold mb-2">EVENTOS DISPONIBLES</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold">Próximos eventos con cupo</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destacados.map(e => <CardEvento key={e.id} evento={e} />)}
        </div>
      </div>
    </section>
  )
}
