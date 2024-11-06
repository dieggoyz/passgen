import Head from "next/head"
import { Inter } from "next/font/google"
import { Header, Generator, Signature } from "@/components"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export default function Home() {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="Generate secure passwords with a click of a button."
				/>
				<title>Password Generator — @dieggoyz</title>
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>
			<main
				className={`text-md flex h-screen flex-col items-center justify-between gap-4 ${inter.variable} font-sans`}
			>
				<Header />
				<Generator />
				<Signature />
			</main>
		</>
	)
}
