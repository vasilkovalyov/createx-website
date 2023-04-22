export interface ICmsPageSeo {
  Title: string
  Description: string
  Keywords: string
}

export interface ICmsMediaImage {
  id: string
  Media: {
    data: {
      attributes: {
        url: string
        width: number
        height: number
        formats?: {
          thumbnail: ICmsMediaImageFormats
          small: ICmsMediaImageFormats
          medium: ICmsMediaImageFormats
          large: ICmsMediaImageFormats
        } | null
      }
    } | null
  }
  Alt: string
}

interface ICmsMediaImageFormats {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
  provider_metadata: {
    public_id: string
    resource_type: string
  }
}
