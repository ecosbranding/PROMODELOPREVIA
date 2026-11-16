import Image from 'next/image'
import Link from 'next/link'
import { Tarifa } from '@/components/ui/Tarifa'
import type { Impulsadora } from '@/lib/data/impulsadoras'

type Props = {
  impulsadora: Impulsadora
  priority?: boolean
}

export function CardImpulsadora({ impulsadora, priority = false }: Props) {
  const { slug, nombre, foto, ciudad, eventos, tarifa, esFundadora } = impulsadora

  return (
    <article className="bg-white shadow-card overflow-hidden group">
      <div className="relative aspect-portrait">
        <Link
          href={`/i/${slug}`}
          tabIndex={-1}
          aria-hidden="true"
          className="absolute inset-0 block"
        >
          <Image
            src={foto}
            alt={`Foto de ${nombre}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={priority}
            className="object-cover object-[center_25%] group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {esFundadora && (
          <span className="absolute top-3.5 left-3.5 bg-rose-500 text-white text-[11px] tracking-[0.15em] font-medium px-3 py-1 pointer-events-none">
            FUNDADORA
          </span>
        )}
      </div>

      <div className="px-5 pt-4 pb-5">
        <h3 className="font-serif text-[19px] font-semibold text-ink-900">{nombre}</h3>

        <p className="text-[13px] text-ink-400 mt-1 mb-3 flex items-center gap-1.5">
          <i className="ph-duotone ph-map-pin" aria-hidden />
          {ciudad} · {eventos} {eventos === 1 ? 'evento' : 'eventos'}
        </p>

        <div className="flex justify-between items-center gap-2.5">
          <Tarifa valor={tarifa.valor} negociable={tarifa.negociable} />
          <Link
            href={`/i/${slug}`}
            aria-label={`Ver perfil de ${nombre}`}
            className="btn-ghost whitespace-nowrap"
          >
            VER PERFIL
          </Link>
        </div>
      </div>
    </article>
  )
}
