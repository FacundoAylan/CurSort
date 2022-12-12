import React from 'react'
import { Grid, GridItem, Button } from '@chakra-ui/react'

const OrderPrice = ({handleOrderByPrice}) => {
  
  return (
    <div>
            <Grid gridTemplateRows="repeat(3, 45px)" p={0}>
        <GridItem p={0}>
          <Button  onClick={(e)=>handleOrderByPrice(e)} value="all">All</Button>
        </GridItem>
        <GridItem>
          <Button onClick={(e)=>handleOrderByPrice(e)} value="desc">Expensive</Button>
        </GridItem>
        <GridItem>
          <Button onClick={(e)=>handleOrderByPrice(e)} value="asc">Cheap</Button>
        </GridItem>
      </Grid>
    </div>
  );
}

export default OrderPrice