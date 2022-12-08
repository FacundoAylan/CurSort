import React from "react";
import { Grid, GridItem, Button } from '@chakra-ui/react';

const FilterDuration = () => {
  return (
    <div>
      <Grid gridTemplateRows="repeat(3, 45px)" p={0}>
        <GridItem p={0}>
          <Button value="option1">+ 40Hs</Button>
        </GridItem>
        <GridItem>
          <Button value="option2">- 40Hs</Button>
        </GridItem>
      </Grid>
    </div>
  );
};

export default FilterDuration;
