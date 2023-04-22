import { gql } from '@apollo/client'
import { GetHeader } from '../header'
import {
  FragmentComponentSeo,
  FragmentComponentBlockHeroCarousel,
  FragmentComponentBlockHero,
} from '../fragments-components'

export const GetBasePage = gql`
  ${GetHeader}
  ${FragmentComponentSeo}
  ${FragmentComponentBlockHeroCarousel}
  ${FragmentComponentBlockHero}
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
            ...FragmentComponentBlockHero
          }
        }
      }
    }
  }
`
