import { ApolloClient, InMemoryCache } from '@apollo/client/core/core.cjs'
import { setContext } from '@apollo/client/link/context/context.cjs'
import { createHttpLink } from '@apollo/client/link/http/http.cjs'

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore'
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
    }
}

const httpLink = createHttpLink({
    uri: import.meta.env.API_URL
})

const authLink = setContext((_, { headers }) => ({
    headers: {
        ...headers,
        ['Content-Type']: 'application/json',
        ['Authorization']: `bearer ${import.meta.env.STRAPI_ACCESS_TOKEN}`
    }
}))

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
})

export default client
