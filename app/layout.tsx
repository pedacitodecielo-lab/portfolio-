import type { Metadata } from 'next'
import './globals.css'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Meelo.',
  description: 'Portfolio of Emelio Exaudi, a Data Analyst and Data Engineer based in Bogor, Jawa Barat.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-white text-slate-900 antialiased"
        style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
      >
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
