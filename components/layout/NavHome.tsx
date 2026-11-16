'use client'

import Link from 'next/link'
import { useState } from 'react'

export function NavHome() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-ink-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-ink-900">
          Promodelo
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/impulsadoras" className="hover:text-rose-700 transition-colors">Impulsadoras</Link>
          <Link href="/eventos" className="hover:text-rose-700 transition-colors">Eventos</Link>
          <Link href="/registro" className="hover:text-rose-700 transition-colors">Soy impulsadora</Link>
          <Link href="/registro-empresa" className="btn-dark !py-2.5 !px-5 text-xs">EMPRESA</Link>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="md:hidden p-2"
        >
          <i className={`ph-duotone ${open ? 'ph-x' : 'ph-list'} text-2xl`} aria-hidden />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-200 bg-white px-5 py-4 flex flex-col gap-3">
          <Link href="/impulsadoras" onClick={() => setOpen(false)}>Impulsadoras</Link>
          <Link href="/eventos" onClick={() => setOpen(false)}>Eventos</Link>
          <Link href="/registro" onClick={() => setOpen(false)}>Soy impulsadora</Link>
          <Link href="/registro-empresa" className="btn-dark text-center" onClick={() => setOpen(false)}>REGISTRAR EMPRESA</Link>
        </div>
      )}
    </nav>
  )
}
