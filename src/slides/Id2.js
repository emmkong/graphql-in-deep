import React from "react";
import { Heading, Text, Slide } from "spectacle";

const SlideComponent = () => (
  <Slide transition={["zoom"]} bgColor="yello">
    <Heading fit lineHeight={1} textColor="secondary">
      Id (serialized as String)
    </Heading>
    <Text style={{ marginTop: 48 }}>
      - A unique identifier, often used to refetch an object or as the key for a
      cache.
    </Text>
    <Text style={{ marginTop: 48 }}>
      - While serialized as a String, ID signifies that it is not intended to be
      human‐readable
    </Text>
    <Text style={{ marginTop: 48 }}>
      - Items with same __typename and IDs that returning in a same query result
      will be deduplicated
    </Text>
  </Slide>
);

export default SlideComponent;
