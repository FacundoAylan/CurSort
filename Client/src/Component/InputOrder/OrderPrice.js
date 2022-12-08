import React from 'react'
import { Grid, GridItem, Button } from '@chakra-ui/react'

const OrderPrice = ({handleOrderByPrice}) => {
  return (
    <div>
            <Grid gridTemplateRows="repeat(3, 45px)" p={0}>
        <GridItem p={0}>
          <Button  value="all">All</Button>
        </GridItem>
        <GridItem>
          <Button value="desc">Expensive</Button>
        </GridItem>
        <GridItem>
          <Button value="asc">Cheap</Button>
        </GridItem>
      </Grid>
    </div>
  );
}

export default OrderPrice