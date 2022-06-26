import { request, gql, GraphQLClient } from 'graphql-request'

import { FRAGMENT_HEADER, FRAGMENT_FOOTER, FRAGMENT_FORM_DETAIL } from './fragments'

export async function getPageSingleService(page: string) {
  const url = 'http://localhost:1337/graphql'
  const graphQLClient = new GraphQLClient(url)

  const query = gql`
    query SingleService($page: String!) {
      blockHeader {
        data {
          attributes {
            ...GetHeader
          }
        }
      }
      blockFooter {
        data {
          id
          attributes {
            ...GetFooter
          }
        }
      }
      blockFormDetail {
        data {
          attributes {
            ...GetFormDetail
          }
        }
      }
      pages: services(filters: { Slug: { contains: $page } }) {
        data {
          id
          attributes {
            ContentType
            Title
            Slug
            Body {
              ... on ComponentBlockHeroBlockHero {
                BlockType
                Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                ImageAlt
                Title
                Text
                Overlay
              }
            }
          }
        }
      }
    }
    ${FRAGMENT_HEADER}
    ${FRAGMENT_FOOTER}
    ${FRAGMENT_FORM_DETAIL}
  `

  const data = await graphQLClient.request(query, {
    page: page,
  })
  return data
}

export async function getPageSingleOurWork(page: string) {
  const url = 'http://localhost:1337/graphql'
  const graphQLClient = new GraphQLClient(url)

  const query = gql`
    query PAGE_DATA($page: String) {
      blockHeader {
        data {
          attributes {
            ...GetHeader
          }
        }
      }
      blockFooter {
        data {
          id
          attributes {
            ...GetFooter
          }
        }
      }
      blockFormDetail {
        data {
          attributes {
            ...GetFormDetail
          }
        }
      }
      pages(filters: { Slug: { contains: $page } }) {
        data {
          attributes {
            ContentType
            Slug
            ShowFormDetails
            Seo {
              Title
              Keywords
              Description
            }
            ShowFormDetails
          }
        }
      }
    }
    ${FRAGMENT_HEADER}
    ${FRAGMENT_FOOTER}
    ${FRAGMENT_FORM_DETAIL}
  `

  const data = await graphQLClient.request(query, {
    page: page,
  })
  return data
}

export async function getPageOurWorks(page: string) {
  const url = 'http://localhost:1337/graphql'
  const graphQLClient = new GraphQLClient(url)

  const query = gql`
    query PAGE_SERVICES {
      blockHeader {
        data {
          attributes {
            ...GetHeader
          }
        }
      }
      blockFooter {
        data {
          id
          attributes {
            ...GetFooter
          }
        }
      }
      blockFormDetail {
        data {
          attributes {
            ...GetFormDetail
          }
        }
      }
      pages(filters: { Slug: { contains: "our-work" } }) {
        data {
          attributes {
            ContentType
            Name
            Seo {
              Title
              Keywords
              Description
            }
            ShowFormDetails
          }
        }
      }
    }
    ${FRAGMENT_HEADER}
    ${FRAGMENT_FOOTER}
    ${FRAGMENT_FORM_DETAIL}
  `

  const data = await graphQLClient.request(query, {
    page: page,
  })
  return data
}

export async function getPageData(page: string) {
  const url = 'http://localhost:1337/graphql'
  const graphQLClient = new GraphQLClient(url, {
    // headers: {
    //   Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    // },
  })

  const pageData = page === '' ? 'home' : page

  const query = gql`
    query PAGE_DATA($page: String) {
      blockHeader {
        data {
          attributes {
            ...GetHeader
          }
        }
      }
      blockFooter {
        data {
          id
          attributes {
            ...GetFooter
          }
        }
      }
      blockFormDetail {
        data {
          attributes {
            ...GetFormDetail
          }
        }
      }
      services {
        data {
          id
          attributes {
            page {
              data {
                attributes {
                  Slug
                }
              }
            }
            Title
            Text
            Slug
            SlugText
            PreviewImage {
              data {
                attributes {
                  url
                }
              }
            }
            PreviewImageSmall {
              data {
                attributes {
                  url
                }
              }
            }
            PreviewLogoPrimary {
              data {
                attributes {
                  url
                }
              }
            }
            PreviewLogoSecondary {
              data {
                attributes {
                  url
                }
              }
            }
            ImageAlt
          }
        }
      }
      pages(filters: { Slug: { contains: $page } }) {
        data {
          attributes {
            ContentType
            Slug
            Seo {
              Title
              Keywords
              Description
            }
            ShowFormDetails
            Body {
              ... on ComponentBlockServicesBlockServices {
                BlockType
              }
              ... on ComponentBlockPreviewServicesBlockPreviewServices {
                BlockType
                Title
                Text
              }
              ... on ComponentBlockIntroCarouselBlockIntroCarousel {
                id
                TitleIntroCarousel: Title
                Text
                BlockType
                Items {
                  Image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  ImageAlt
                }
                PageLink: Link {
                  page {
                    data {
                      attributes {
                        Slug
                      }
                    }
                  }
                  Name
                }
              }
              ... on ComponentBlockBenefitsBlockBenefits {
                id
                BlockType
                Text
                Theme
                Title
                Items {
                  id
                  Image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  ImageAlt
                  Title
                  Text
                }
              }
              ... on ComponentBlockHeroBlockHero {
                id
                Title
                Text
                BlockType
                Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                ImageAlt
                Overlay
              }
              ... on ComponentBlockOurClientsBlockOurClients {
                id
                BlockType
                Title
                ClientImage: Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                Items {
                  id
                  Image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  ImageAlt
                  Name
                  Position
                  Text
                }
              }
            }
          }
        }
      }
    }
    ${FRAGMENT_HEADER}
    ${FRAGMENT_FOOTER}
    ${FRAGMENT_FORM_DETAIL}
  `

  const data = await graphQLClient.request(query, {
    page: pageData,
  })
  return data
}
