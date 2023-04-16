export interface ITypography {
  level?: TypographyVariantType
  className?: string
  children?: React.ReactNode
}

type TypographyVariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
