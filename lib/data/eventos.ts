export type Evento = {
  id: string
  tipo: 'urgente' | 'destacado'
  titulo: string
  lugar: string
  ciudad: string
  tarifaTexto: string
  fechaTexto: string
  descripcion: string
  whatsapp: string
  fechaFin: Date
}

export const eventos: Evento[] = [
  {
    id: 'feria-ferretera',
    tipo: 'urgente',
    titulo: 'Feria ferretera en Club La Campiña',
    lugar: 'Club La Campiña',
    ciudad: 'Quito',
    tarifaTexto: '$30 – $50 USD',
    fechaTexto: '13 – 14 nov',
    descripcion: 'Se buscan impulsadoras para feria ferretera en Club La Campiña los días 13 y 14 de noviembre.',
    whatsapp: '0999999999',
    fechaFin: new Date('2025-11-14'),
  },
  {
    id: 'petvetfy',
    tipo: 'destacado',
    titulo: 'Lanzamiento app PetVetFy',
    lugar: 'PetVetFy',
    ciudad: 'Quito',
    tarifaTexto: '$50 USD',
    fechaTexto: '28 nov',
    descripcion: 'Evento de lanzamiento de la aplicación PetVetFy. Se requieren impulsadoras para presentación de producto.',
    whatsapp: '0999999999',
    fechaFin: new Date('2025-11-28'),
  },
]

export async function getEventosActivos(): Promise<Evento[]> {
  const hoy = new Date()
  return eventos.filter(e => e.fechaFin >= hoy)
}
