import React from 'react'
import { Grid, GridItem, Button } from '@chakra-ui/react'

const FilterDifficulty = () => {
  return (
    <Grid
      gridTemplateRows='repeat(3, 45px)' 
      p={0}
    >
      <GridItem p={0}>
        <Button value='option1'>Beginner</Button>
      </GridItem>
      <GridItem>
        <Button value='option2'>Middle</Button>
      </GridItem>
      <GridItem>
        <Button value='option3'>Advanced</Button>
      </GridItem>
    </Grid>
  )
}

export default FilterDifficulty