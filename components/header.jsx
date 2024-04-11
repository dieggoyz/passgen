import Link from 'next/link'

export default function Header () {
  return (
    <header className='w-full bg-black/90 text-white text-center border-b border-white/10 py-4'>
      <h1 className="text-lg font-semibold tracking-tight">
        <Link href="/">Password Generator</Link>
      </h1>
    </header>
  )
}
