import Layout from '@/theme/components/Layout';
import '@/theme/style/index.sass'
import { Source_Sans_3 } from "next/font/google";


export const metadata = {
  title: {
    template: '%s | Northware Cockpit',
    default: 'Northware Cockpit', // a default is required when creating a template
  },
}

const source_sans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sourcesans'
})

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${source_sans.variable}`}>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
