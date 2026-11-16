import Link from 'next/link'
import { BotonWhatsapp } from '@/components/ui/BotonWhatsapp'
import type { Aviso } from '@/lib/data/avisos'

export function CardAviso({ aviso }: { aviso: Aviso }) {
  const { id, tipo, empresa, titulo, descripcion, ciudad, tarifaTexto, fechaTexto, vacantes, whatsapp } = aviso
  
  const badgeStyles = tipo === 'urgente'
    ? 'bg-accent-urgente text-accent-urgenteText'
    : 'bg-accent-puntual text-accent-puntualText'

  return (
    <article className="bg-white border border-ink-200 shadow-card p-5 flex flex-col gap-2.5">
      <div className="flex flex-wrap gap-1.5">
        <span className={`inline-flex items-center gap-1 ${badgeStyles} text-[10.5px] tracking-[0.15em] font-semibold px-2.5 py-1`}>
          <i className="ph-fill ph-calendar-check text-[1.2em]" aria-hidden />
          {tipo === 'urgente' ? 'URGENTE' : 'EVENTO PUNTUAL'}
        </span>
      </div>

      <div>
        <Link href={`/avisos/${id}`} className="link-titulo">{titulo}</Link>
        <p className="text-[13px] text-ink-400 mt-1">{empresa}</p>
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
        <span className="flex items-center gap-1.5">
          <i className="ph-duotone ph-users-three" aria-hidden />{vacantes} {vacantes === 1 ? 'vacante' : 'vacantes'}
        </span>
      </div>

      <p className="text-[13px] leading-relaxed text-ink-500 m-0 line-clamp-3">
        {descripcion}
      </p>

      <div className="mt-auto pt-2 flex flex-col gap-2">
        <span className="text-[11px] text-ink-400 tracking-wide">Compartido por Promodelo</span>
        <div className="flex gap-2 flex-wrap justify-end">
          <Link href={`/avisos/${id}`} className="btn-ghost">VER AVISO</Link>
          <BotonWhatsapp
            numero={whatsapp}
            tipo="aviso"
            id={id}
            titulo={titulo}
            ariaLabel={`Contactar a ${empresa} por WhatsApp`}
          />
        </div>
      </div>
    </article>
  )
}
