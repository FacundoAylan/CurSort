import React from 'react'
import { Grid, GridItem, Button } from '@chakra-ui/react'

const OrderPublished = ({handleOrderByPublished}) => {
  return (
    <div>
      <Grid gridTemplateRows="repeat(2, 45px)" p={0}>
        <Button onClick={handleOrderByPublished} value="desc">New</Button>
        <Button onClick={handleOrderByPublished} value="asc">Old</Button>
      </Grid>
    </div>
  );
}

export default OrderPublished