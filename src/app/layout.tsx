import React, { ReactNode } from 'react'
import Navigation from '@/ui/domain/navigation/Navigation'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang={'ko'}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
