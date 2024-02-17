import React from 'react'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {}

const BdsLinker = ({ children, ...rest }: Props) => {
  return <Link {...rest}>{children}</Link>
}

export default BdsLinker
