import '@/theme/style/index.sass'


export const metadata = {
  title: {
    template: '%s | Northware Cockpit',
    default: 'Northware Cockpit', // a default is required when creating a template
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
