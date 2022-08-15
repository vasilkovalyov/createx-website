import { gql, GraphQLClient } from 'graphql-request'
import { IProjectsPageFields } from 'interfaces/fields'

import { FRAGMENT_PROJECT } from './fragments'
import { IGetPosts } from 'interfaces/functions'

export const getProjects = ({ start, limit, category }: IGetPosts): Promise<IProjectsPageFields> => {
  const url = 'http://localhost:1337/graphql'
  const graphQLClient = new GraphQLClient(url)

  const query = `
    query Projects($start: Int, $limit: Int, $category: String) {
      projects(sort: "createdAt:desc", pagination: { start: $start, limit: $limit }, filters: { project_category: { Name: { contains: $category } } } ) {
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
              ...GetProject
            }
          }
        }
      }
      ${FRAGMENT_PROJECT}
    `
  const data = graphQLClient.request(query, {
    start: start,
    limit: limit,
    category: category,
  })
  return data
}
