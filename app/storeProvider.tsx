'use client'
import { useRef, useState } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'

export default function StoreProvider({
  
  children,
}: {
  children: React.ReactNode
}) {
  const [store] = useState(() => makeStore())

  const ref = useRef<AppStore | null>(null)
  if (ref.current === null) {
    ref.current = store
  }

  return <Provider store={store}>{children}</Provider>
}

