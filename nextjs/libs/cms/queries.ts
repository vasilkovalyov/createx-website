import { request, gql, GraphQLClient } from 'graphql-request'

import { FRAGMENT_HEADER, FRAGMENT_FOOTER, FRAGMENT_FORM_DETAIL } from './fragments'

export async function getPageServices(page: string) {
  const url = 'http://localhost:1337/graphql'
  const graphQLClient = new GraphQLClient(url, {
    // headers: {
    //   Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    // },
  })

  const pageData = page === '/' ? 'home' : page

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
            Title
            Text
            Image {
              data {
                attributes {
                  url
                }
              }
            }
            ImageAlt
            Link {
              Name
              Slug: service_page {
                data {
                  attributes {
                    Slug
                  }
                }
              }
            }
          }
        }
      }
      pages(filters: { Slug: { contains: $page } }) {
        data {
          attributes {
            ContentType
            Slug
            ShowFormDetails
            Body {
              ... on ComponentBlockHeroBlockHero {
                Title
                Text
                BlockType
                HeroImage: Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                ImageAlt
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
    page: pageData,
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

  const pageData = page === '/' ? 'home' : page

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
      servicePages(filters: { Slug: { contains: $page } }) {
        data {
          attributes {
            ContentType
            Title
            Slug
            ShowFormDetails
            Seo {
              Title
              Description
              Keywords
            }
            BreadcrumbsInner {
              pages {
                data {
                  id
                  attributes {
                    Slug
                    Name
                  }
                }
              }
              activePage {
                data {
                  attributes {
                    Slug
                  }
                }
              }
              inner_page {
                data {
                  id
                  attributes {
                    Slug
                    Title
                  }
                }
              }
            }
            Body {
              ... on ComponentBlockHeroBlockHero {
                Title
                Text
                BlockType
                HeroImage: Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                ImageAlt
                Overlay
              }
              ... on ComponentBlockWorkStepsBlockWorkSteps {
                BlockType
                Title
                Items {
                  id
                  WorkStepTitle: Title
                  Text
                  ShowNumber
                }
              }
              ... on ComponentBlockPriceBlockPrice {
                BlockType
                Title
                Text
                PriceCol {
                  id
                  PriceCost
                  PricePlan
                }
                PriceRow {
                  id
                  Title
                  Plan1
                  Text1
                  Available1
                  Plan2
                  Text2
                  Available2
                  Plan3
                  Text3
                  Available3
                }
              }
              ... on ComponentBlockBenefitsBlockBenefits {
                id
                BlockType
                Text
                Title
                Theme
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
            }
          }
        }
      }
      pages(filters: { Slug: { contains: $page } }) {
        data {
          attributes {
            ContentType
            Slug
            ShowFormDetails
            Breadcrumbs {
              pages {
                data {
                  id
                  attributes {
                    Slug
                    Name
                  }
                }
              }
              activePage {
                data {
                  attributes {
                    Slug
                  }
                }
              }
            }
            Body {
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
                HeroImage: Image {
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
