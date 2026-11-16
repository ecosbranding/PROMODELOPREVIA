export type Impulsadora = {
  id: string
  slug: string
  nombre: string
  foto: string
  ciudad: string
  eventos: number
  tarifa: { valor: number | null; negociable: boolean }
  esFundadora: boolean
  verificada: boolean
}

// Datos reales extraídos del HTML original
export const impulsadorasDestacadas: Impulsadora[] = [
  {
    id: 'angelys',
    slug: 'angelys-t',
    nombre: 'Angelys T.',
    foto: 'https://firebasestorage.googleapis.com/v0/b/promodelo-54874.firebasestorage.app/o/impulsadoras%2Fangelys%2Ff0.jpg?alt=media',
    ciudad: 'Quito',
    eventos: 1,
    tarifa: { valor: 40, negociable: false },
    esFundadora: true,
    verificada: true,
  },
  {
    id: 'annette',
    slug: 'annette-c',
    nombre: 'Annette C.',
    foto: 'https://firebasestorage.googleapis.com/v0/b/promodelo-54874.firebasestorage.app/o/impulsadoras%2Fannette%2Ff0.jpg?alt=media',
    ciudad: 'Quito',
    eventos: 3,
    tarifa: { valor: 30, negociable: false },
    esFundadora: true,
    verificada: true,
  },
  {
    id: 'camila',
    slug: 'camila-m',
    nombre: 'Camila M.',
    foto: 'https://firebasestorage.googleapis.com/v0/b/promodelo-54874.firebasestorage.app/o/impulsadoras%2Fcamila%2Ff0.jpg?alt=media',
    ciudad: 'Quito',
    eventos: 1,
    tarifa: { valor: 30, negociable: false },
    esFundadora: true,
    verificada: true,
  },
  {
    id: 'anyela',
    slug: 'anyela-t',
    nombre: 'Anyela T.',
    foto: 'https://firebasestorage.googleapis.com/v0/b/promodelo-54874.firebasestorage.app/o/impulsadoras%2Fanyela%2Ff0.jpg?alt=media',
    ciudad: 'Quito',
    eventos: 12,
    tarifa: { valor: 40, negociable: false },
    esFundadora: true,
    verificada: true,
  },
  {
    id: 'astrid',
    slug: 'astrid-y',
    nombre: 'Astrid Y.',
    foto: 'https://firebasestorage.googleapis.com/v0/b/promodelo-54874.firebasestorage.app/o/impulsadoras%2Fastrid%2Ff0.jpg?alt=media',
    ciudad: 'Quito',
    eventos: 0,
    tarifa: { valor: 50, negociable: false },
    esFundadora: true,
    verificada: true,
  },
  {
    id: 'melannie',
    slug: 'melannie-j',
    nombre: 'Melannie J.',
    foto: 'https://firebasestorage.googleapis.com/v0/b/promodelo-54874.firebasestorage.app/o/impulsadoras%2Fmelannie%2Ff0.jpg?alt=media',
    ciudad: 'Quito',
    eventos: 10,
    tarifa: { valor: 90, negociable: false },
    esFundadora: true,
    verificada: true,
  },
  {
    id: 'victoria',
    slug: 'victoria-c',
    nombre: 'Victoria C.',
    foto: 'https://firebasestorage.googleapis.com/v0/b/promodelo-54874.firebasestorage.app/o/impulsadoras%2Fvictoria%2Ff0.jpg?alt=media',
    ciudad: 'Quito',
    eventos: 9,
    tarifa: { valor: 60, negociable: false },
    esFundadora: true,
    verificada: true,
  },
  {
    id: 'jenipher',
    slug: 'jenipher-n',
    nombre: 'Jenipher N.',
    foto: 'https://firebasestorage.googleapis.com/v0/b/promodelo-54874.firebasestorage.app/o/impulsadoras%2Fjenipher%2Ff0.jpg?alt=media',
    ciudad: 'Quito',
    eventos: 1,
    tarifa: { valor: 35, negociable: false },
    esFundadora: true,
    verificada: true,
  },
  {
    id: 'erika',
    slug: 'erika-m',
    nombre: 'Erika M.',
    foto: 'https://firebasestorage.googleapis.com/v0/b/promodelo-54874.firebasestorage.app/o/impulsadoras%2Ferika%2Ff0.jpg?alt=media',
    ciudad: 'Quito',
    eventos: 12,
    tarifa: { valor: 50, negociable: false },
    esFundadora: true,
    verificada: false,
  },
  {
    id: 'GieBut7cydfM0KyEz4JmNmN9IXg1',
    slug: 'carolina-m',
    nombre: 'Carolina M.',
    foto: 'https://firebasestorage.googleapis.com/v0/b/promodelo-54874.firebasestorage.app/o/impulsadoras%2FGieBut7cydfM0KyEz4JmNmN9IXg1%2Ff0-1793024405518.jpg?alt=media&token=42861dae-07d4-415f-9672-f42a9b6ad28f',
    ciudad: 'Quito',
    eventos: 8,
    tarifa: { valor: null, negociable: true },
    esFundadora: true,
    verificada: true,
  },
  {
    id: 'JP29TiuuRgZJsytjVXRqyNC5h3f1',
    slug: 'krisbet-m',
    nombre: 'Krisbet M.',
    foto: 'https://firebasestorage.googleapis.com/v0/b/promodelo-54874.firebasestorage.app/o/impulsadoras%2FJP29TiuuRgZJsytjVXRqyNC5h3f1%2Ff0-1793916727705.jpg?alt=media&token=ddd1436a-f3ce-4523-b901-a17b11e55a9f',
    ciudad: 'Quito',
    eventos: 4,
    tarifa: { valor: 25, negociable: true },
    esFundadora: true,
    verificada: false,
  },
  {
    id: 'S5Oofzh6ASgyg3eTsc9PqirkEhp2',
    slug: 'karla-a',
    nombre: 'Karla A.',
    foto: 'https://firebasestorage.googleapis.com/v0/b/promodelo-54874.firebasestorage.app/o/impulsadoras%2FS5Oofzh6ASgyg3eTsc9PqirkEhp2%2Ff0-1794416438316.jpg?alt=media&token=add17dd9-11c8-465a-8f2f-84ec7ba39d23',
    ciudad: 'Quito',
    eventos: 2,
    tarifa: { valor: 20, negociable: true },
    esFundadora: true,
    verificada: false,
  },
]

export async function getImpulsadorasDestacadas(): Promise<Impulsadora[]> {
  // TODO: Reemplazar con fetch a Firestore
  return impulsadorasDestacadas
}
