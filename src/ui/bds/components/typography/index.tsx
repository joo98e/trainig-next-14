import React from 'react'
import { BdsTypographyVariantArray } from './index.d'

type BdsTypographyVariant = (typeof BdsTypographyVariantArray)[number]

interface Props {
  variant: BdsTypographyVariant
  children: ReactNode
  color?: Color
}

const BdsTypography = ({ variant, color, children }: Props) => {
  function render(): ReactNode {
    switch (variant) {
      case 'heading1':
        return <h1>{children}</h1>
      case 'heading2':
        return <h2>{children}</h2>
      case 'heading3':
        return <h3>{children}</h3>
      case 'heading4':
        return <h4>{children}</h4>
      case 'body1':
        return <p>{children}</p>
      default:
        return <span>{children}</span>
    }
  }

  return render()
}

export default BdsTypography
