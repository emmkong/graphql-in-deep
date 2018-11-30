import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Presentation from "./Presentation";
import registerServiceWorker from "./registerServiceWorker";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Presentation />
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
