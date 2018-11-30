import React from "react";
import { CodePane, Heading, Slide, Text, List, ListItem } from "spectacle";
import { css } from "react-emotion";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const codePanXL = css`
  font-size: 1.3rem;
  margin-top: 24px;
`;

const GET_BOOKS = gql`
  {
    books {
      id
      title
    }
  }
`;

const SlideComponent = () => (
  <Slide transition={["zoom"]} bgColor="yello" align="center">
    <Heading>Demo</Heading>
    <Text style={{ marginTop: 48 }}>Loading a book titles</Text>
    <CodePane
      className={codePanXL}
      theme="light"
      lang="jsx"
      source={`
        <Query query={GET_BOOKS}>
        {({ loading, error, data }) => {
          return (
            <List>
              {data.books.map(book => (
                <ListItem>{book.title}</ListItem>
              ))}
            </List>
          );
        }}
      </Query>
    `}
    />

    <div style={{ marginTop: 24, padding: 12, background: "white" }}>
      <Query query={GET_BOOKS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <List>
              {data.books.map(book => (
                <ListItem>{book.title}</ListItem>
              ))}
            </List>
          );
        }}
      </Query>
    </div>
  </Slide>
);

export default SlideComponent;
