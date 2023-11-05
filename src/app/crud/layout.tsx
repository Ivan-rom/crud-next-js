import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'CRUD | Table',
}

export default function CrudLayout({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>
}
