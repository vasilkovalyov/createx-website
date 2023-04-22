import { gql } from '@apollo/client'
import { GetHeader } from '../header'
import { FragmentComponentSeo, FragmentComponentBlockHero } from '../fragments-components'

export const GetServicePage = gql`
  ${GetHeader}
  ${FragmentComponentSeo}
  ${FragmentComponentBlockHero}
  query ($page: String, $subpage: String) {
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
          Slug
          page_services(filters: { Slug: { contains: $subpage } }) {
            data {
              attributes {
                Slug
                Heading
                Seo {
                  ...FragmentComponentSeo
                }
                Body {
                  ...FragmentComponentBlockHero
                }
              }
            }
          }
        }
      }
    }
  }
`
