import React from "react";
import { BlockQuote, Cite, Quote, Slide } from "spectacle";

const End = () => (
  <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
    <BlockQuote>
      <Quote>
        Any application that can be written in JavaScript, will eventually be
        written in JavaScript.
      </Quote>
      <Cite>Jeff Atwood / Atwood's Law</Cite>
    </BlockQuote>
  </Slide>
);

export default End;
