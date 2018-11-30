import React from "react";
import { Heading, Slide } from "spectacle";

const SlideComponent = () => (
  <Slide transition={["zoom"]} bgColor="#ff4081" >
    <Heading lineHeight={1} textColor="secondary">
      Cache
    </Heading>
  </Slide>
);

export default SlideComponent;
