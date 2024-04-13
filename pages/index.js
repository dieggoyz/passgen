import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Header, Generator, Footer } from '@/components'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export default function Home () {
  return (
    <>
      <Head>
        <meta name="description" content="Generate secure passwords with a click of a button." />
        <title>Password Generator — dieggoyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`flex flex-col h-screen items-center justify-between gap-4 text-md ${inter.variable} font-sans`}>
        <Header />
        <Generator />
        <Footer />
      </main>
    </>
  )
}
