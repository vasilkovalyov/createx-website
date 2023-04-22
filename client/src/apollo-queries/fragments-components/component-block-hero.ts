import { gql } from '@apollo/client'

export const FragmentComponentBlockHero = gql`
  fragment FragmentComponentBlockHero on ComponentBlockHeroBlockHero {
    Slug
    Heading
    Text
    Image {
      Media {
        data {
          attributes {
            url
            formats
          }
        }
      }
      Alt
    }
  }
`
