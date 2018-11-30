import React from "react";
import { Heading, Slide } from "spectacle";
import { css } from "react-emotion";

const codePanXL = css`
  font-size: 1.3grem;
  margin-top: 24px;
`;

const SlideComponent = () => (
  <Slide transition={["zoom"]} bgColor="#ff4081">
    <Heading lineHeight={1} textColor="secondary">
      Fragment
    </Heading>
  </Slide>
);

export default SlideComponent;
