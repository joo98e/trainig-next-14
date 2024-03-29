import React from 'react'

const BdsTypographyVariantArray = ['heading1', 'heading2', 'heading3', 'heading4', 'body1', 'body2', 'body3', 'body4'] as const

type BdsTypographyVariant = (typeof BdsTypographyVariantArray)[number]

interface Props {
  variant: BdsTypographyVariant
  children: ReactNode
  color?: Color
}

const BdsTypography = ({ variant, children }: Props) => {
  function render(children: ReactNode): ReactNode {
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

  return render(children)
}

export default BdsTypography
