import React from 'react'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return <div className={'p-24 box-border'}>{children}</div>
}

export default Layout
