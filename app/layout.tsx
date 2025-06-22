import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Home | Vedant Kasargod',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo_nobg.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
