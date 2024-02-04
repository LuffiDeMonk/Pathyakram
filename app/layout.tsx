import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'



const inter = Poppins({
  weight: ['400', '700', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  icons: '/next.svg',
  title: 'Pathyakrama | Home',
  description: 'Pathyakrama is a modest project that aims to provide a syllabus for all courses in Nepal. The project includes an Admin role responsible for managing the syllabus.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
