import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import { Atkinson_Hyperlegible } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const atkinsonHyperlegible = Atkinson_Hyperlegible({
	subsets: ["latin"],
	weight: ["400", "700"]
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${atkinsonHyperlegible.style.fontFamily};
				}

				header {
					font-family: ${inter.style.fontFamily};
				}

				.font-display {
					font-family: ${inter.style.fontFamily};
				}
			`}</style>

			<Component {...pageProps} />
		</>
	)
}
