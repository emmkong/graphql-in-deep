import React from "react";
import { CodePane, Heading, Slide, Text } from "spectacle";
import { css } from "react-emotion";

const codePanXL = css`
  font-size: 1.4rem;
  margin-top: 48px;
`;

const SlideComponent = () => (
  <Slide transition={["zoom"]} bgColor="yello" align="center">
    <Heading fit>InMemoryCache</Heading>
    <Text style={{ fontSize: "2rem", marginTop: 48 }}>
      The InMemoryCache normalizes your data before saving it to the store by
      splitting the result into individual objects, creating a unique identifier
      for each object, and storing those objects in a flattened data structure.
    </Text>
    <Text style={{ fontSize: "2rem", marginTop: 48 }}>
      InMemoryCache will attempt to use the commonly found primary keys of id
      and _id for the unique identifier
    </Text>
    <CodePane
      className={codePanXL}
      theme="light"
      lang="graphql"
      source={`
      import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';

      const cache = new InMemoryCache({
          dataIdFromObject: object => {
            switch (object.__typename) {
              case 'foo': return object.key; // use key as the primary key
              case 'bar': return object.blah; // use blah as the primary key
              default: return defaultDataIdFromObject(object); // fall back to default handling
            }
        }
      });
    `}
    />
  </Slide>
);

export default SlideComponent;
