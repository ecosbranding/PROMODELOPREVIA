import { Inter, Playfair_Display, Great_Vibes } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
})

export const greatVibes = Great_Vibes({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-great-vibes',
  weight: ['400'],
})
