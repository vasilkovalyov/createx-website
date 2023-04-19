export interface INavigation {
  items: INavigationLink[] | []
  className?: string
}

export interface INavigationLink {
  id: string
  href: string
  text: string
}
