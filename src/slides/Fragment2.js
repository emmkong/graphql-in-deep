import React from "react";
import { Heading, Text, Slide } from "spectacle";

const SlideComponent = () => (
  <Slide transition={["zoom"]} bgColor="yello">
    <Heading fit>
      There are two principal uses for fragments in Apollo :{" "}
    </Heading>
    <Text style={{ marginTop: 48 }}>
      - Sharing fields between multiple queries, mutations or subscriptions.
    </Text>
    <Text style={{ marginTop: 48 }}>
      - Breaking your queries up to allow you to co-locate field access with the
      places they are used.
    </Text>
  </Slide>
);

export default SlideComponent;
