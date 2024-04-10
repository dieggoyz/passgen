import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Header, Generator, Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <Head>
        <meta name="description" content="Generate secure passwords with a click of a button." />
        <title>Password Generator — dieggoyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`flex min-h-screen flex-col items-center justify-between gap-4 ${inter.className} p-4`}>
        <Header />
        <Generator />
        <Footer />
      </main>
    </>
  )
}
