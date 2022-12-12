import React from "react";
import { Grid, GridItem, Button } from '@chakra-ui/react'

const OrderStar = ({handleOrderByStar}) => {
  return (
    <div>
      <Grid gridTemplateRows="repeat(3, 45px)" p={0}>
        <GridItem p={0}>
          <Button  value="all" onClick={handleOrderByStar}>All</Button>
        </GridItem>
        <GridItem>
          <Button value="desc" onClick={handleOrderByStar}>Highest Star</Button>
        </GridItem>
        <GridItem>
          <Button value="asc" onClick={handleOrderByStar}>Lowest Star</Button>
        </GridItem>
      </Grid>
    </div>
  );
};

export default OrderStar;
