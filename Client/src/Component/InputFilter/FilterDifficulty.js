
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
        <Button onClick={(e) => handleDifficulty(e)} value='Principiante'>Beginner</Button>
      </GridItem>
      <GridItem>
        <Button onClick={(e) => handleDifficulty(e)} value='Intermedio'>Middle</Button>
      </GridItem>
      <GridItem>
        <Button onClick={(e) => handleDifficulty(e)} value='Avanzado'>Advanced</Button>
      </GridItem>
    </Grid>

  )
}


export default FilterDifficulty;
