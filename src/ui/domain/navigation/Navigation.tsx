'use client'

import React from 'react'
import BdsLinker from '@/ui/bds/components/linker'
import { usePathname } from 'next/navigation'
import InternalLinker from '@/utils/InternalLinker'

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
      <li>{renderLink(InternalLinker.getPathname('home', null), 'Home')}</li>
      <li>{renderLink(InternalLinker.getPathname('exampleV1', null), 'Example V1')}</li>
      <li>{renderLink(InternalLinker.getPathname('exampleV2', null), 'Example V2')}</li>
      <li>{renderLink(InternalLinker.getPathname('movies', null), 'view all movies')}</li>
    </ul>
  )
}

export default Navigation
