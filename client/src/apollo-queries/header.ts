import { gql } from '@apollo/client'

export const GetHeader = gql`
  fragment GetHeader on Header {
    Slug
    Logo {
      Media {
        data {
          attributes {
            url
            width
            height
          }
        }
      }
      Alt
    }
    pages {
      data {
        id
        attributes {
          Heading
          Slug
        }
      }
    }
  }
`
