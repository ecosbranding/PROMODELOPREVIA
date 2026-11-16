export type Aviso = {
  id: string
  tipo: 'urgente' | 'puntual'
  empresa: string
  titulo: string
  descripcion: string
  ciudad: string
  tarifaTexto: string
  fechaTexto: string
  vacantes: number
  whatsapp: string
  fechaFin: Date
}

export const avisos: Aviso[] = [
  {
    id: 'm7ACn7gzSp4tVbv2PuwK',
    tipo: 'puntual',
    empresa: 'Los Fishes',
    titulo: 'Promotora para restaurante en La Floresta, jueves a sábado.',
    descripcion: 'Los Fishes, restaurante de mariscos en La Floresta, busca una promotora para atraer clientes y recomendar sus productos: entrega de volantes y atención a las personas en la zona del local.',
    ciudad: 'Quito',
    tarifaTexto: 'A convenir',
    fechaTexto: '30 oct – 30 nov · 17:00 – 21:00',
    vacantes: 1,
    whatsapp: '0962301707',
    fechaFin: new Date('2025-11-30'),
  },
  {
    id: 'rcWueDuyMRxBtJulG4gR',
    tipo: 'puntual',
    empresa: 'Eficacia',
    titulo: 'Impulsadora en Tumbaco y el Valle, 4 días',
    descripcion: 'Se busca una impulsadora para labores de impulso en Tumbaco y el Valle. Fechas: 31 de octubre, 1 de noviembre, 14 y 15 de noviembre. Horario: de 10:00 a 19:00, con una hora de almuerzo. Pago: 18 USD por día, más 2 USD diarios de movilización. Se paga bajo factura.',
    ciudad: 'Quito',
    tarifaTexto: '18 USD por día + 2 USD de movilización',
    fechaTexto: '31 oct – 15 nov · 10:00 – 19:00',
    vacantes: 1,
    whatsapp: '0980443723',
    fechaFin: new Date('2025-11-15'),
  },
]

export async function getAvisosActivos(): Promise<Aviso[]> {
  const hoy = new Date()
  return avisos.filter(a => a.fechaFin >= hoy)
}
