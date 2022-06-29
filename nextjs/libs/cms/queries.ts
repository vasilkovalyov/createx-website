import { request, gql, GraphQLClient } from 'graphql-request'

import { FRAGMENT_HEADER, FRAGMENT_FOOTER, FRAGMENT_FORM_DETAIL, FRAGMENT_POST, FRAGMENT_PROJECT } from './fragments'

export async function getPageSinglePost(page: string) {
  const url = 'http://localhost:1337/graphql'
  const graphQLClient = new GraphQLClient(url)

  const query = gql`
    query SinglePost($page: String!) {
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
      pages: posts(filters: { Slug: { contains: $page } }) {
        data {
          id
          attributes {
            ContentType
            Title
            Slug
            ShowFormDetails
            Body {
              ... on ComponentBlockHeadingPageBlockHeading {
                BlockType
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
            ShowFormDetails
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
              ... on ComponentBlockServiceDescriptionBlockServiceDescription {
                BlockType
                Title
                Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                ImageAlt
                Items {
                  id
                  Title
                  Text
                }
              }
              ... on ComponentBlockProjectStepsBlockWorkSteps {
                BlockType
                Title
                Items {
                  id
                  Title
                  Text
                  ShowNumber
                }
              }
              ... on ComponentBlockPriceBlockPrice {
                BlockType
                Title
                Text
                Overlay
                PriceRow {
                  id
                  Title
                  Plan1
                  Plan2
                  Plan3
                  Text1
                  Text2
                  Text3
                  Available1
                  Available2
                  Available3
                }
                PriceCol {
                  id
                  PriceCost
                  PricePlan
                }
              }
              ... on ComponentBlockBenefitsBlockBenefits {
                BlockType
                Title
                Text
                Theme
                Items {
                  id
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
    page: page,
  })
  return data
}

export async function getRelatedProjects(category: string) {
  const url = 'http://localhost:1337/graphql'
  const graphQLClient = new GraphQLClient(url)

  const query = gql`
    query RelatedProject($category: String!) {
      relatedProjects: projects(filters: { project_category: { Name: { contains: $category } } }) {
        data {
          attributes {
            ...GetProject
          }
        }
      }
    }
    ${FRAGMENT_PROJECT}
  `
  const data = await graphQLClient.request(query, {
    category: category,
  })
  return data
}

export async function getPageSingleProject(page: string) {
  const url = 'http://localhost:1337/graphql'
  const graphQLClient = new GraphQLClient(url)

  const query = gql`
    query SingleProject($page: String!) {
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
      pages: projects(filters: { Slug: { contains: $page } }) {
        data {
          id
          attributes {
            ContentType
            Title
            Slug
            ShowFormDetails
            project_category {
              data {
                attributes {
                  Title
                  Name
                }
              }
            }
            Body {
              ... on ComponentBlockRelatedProjectsBlockRelatedProjects {
                BlockType
                Title
              }
              ... on ComponentBlockHeadingPageBlockHeading {
                BlockType
              }
              ... on ComponentBlockImageGalleryBlockImageGallery {
                BlockType
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
                }
              }
              ... on ComponentBlockProjectDescriptionBlockWorkDescription {
                BlockType
                Title
                RichText
                Items {
                  id
                  Title
                  Text
                }
              }
              ... on ComponentBlockConstructiveDecisionsBlockConstructiveDecisions {
                BlockType
                Title
                Overlay
                Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                ImageAlt
                RichText
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
      postCategories {
        data {
          id
          attributes {
            Title
            Name
          }
        }
      }
      latestPosts: posts(sort: "createdAt:desc", pagination: { limit: 3 }) {
        data {
          id
          attributes {
            ...GetPost
          }
        }
      }
      posts {
        data {
          id
          attributes {
            ...GetPost
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
      projectCategories {
        data {
          id
          attributes {
            Title
            Name
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
      latestProjects: projects(sort: "createdAt:desc", pagination: { limit: 6 }) {
        data {
          id
          attributes {
            ...GetProject
          }
        }
      }
      projects {
        data {
          id
          attributes {
            ...GetProject
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
              ... on ComponentBlockLatestProjectsBlockLatestProjects {
                BlockType
                Title
              }
              ... on ComponentBlockLatestNewsBlockLatestNews {
                BlockType
                Title
              }
              ... on ComponentBlockNewsBlockNews {
                BlockType
                Title
              }
              ... on ComponentBlockOurProjectsBlockOurProjects {
                BlockType
              }
              ... on ComponentBlockServicesBlockServices {
                BlockType
              }
              ... on ComponentBlockPreviewServicesBlockPreviewServices {
                BlockType
                Title
                Text
              }
              ... on ComponentBlockIntroCarouselBlockIntroCarousel {
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
    ${FRAGMENT_PROJECT}
    ${FRAGMENT_POST}
    ${FRAGMENT_HEADER}
    ${FRAGMENT_FOOTER}
    ${FRAGMENT_FORM_DETAIL}
  `

  const data = await graphQLClient.request(query, {
    page: pageData,
  })
  return data
}
