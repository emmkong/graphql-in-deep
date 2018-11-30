import React from "react";
import { Heading, Slide } from "spectacle";
import { Flex } from "reflexbox";
import graphqlLogo from "../images/graphql.png";

const Start = () => (
  <Slide transition={["zoom"]} bgColor="yello">
    <Flex justify="center" align="center">
      <img src={graphqlLogo} style={{ height: "320px"}}/>
      <Heading lineHeight={1} textColor="secondary">
        in deep
      </Heading>
    </Flex>
  </Slide>
);

export default Start;
