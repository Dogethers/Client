import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'http://192.168.100.65:4000',
//   uri: "http://192.168.1.12:4000",
  cache: new InMemoryCache(),
});
