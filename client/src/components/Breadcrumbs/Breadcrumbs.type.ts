export interface IBreadcrumbs {
  items: IBreadcrumbItem[]
  className?: string
}

export interface IBreadcrumbItem {
  id: string
  text: string
  href?: string
}
