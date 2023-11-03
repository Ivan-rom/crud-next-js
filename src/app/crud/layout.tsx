import type { Metadata } from 'next'
import './style.scss'
import Head from 'next/head'
import type { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'CRUD | Table',
}

export default function CrudLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="./styles.css" />
      </Head>
      {children}
    </>
  )
}
