
import React from "react";
import { useDispatch } from "react-redux";
import { filterDuration } from "../../Redux/actions/index";
import { Grid, GridItem, Button } from '@chakra-ui/react';

const FilterDuration = () => {
  const dispatch = useDispatch();

  const handleDuration = (e) => {
    dispatch(filterDuration(e.target.value));
  };
  
  return (
    <div>
      <Grid gridTemplateRows="repeat(3, 45px)" p={0}>
        <GridItem p={0}>
          <Button onClick={(e) => handleDuration(e)} value='1A50'>51hs - 100hs</Button>
        </GridItem>
        <GridItem>
          <Button onClick={(e) => handleDuration(e)} value='51A100'>51hs - 100hs</Button>
        </GridItem>
         <GridItem>
          <Button onClick={(e) => handleDuration(e)} value='100'>+ 100hs</Button>
        </GridItem>
      </Grid>

    </div>
  );
};

export default FilterDuration;
