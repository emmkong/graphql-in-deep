import React from "react";
import { CodePane, Heading, Slide, Text } from "spectacle";
import { css } from "react-emotion";

const codePanXL = css`
  font-size: 1.3rem;
  margin-top: 24px;
`;

const SlideComponent = () => (
  <Slide transition={["zoom"]} bgColor="yello">
    <Heading fit>Polling</Heading>
    
    <CodePane
      className={codePanXL}
      theme="light"
      lang="graphql"
      source={`
      const DogPhoto = ({ breed }) => (
        <Query
          query={GET_DOG_PHOTO}
          variables={{ breed }}
          skip={!breed}
          pollInterval={500}
        >
          {({ loading, error, data, startPolling, stopPolling }) => {
            return (
              <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
            );
          }}
        </Query>
      );
    `}
    />
  </Slide>
);

export default SlideComponent;
