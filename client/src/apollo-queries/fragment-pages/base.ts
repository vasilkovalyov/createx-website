import { gql } from '@apollo/client'
import { GetHeader } from '../header'
import {
  FragmentComponentSeo,
  FragmentComponentBlockHeroCarousel,
  FragmentComponentBlockHero,
  FragmentComponentServices,
} from '../fragments-components'

export const GetBasePage = gql`
  ${GetHeader}
  ${FragmentComponentSeo}
  ${FragmentComponentBlockHeroCarousel}
  ${FragmentComponentBlockHero}
  ${FragmentComponentServices}
  query ($page: String) {
    header {
      data {
        attributes {
          ...GetHeader
        }
      }
    }
    pageServices {
      data {
        id
        attributes {
          ...FragmentComponentServices
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
            ...FragmentComponentBlockHero
          }
        }
      }
    }
  }
`
