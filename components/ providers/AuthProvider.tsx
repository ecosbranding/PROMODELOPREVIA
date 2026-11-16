'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type AuthCtx = {
  user: null | { uid: string; email: string }
  loading: boolean
}

const Ctx = createContext<AuthCtx>({ user: null, loading: false })

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state] = useState<AuthCtx>({ user: null, loading: false })
  return <Ctx.Provider value={state}>{children}</Ctx.Provider>
}

export const useAuth = () => useContext(Ctx)
