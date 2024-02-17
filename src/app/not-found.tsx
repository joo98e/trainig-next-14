import React from 'react'
import BdsTypography from '@/ui/bds/components/typography/index'

interface Props {}

const NotFound = ({}: Props) => {
  return (
    <div>
      <BdsTypography variant={'heading1'} color={'#bd1818'}>
        Not Found
      </BdsTypography>
    </div>
  )
}

export default NotFound
