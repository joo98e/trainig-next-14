import React from 'react'
import BdsTypography from '@/ui/bds/components/typography/index'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Example v1',
}

interface Props {}

const Page = ({}: Props) => {
  return (
    <div>
      <BdsTypography variant={'heading2'}>is Example V1 Page.</BdsTypography>
    </div>
  )
}

export default Page
