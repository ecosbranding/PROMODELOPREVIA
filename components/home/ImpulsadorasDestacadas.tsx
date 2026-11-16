import Link from 'next/link'
import { getImpulsadorasDestacadas } from '@/lib/data/impulsadoras'
import { CardImpulsadora } from '@/components/cards/CardImpulsadora'

export async function ImpulsadorasDestacadas() {
  const impulsadoras = await getImpulsadorasDestacadas()

  return (
    <section className="px-5 lg:px-10 py-16 bg-rose-50/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
          <div>
            <p className="text-xs tracking-[0.25em] text-rose-700 font-semibold mb-2">IMPULSADORAS DESTACADAS</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold">Talento verificado en Ecuador</h2>
          </div>
          <Link href="/impulsadoras" className="btn-ghost">VER TODAS →</Link>
        </div>

        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {impulsadoras.map((i, idx) => (
            <CardImpulsadora key={i.id} impulsadora={i} priority={idx < 4} />
          ))}
        </div>
      </div>
    </section>
  )
}
