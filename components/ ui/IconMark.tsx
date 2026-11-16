type Props = { icon: string; className?: string; label?: string }

export function IconMark({ icon, className = '', label }: Props) {
  return (
    <span
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={!label}
      className={className}
    >
      <i className={`ph-duotone ${icon}`} />
    </span>
  )
}
