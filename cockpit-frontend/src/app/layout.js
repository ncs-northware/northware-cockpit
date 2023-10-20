import '@/theme/style/index.sass'


export const metadata = {
  title: 'Northware Cockpit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
