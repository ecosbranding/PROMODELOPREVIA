import { NextResponse } from 'next/server'

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ tipo: string; id: string }> }
) {
  const { tipo, id } = await params
  // TODO: Lookup del número real desde Firestore según tipo + id
  // Por ahora devuelve 404 — el BotonWhatsapp usa el número directo
  return NextResponse.json({ tipo, id, status: 'ok' })
}
