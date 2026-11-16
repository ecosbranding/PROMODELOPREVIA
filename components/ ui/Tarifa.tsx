type Props = { valor: number | null; negociable: boolean }

export function Tarifa({ valor, negociable }: Props) {
  if (valor === null) {
    return <span className="text-sm font-semibold">Tarifa negociable</span>
  }

  return (
    <div className="text-sm font-semibold">
      ${valor} USD
      <span className="font-normal text-ink-400 text-xs"> / día</span>
      {negociable && (
        <div className="text-[11px] tracking-wider text-rose-700 font-medium mt-0.5">
          NEGOCIABLE
        </div>
      )}
    </div>
  )
}
