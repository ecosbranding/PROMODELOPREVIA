import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white/80 mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <p className="font-serif text-2xl text-white font-bold mb-3">Promodelo</p>
          <p className="text-sm leading-relaxed">
            La plataforma que conecta impulsadoras y empresas en Ecuador.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3 text-sm tracking-wider">PLATAFORMA</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/impulsadoras" className="hover:text-white">Impulsadoras</Link></li>
            <li><Link href="/eventos" className="hover:text-white">Eventos</Link></li>
            <li><Link href="/registro" className="hover:text-white">Soy impulsadora</Link></li>
            <li><Link href="/registro-empresa" className="hover:text-white">Soy empresa</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3 text-sm tracking-wider">LEGAL</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/legal/terminos" className="hover:text-white">Términos</Link></li>
            <li><Link href="/legal/privacidad" className="hover:text-white">Privacidad</Link></li>
            <li><Link href="/legal/datos-personales" className="hover:text-white">Datos personales</Link></li>
            <li><Link href="/legal/prohibiciones" className="hover:text-white">Prohibiciones</Link></li>
            <li><Link href="/legal/copyright" className="hover:text-white">Copyright</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3 text-sm tracking-wider">SÍGUENOS</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://instagram.com/promodelo.ec" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="ph-fill ph-instagram-logo hover:text-rose-500 transition-colors" aria-hidden />
            </a>
            <a href="https://tiktok.com/@promomodeloapp" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <i className="ph-fill ph-tiktok-logo hover:text-rose-500 transition-colors" aria-hidden />
            </a>
            <a href="https://facebook.com/profile.php?id=61594855574992" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="ph-fill ph-facebook-logo hover:text-rose-500 transition-colors" aria-hidden />
            </a>
          </div>
          <Link href="/contacto" className="inline-block mt-4 text-sm hover:text-white">
            Contacto →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} ANDESSHIELD CONSULTING S.A.S. · Todos los derechos reservados.
      </div>
    </footer>
  )
}
