export interface ICategoryFilters {
  items: ICategoryFilter[] | []
  className?: string
  onHandleSelect: (id: string, value: string) => void
}

export interface ICategoryFilter {
  id: string
  value: string
  text: string
}
