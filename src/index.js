import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient, gql } from "apollo-boost"
import * as serviceWorker from './serviceWorker';

import './index.css';

import App from './App';

import { resolvers, typeDefs } from "./graphql/resolvers.js"


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

// client.writeData({
//   data: {
//     rockets: "hi"
//   }
// })



ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
