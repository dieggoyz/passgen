import Link from 'next/link'

export default function Header () {
  return (
    <header>
      <h1 className="text-lg font-semibold">
        <Link href="/">Password Generator</Link>
      </h1>
    </header>
  )
}
