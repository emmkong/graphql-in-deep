import React from "react";
import { CodePane, Heading, Slide, Text } from "spectacle";
import { css } from "react-emotion";

const codePanXL = css`
  font-size: 1.3rem;
  margin-top: 24px;
`;

const SlideComponent = () => (
  <Slide transition={["zoom"]} bgColor="yello">
    <Heading fit>InMemoryCache</Heading>
    <Text style={{ marginTop: 48 }}>
      <span style={{ padding: "4px 12px 4px 12px", background: "#eaeaea"}}>apollo-cache-inmemory</span> is the default cache implementation for Apollo
      Client 2.0
    </Text>
    <CodePane
      className={codePanXL}
      theme="light"
      lang="graphql"
      source={`
        import { InMemoryCache } from 'apollo-cache-inmemory';
        import { HttpLink } from 'apollo-link-http';
        import ApolloClient from 'apollo-client';

        const cache = new InMemoryCache();

        const client = new ApolloClient({
          link: new HttpLink(),
          cache
        });
    `}
    />
  </Slide>
);

export default SlideComponent;
