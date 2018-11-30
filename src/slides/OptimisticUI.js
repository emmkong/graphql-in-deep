import React from "react";
import { CodePane, Heading, Slide, Text, List, ListItem } from "spectacle";
import { css } from "react-emotion";
import gql from "graphql-tag";

const codePanXL = css`
  font-size: 1.3rem;
  margin-top: 24px;
`;

const SlideComponent = () => {
  return (
    <Slide transition={["zoom"]} bgColor="yello" align="center">
      <Heading>Optimistic UI</Heading>
      <CodePane
        className={codePanXL}
        theme="light"
        lang="jsx"
        source={`
        const UPDATE_COMMENT = gql\`
          mutation UpdateComment($commentId: ID!, $commentContent: String!) {
            updateComment(commentId: $commentId, commentContent: $commentContent) {
              id
              __typename
              content
            }
          }
        \`;
      const CommentPageWithData = () => (
        <Mutation mutation={UPDATE_COMMENT}>
          {mutate => {
            <Comment
              updateComment={({ commentId, commentContent }) =>
                mutate({
                  variables: { commentId, commentContent },
                  optimisticResponse: {
                    __typename: "Mutation",
                    updateComment: {
                      id: commentId,
                      __typename: "Comment",
                      content: commentContent
                    }
                  }
                })
              }
            />;
          }}
        </Mutation>
      );
          `}
      />
    </Slide>
  );
};

export default SlideComponent;
