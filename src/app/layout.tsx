import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Faizan - Senior Software Engineer | Full-Stack Developer',
  description: 'Experienced senior software engineer specializing in full-stack development, React, Node.js, and modern web technologies. Available for freelance projects and consulting.',
  keywords: 'software engineer, full-stack developer, React, Node.js, TypeScript, freelance, consulting',
  authors: [{ name: 'Faizan' }],
  openGraph: {
    title: 'Faizan - Senior Software Engineer',
    description: 'Experienced senior software engineer specializing in full-stack development',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          {children}
        </div>
      </body>
    </html>
  )
}
