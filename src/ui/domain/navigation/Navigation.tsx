import React from 'react'
import BdsLinker from '@/ui/bds/components/linker'

interface Props {}

const Navigation = ({}: Props) => {
  return (
    <ul>
      <li>
        <BdsLinker href={'/'}>Home</BdsLinker>
      </li>
      <li>
        <BdsLinker href={'/example/v1'}>Example V1</BdsLinker>
      </li>
      <li>
        <BdsLinker href={'/example/v2'}>Example V2</BdsLinker>
      </li>
    </ul>
  )
}

export default Navigation
