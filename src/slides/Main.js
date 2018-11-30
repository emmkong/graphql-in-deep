import React from "react";
import { Heading, Slide, List, ListItem, Fill } from "spectacle";

const Main = () => (
  <Slide transition={["zoom"]} bgColor="yello" >
    <Heading lineHeight={1} textColor="secondary">
      Focus
    </Heading>
    <Fill>
      <List> 
        <ListItem>Id</ListItem>
        <ListItem>Cache</ListItem>
        <ListItem>Fragment</ListItem>
        <ListItem>Offline</ListItem>
        <ListItem>Fetching</ListItem>
      </List>
    </Fill>
  </Slide>
);

export default Main;
