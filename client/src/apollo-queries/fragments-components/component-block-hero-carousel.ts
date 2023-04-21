import { gql } from '@apollo/client'

export const FragmentComponentBlockHeroCarousel = gql`
  fragment FragmentComponentBlockHeroCarousel on ComponentBlockHeroCarouselBlockHeroCarousel {
    Heading
    Slug
    Text
    Items {
      id
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
