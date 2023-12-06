import { gql } from '@apollo/client/core/core.cjs'

export const getCategories = () => ({
    query: gql`
        query {
            categories {
                data {
                    id
                    attributes {
                        title
                    }
                }
            }
        }
    `
})
