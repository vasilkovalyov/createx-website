export interface ICmsPageSeo {
  Title: string
  Description: string
  Keywords: string
}

export interface ICmsMediaImage {
  Media: {
    data: {
      attributes: {
        url: string
        width: number
        height: number
        formats?: any | null
      }
    } | null
  }
  Alt: string
}
