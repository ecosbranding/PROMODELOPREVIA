import Link from 'next/link'
import { BotonWhatsapp } from '@/components/ui/BotonWhatsapp'
import type { Evento } from '@/lib/data/eventos'

export function CardEvento({ evento }: { evento: Evento }) {
  const { id, tipo, titulo, lugar, ciudad, tarifaTexto, fechaTexto, descripcion, whatsapp } = evento

  const badgeStyles = tipo === 'urgente'
    ? 'bg-accent-urgente text-accent-urgenteText'
    : 'bg-rose-100 text-rose-700'

  return (
    <article className="bg-white border border-ink-200 shadow-card p-5 flex flex-col gap-2.5">
      <span className={`self-start inline-flex items-center gap-1 ${badgeStyles} text-[10.5px] tracking-[0.15em] font-semibold px-2.5 py-1`}>
        <i className="ph-fill ph-star text-[1.2em]" aria-hidden />
        {tipo === 'urgente' ? 'URGENTE' : 'DESTACADO'}
      </span>

      <div>
        <Link href={`/eventos/${id}`} className="link-titulo">{titulo}</Link>
        <p className="text-[13px] text-ink-400 mt-1">{lugar}</p>
      </div>

      <div className="text-[13px] text-ink-500 flex flex-col gap-1.5">
        <span className="flex items-center gap-1.5">
          <i className="ph-duotone ph-map-pin" aria-hidden />{ciudad}
        </span>
        <span className="flex items-center gap-1.5">
          <i className="ph-duotone ph-money" aria-hidden />{tarifaTexto}
        </span>
        <span className="flex items-center gap-1.5">
          <i className="ph-duotone ph-calendar" aria-hidden />{fechaTexto}
        </span>
      </div>

      <p className="text-[13px] leading-relaxed text-ink-500 m-0 line-clamp-3">{descripcion}</p>

      <div className="mt-auto pt-2 flex gap-2 flex-wrap justify-end">
        <Link href={`/eventos/${id}`} className="btn-ghost">VER EVENTO</Link>
        <BotonWhatsapp
          numero={whatsapp}
          tipo="evento"
          id={id}
          titulo={titulo}
          ariaLabel={`Contactar para ${titulo}`}
        />
      </div>
    </article>
  )
}
