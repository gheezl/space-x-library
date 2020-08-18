import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-boost"
import { resolvers, typeDefs } from "./resolvers.js"

const Link = createHttpLink({
    uri: "https://api.spacex.land/graphql/"
})

export const cache = new InMemoryCache()

export const client = new ApolloClient({
    link: Link,
    cache: cache,
    typeDefs: typeDefs,
    resolvers: resolvers
})

cache.writeData({
    data: {
        toggleLibrary: true,
    }
})