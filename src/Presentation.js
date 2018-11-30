// Import React
import React from "react";
import { css } from "react-emotion";
import { Deck } from "spectacle";
import { ApolloConsumer } from "react-apollo";
// Import theme
import createTheme from "spectacle/lib/themes/default";

import Start from "./slides/Start";
import End from "./slides/End";
import Main from "./slides/Main";
import Context from "./slides/Context";
import Id from "./slides/Id";
import Id2 from "./slides/Id2";
import Cache from "./slides/Cache";
import Cache2 from "./slides/Cache2";
import Cache3 from "./slides/Cache3";
import Cache4 from "./slides/Cache4";
import Cache5 from "./slides/Cache5";
import Cache6 from "./slides/Cache6";
import Cache7 from "./slides/Cache7";
import OptimisticUI from "./slides/OptimisticUI";
import MutationUpdate from "./slides/MutationUpdate";
import Fragment from "./slides/Fragment";
import Fragment2 from "./slides/Fragment2";
import Fragment3 from "./slides/Fragment3";
import Offline from "./slides/Offline";
import Offline2 from "./slides/Offline2";
import Fetch from "./slides/Fetch";
import Fetch2 from "./slides/Fetch2";
import Fetch3 from "./slides/Fetch3";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE",
    yello: "#F9C35C"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <ApolloConsumer>
        {client => (
          <Deck
            contentWidth={1200}
            transition={["fade"]}
            transitionDuration={500}
            theme={theme}
          >
            <Start />
            <Main />
            <Id />
            <Id2 />
            <Cache />
            <Cache2 />
            <Cache3 />
            <Cache4 />
            <Cache5 />
            <Cache6 client={client} />
            <OptimisticUI />
            <MutationUpdate />
            <Fragment />
            <Fragment2 />
            <Fragment3 />
            <Offline />
            <Offline2 />
            <Fetch />
            <Fetch2 />
            <Fetch3 />
            <End />
          </Deck>
        )}
      </ApolloConsumer>
    );
  }
}
