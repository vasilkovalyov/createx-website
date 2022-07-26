import { gql } from 'graphql-request'

export const FRAGMENT_PROJECT = gql`
  fragment GetProject on Project {
    Title
    Slug
    SlugText
    page {
      data {
        attributes {
          Slug
        }
      }
    }
    PreviewImage {
      data {
        attributes {
          url
        }
      }
    }
    ImageAlt
    Text
    project_category {
      data {
        attributes {
          Name
        }
      }
    }
  }
`

export const FRAGMENT_POST = gql`
  fragment GetPost on Post {
    Title
    Slug
    Image {
      data {
        attributes {
          url
        }
      }
    }
    ImageAlt
    Date
    Text
    page {
      data {
        attributes {
          Slug
        }
      }
    }
    post_categories {
      data {
        id
        attributes {
          Title
          Name
        }
      }
    }
  }
`

export const FRAGMENT_HEADER = gql`
  fragment GetHeader on BlockHeader {
    BlockType
    Image {
      data {
        attributes {
          url
        }
      }
    }
    ImageAlt
    Menu {
      pages {
        data {
          id
          attributes {
            Slug
            Name
          }
        }
      }
    }
    Phone
    PhoneText
    PhoneIcon
    Email
    EmailText
    EmailIcon
  }
`

export const FRAGMENT_FOOTER = gql`
  fragment GetFooter on BlockFooter {
    BlockType
    Image {
      data {
        attributes {
          url
        }
      }
    }
    ImageAlt
    Text
    Menu {
      id
      Name
      pages {
        data {
          id
          attributes {
            Slug
            Name
          }
        }
      }
    }
    SocialList {
      Items {
        id
        Url
        Target
        Icon
      }
    }
    ContactInformation {
      Title
      Address
      Phone
      Email
    }
    SubscribeForm
  }
`

export const FRAGMENT_FORM_DETAIL = gql`
  fragment GetFormDetail on BlockFormDetail {
    BlockType
    Image {
      data {
        attributes {
          url
        }
      }
    }
    ImageAlt
  }
`
