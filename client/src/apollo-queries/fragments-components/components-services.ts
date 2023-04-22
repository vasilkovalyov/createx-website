import { gql } from '@apollo/client'

export const FragmentComponentServices = gql`
  fragment FragmentComponentServices on PageService {
    Slug
    Text
    Heading
    Image {
      Media {
        data {
          attributes {
            url
            width
            height
            formats
          }
        }
      }
      Alt
    }
    page {
      data {
        attributes {
          Slug
        }
      }
    }
  }
`
