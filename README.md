# Promodelo

Plataforma que conecta impulsadoras y empresas en Ecuador.

## Stack
- Next.js 15 (App Router + RSC)
- React 19
- TypeScript
- Tailwind CSS
- Firebase (Auth + Storage + Firestore)

## Desarrollo local

\`\`\`bash
npm install
npm run dev
\`\`\`

Abre http://localhost:3000

## Variables de entorno

Crea un archivo `.env.local`:

\`\`\`
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
\`\`\`

## Deploy

Push a `main` en GitHub. Vercel desplegará automáticamente.

## Estructura

- `app/` — rutas (App Router)
- `components/` — componentes React (servidor y cliente)
- `lib/data/` — capa de datos (mock por ahora, luego Firestore)
- `lib/utils/` — utilidades compartidas
\`\`\`
