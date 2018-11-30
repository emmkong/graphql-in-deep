import React from "react";
import { CodePane, Heading, Slide, Text, List, ListItem } from "spectacle";
import { css } from "react-emotion";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const codePanXL = css`
  font-size: 1.3rem;
  margin-top: 24px;
`;

const GET_BOOK = gql`
  query book($id: ID!) {
    book(id: $id) {
      id
      title
      author
    }
  }
`;

const SlideComponent = () => (
  <Slide transition={["zoom"]} bgColor="yello" align="center">
    <Heading>Demo</Heading>
    <Text style={{ marginTop: 48 }}>Loading single book title and author</Text>
    <CodePane
      className={codePanXL}
      theme="light"
      lang="jsx"
      source={`
        <Query query={GET_BOOK}>
          {({ loading, error, data }) => {
            return (
              <CodePane
                className={codePanXL}
                theme="light"
                lang="json"
                source={data}
              />
            );
          }}
        </Query>
    `}
    />

    <div style={{ marginTop: 24, padding: 12, background: "white" }}>
      <Query query={GET_BOOK} variables={{ id: "book1" }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <CodePane
              className={codePanXL}
              theme="light"
              lang="json"
              source={JSON.stringify(data, null, 2)}
            />
          );
        }}
      </Query>
    </div>
  </Slide>
);

export default SlideComponent;
