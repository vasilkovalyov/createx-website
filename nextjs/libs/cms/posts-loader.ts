import { gql, GraphQLClient } from 'graphql-request'
import { IPostsPageFields } from 'interfaces/fields'

import { FRAGMENT_POST } from './fragments'

export const getPosts = (
  start: number | null,
  limit: number | null,
  category?: string | '',
): Promise<IPostsPageFields> => {
  const url = 'http://localhost:1337/graphql'
  const graphQLClient = new GraphQLClient(url)

  const query = `
    query Posts($start: Int, $limit: Int, $category: String) {
        posts(sort: "createdAt:desc", pagination: { start: $start, limit: $limit }, filters: { post_categories: { Name: { contains: $category } } } ) {
          meta {
            pagination {
              total
              page
              pageSize
              pageCount
            }
          }
          data {
            id
            attributes {
              ...GetPost
            }
          }
        }
      }
      ${FRAGMENT_POST}
    `
  const data = graphQLClient.request(query, {
    start: start,
    limit: limit || null,
    category: category || '',
  })
  return data
}
