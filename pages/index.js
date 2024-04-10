import { Inter } from 'next/font/google'
import { Header, Generator, Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between gap-4 ${inter.className} p-4`}>
      <Header />
      <Generator />
      <Footer />
    </main>
  )
}
