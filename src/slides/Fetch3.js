import React from "react";
import { CodePane, Heading, Slide, Text } from "spectacle";
import { css } from "react-emotion";

const codePanXL = css`
  font-size: 1.3rem;
  margin-top: 24px;
`;

const SlideComponent = () => (
  <Slide transition={["zoom"]} bgColor="yello">
    <Heading fit>Refetching</Heading>
    
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
        >
          {({ loading, error, data, refetch }) => {
            return (
              <div>
                <img
                  src={data.dog.displayImage}
                  style={{ height: 100, width: 100 }}
                />
                <button onClick={() => refetch()}>Refetch!</button>
              </div>
            );
          }}
        </Query>
      );
    `}
    />
  </Slide>
);

export default SlideComponent;
