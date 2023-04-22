export interface LayoutProps {
  children: React.ReactNode
  className?: string
  head?: ISeo | null
}

export interface ISeo {
  title: string
  description: string
  keywords: string
}
