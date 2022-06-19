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
      pages(filters: { Slug: { contains: $page } }) {
        data {
          attributes {
            Slug
            Body {
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
