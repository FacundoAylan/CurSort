//no esta conectado

import React from "react";
import { Grid, GridItem, Button } from '@chakra-ui/react'

const OrderAZ = ({ handleOrderByName }) => {
  return (
    <div>
      <Grid gridTemplateRows="repeat(3, 45px)" p={0}>
        <GridItem p={0}>
          <Button value="A-Z">A-Z</Button>
        </GridItem>
        <GridItem>
          <Button value="Z-A">Z-A</Button>
        </GridItem>
      </Grid>
    </div>
  );
};

export default OrderAZ;
