import React from "react";
import {
  Grid,
  Box,
  Accordion,
  AccordionPanel,
  Text,
  Carousel,
  Image,
} from "grommet";

function Grommet() {
  return (
    <div className="component">
      <u>
        <p className="typography">Grid </p>
      </u>
      <Grid
        rows={["xxsmall", "xsmall"]}
        columns={["xsmall", "small"]}
        gap="small"
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "nav", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="header" background="brand" />
        <Box gridArea="nav" background="light-5" />
        <Box gridArea="main" background="light-2" />
      </Grid>
      <u>
        <p className="typography">Accordion </p>
      </u>
      <Accordion>
        <AccordionPanel label="Panel 1">
          <Box pad="medium" background="light-2">
            <Text>One</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Panel 2">
          <Box pad="medium" background="light-2">
            <Text>Two</Text>
          </Box>
        </AccordionPanel>
      </Accordion>
      <u>
        <p className="typography">Carousel </p>
      </u>
      <Box height="small" width="medium" overflow="hidden">
        <Carousel fill>
          <Image
            fit="cover"
            src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
          />
          <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
          <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
        </Carousel>
      </Box>
    </div>
  );
}

export default Grommet;
