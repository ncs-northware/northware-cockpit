import { UserProvider } from '@/theme/lib/AuthContext'
import { cockpit_client } from '@/theme/lib/graphql'
import '@/theme/style/index.sass'
import { ApolloProvider } from '@apollo/client'
import { Source_Sans_3 } from "next/font/google"

const source_sans = Source_Sans_3({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sourcesans'
})

export default function App({ Component, pageProps }) {
    return (
        <ApolloProvider client={cockpit_client}>
            <UserProvider>
                <main className={`${source_sans.variable} font-sans`}>
                        <Component {...pageProps} />
                </main>
            </UserProvider>
        </ApolloProvider>
    )
}