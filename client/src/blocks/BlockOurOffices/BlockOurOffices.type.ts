export interface IBlockOurOffices {
  heading?: string
  text?: string
  className?: string
  items: IOffice[] | []
}

export interface IOffice {
  id: string
  heading: string
  address: string
  phone?: string
  email?: string
  schedule?: string
}
