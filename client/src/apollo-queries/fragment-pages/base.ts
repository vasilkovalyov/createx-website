import { gql } from '@apollo/client'
import { GetHeader } from '../header'
import { FragmentComponentSeo, FragmentComponentBlockHeroCarousel } from '../fragments-components'

export const GetBasePage = gql`
  ${GetHeader}
  ${FragmentComponentSeo}
  ${FragmentComponentBlockHeroCarousel}
  query ($page: String) {
    header {
      data {
        attributes {
          ...GetHeader
        }
      }
    }
    pages(filters: { Slug: { contains: $page } }) {
      data {
        attributes {
          Heading
          Slug
          Seo {
            ...FragmentComponentSeo
          }
          Body {
            ...FragmentComponentBlockHeroCarousel
          }
        }
      }
    }
  }
`
