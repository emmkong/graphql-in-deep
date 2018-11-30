import React from "react";
import { Heading, Slide } from "spectacle";

const SlideComponent = () => (
  <Slide transition={["zoom"]} bgColor="yello" >
    <Heading lineHeight={1} textColor="secondary">
      Context
    </Heading>
  </Slide>
);

export default SlideComponent;
