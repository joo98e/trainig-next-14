import React from 'react'
import Navigation from '@/ui/domain/navigation/Navigation'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default Layout
