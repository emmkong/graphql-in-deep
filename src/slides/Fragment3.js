import React from "react";
import { CodePane, Heading, Slide } from "spectacle";
import { css } from "react-emotion";

const codePanXL = css`
  font-size: 1.3rem;
  margin-top: 24px;
`;

const SlideComponent = () => (
  <Slide transition={["zoom"]} bgColor="yello" align="center">
    <Heading lineHeight={1} textColor="secondary">
      Fragment
    </Heading>
    <CodePane
      className={codePanXL}
      theme="light"
      lang="graphql"
      source={`
            fragment DatasourceParts on Datasource {
                id
                name
                workspaceId
                description
                type
            }
            
            fragment FullDatasourceParts on Datasource {
                ...DatasourceParts
                imports {
                id
                data
                status
                type
                created
                processed
                }
            }
            
            query getDatasource($id: ID!) {
                datasource: getDatasource(id: $id) {
                ...FullDatasourceParts
                }
            }
            
            query getDatasources($workspaceId: ID!) {
                datasources: getDatasources(workspaceId: $workspaceId) {
                ...DatasourceParts
                }
            }
      
            `}
    />
  </Slide>
);

export default SlideComponent;
