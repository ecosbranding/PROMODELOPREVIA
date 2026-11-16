'use client'

type Props = {
  numero: string
  tipo: 'aviso' | 'evento' | 'impulsadora'
  id: string
  titulo: string
  ariaLabel: string
}

export function BotonWhatsapp({ numero, tipo, id, titulo, ariaLabel }: Props) {
  const handleClick = () => {
    // Analytics: trackea el click antes de abrir WhatsApp
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'whatsapp_click', { tipo, id, titulo })
    }

    const mensaje = encodeURIComponent(
      `Hola, les escribo desde Promodelo por: "${titulo}"`
    )
    const numeroInternacional = numero.startsWith('0') 
      ? '593' + numero.substring(1) 
      : numero
    
    window.open(`https://wa.me/${numeroInternacional}?text=${mensaje}`, '_blank', 'noopener')
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      className="btn-ghost"
    >
      <i className="ph-fill ph-whatsapp-logo text-base text-[#25d366]" aria-hidden />
      CONTACTAR
    </button>
  )
}
