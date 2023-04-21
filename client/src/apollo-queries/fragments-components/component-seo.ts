import { gql } from '@apollo/client'

export const FragmentComponentSeo = gql`
  fragment FragmentComponentSeo on ComponentSeoSeo {
    Title
    Description
    Keywords
  }
`
