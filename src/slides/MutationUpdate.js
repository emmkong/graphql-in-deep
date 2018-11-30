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
      <Heading>Update cache after Mutation</Heading>

      <CodePane
        className={codePanXL}
        theme="light"
        lang="jsx"
        source={`
        createImport({
          variables: {
            datasourceId,
            data
          },
          update: (proxy, { data: { datasource } }) => {
            let data;
            try {
              data = proxy.readQuery({
                query: getDatasourceQuery,
                variables: { id: datasourceId }
              });
            } catch (error) {
              data = {};
            }
            data.datasource = datasource;
            proxy.writeQuery({
              query: getDatasourceQuery,
              data
            });
          }
        })
        `}
      />
    </Slide>
  );
};

export default SlideComponent;
