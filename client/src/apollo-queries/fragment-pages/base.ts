import { gql } from '@apollo/client'
import { GetHeader } from '../header'
import { FragmentComponentSeo } from '../fragments-components/component-seo'

export const GetBasePage = gql`
  ${GetHeader}
  ${FragmentComponentSeo}
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
        }
      }
    }
  }
`
