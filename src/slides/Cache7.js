import React from "react";
import { CodePane, Heading, Slide, Text, List, ListItem } from "spectacle";
import { css } from "react-emotion";
import gql from "graphql-tag";

const codePanXL = css`
  font-size: 1.3rem;
  margin-top: 24px;
`;

const SlideComponent = ({ client }) => {
  let data;
  try {
    data = client.readFragment({
      id: "book1",
      fragment: gql`
        fragment myBook on Book {
          id
          title
          author
        }
      `
    });
  } catch (err) {
    return (
      <Slide transition={["zoom"]} bgColor="yello" align="center">
        <Heading>Demo</Heading>
        <Text style={{ marginTop: 48 }}>readFragment from cache</Text>

        <Text>Cach not found</Text>
      </Slide>
    );
  }
  return (
    <Slide transition={["zoom"]} bgColor="yello" align="center">
      <Heading>Demo</Heading>
      <Text style={{ marginTop: 48 }}>readFragment from cache</Text>

      <CodePane
        className={codePanXL}
        theme="light"
        lang="jsx"
        source={`data = client.readFragment({
            id: "book1",
            fragment: gql\`
              fragment myBook on Book {
                id
                title
                author
              }
            \`
          `}
      />
      <div style={{ marginTop: 24, padding: 12, background: "white" }}>
        <CodePane
          className={codePanXL}
          theme="light"
          lang="json"
          source={JSON.stringify(data, null, 2)}
        />
      </div>
    </Slide>
  );
};

export default SlideComponent;
