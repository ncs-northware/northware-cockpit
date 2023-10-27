import '@/theme/style/index.sass'
import { Source_Sans_3 } from "next/font/google"

const source_sans = Source_Sans_3({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sourcesans'
})

export default function App({ Component, pageProps }) {
    return (
    <>
        <main className={`${source_sans.variable} font-sans`}>
                <Component {...pageProps} />
        </main>
    </>
    )
}