'use client'

import React from 'react'
import BdsLinker from '@/ui/bds/components/linker'
import { usePathname } from 'next/navigation'

interface Props {}

const Navigation = ({}: Props) => {
  const currentPathname = usePathname()

  function renderLink(pathname: string, text: string) {
    return (
      <BdsLinker href={pathname}>
        {text} {pathname === currentPathname ? '🔥' : ''}
      </BdsLinker>
    )
  }

  return (
    <ul>
      <li>currentPathname : {currentPathname}</li>
      <li>{renderLink('/', 'Home')}</li>
      <li>{renderLink('/example/v1', 'Example V1')}</li>
      <li>{renderLink('/example/v2', 'Example V2')}</li>
      <li>{renderLink('/example/movies', 'view all movies')}</li>
    </ul>
  )
}

export default Navigation
