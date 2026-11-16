import type { Metadata } from 'next'
import { inter, playfair, greatVibes } from '@/lib/utils/fonts'
import { AuthProvider } from '@/components/providers/AuthProvider'
import { Analitica } from '@/components/providers/Analitica'
import { JsonLd } from '@/components/seo/JsonLd'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.promodelo.com'),
  title: 'Promodelo — Impulsadoras y modelos para tu evento en Ecuador',
  description: 'Conecta con impulsadoras y modelos verificadas para activaciones, ferias y lanzamientos en Ecuador. Contacto directo por WhatsApp, sin intermediarios.',
  openGraph: {
    type: 'website',
    url: 'https://www.promodelo.com',
    title: 'Promodelo — Impulsadoras y modelos para tu evento',
    description: 'Conecta con impulsadoras verificadas en Ecuador. Contacto directo por WhatsApp.',
    images: [{ url: '/og-promodelo.png', width: 1200, height: 630 }],
    siteName: 'Promodelo',
    locale: 'es_EC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promodelo — Impulsadoras y modelos para tu evento',
    description: 'Conecta con impulsadoras verificadas en Ecuador.',
    images: ['/og-promodelo.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.promodelo.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <body>
        <a href="#main" className="skip-link">Saltar al contenido</a>
        <JsonLd />
        <AuthProvider>
          {children}
          <Analitica />
        </AuthProvider>
      </body>
    </html>
  )
}
