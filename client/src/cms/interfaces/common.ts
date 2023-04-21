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
        width: string
        height: string
        formats?: any | null
      }
    }
  }
  Alt: string
}
