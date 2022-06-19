import { request, gql, GraphQLClient } from 'graphql-request'

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
          id
          attributes {
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
              id
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
          }
        }
      }
      blockFooter {
        data {
          id
          attributes {
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
              Items{
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
        }
      }
      blockFormDetail {
        data {
          attributes {
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
        }
      }
      pages(filters: { Slug: { contains: $page } }) {
        data {
          attributes {
            Slug
            ShowFormDetails
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
  `

  const data = await graphQLClient.request(query, {
    page: pageData,
  })
  return data
}
