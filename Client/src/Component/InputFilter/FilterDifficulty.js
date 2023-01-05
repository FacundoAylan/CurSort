
import React from "react";
import { useDispatch } from "react-redux";
import { filterDifficulty} from "../../Redux/actions/index";
import { Grid, GridItem, Button } from '@chakra-ui/react'

const FilterDifficulty = () => {
  const dispatch = useDispatch();
  
  const handleDifficulty = (e) => {
   dispatch(filterDifficulty(e.target.value));
    
  };

  return (


    <Grid
      gridTemplateRows='repeat(3, 45px)' 
      p={0}
    >
      <GridItem p={0}>
        <Button onClick={(e) => handleDifficulty(e)} value='Beginner'>Beginner</Button>
      </GridItem>
      <GridItem>
        <Button onClick={(e) => handleDifficulty(e)} value='Middle'>Middle</Button>
      </GridItem>
      <GridItem>
        <Button onClick={(e) => handleDifficulty(e)} value='Advanced'>Advanced</Button>
      </GridItem>
    </Grid>

  )
}


export default FilterDifficulty;
