import React, { useState } from "react";
import { Grid, GridItem, Button } from '@chakra-ui/react';
import { useDispatch} from "react-redux";
import {AllFilterDuration,GetFilter} from '../../Redux/actions/index'

//este filtro tiene que mandar por query los valores del select
// http://localhost:3001/filter?duration='1A50'&difficulty=middle&categoryId=23
//se tienen que sumar a los filtros de categoria y dificultad
const FilterDuration = () => {

  const dispatch = useDispatch()

  const [filter, setFilter] = useState({
    duration : ''
      
  })

  const handleSelect = (e)=>{
    setFilter({
      duration: e.target.value
    })
  }
  dispatch(AllFilterDuration(filter),GetFilter())    
  
  return (
    <div>
      <Grid gridTemplateRows="repeat(3, 45px)" p={0}>
        <GridItem p={0}>
          <Button value='1A50'>51hs - 100hs</Button>
        </GridItem>
        <GridItem>
          <Button value='100'>+ 100hs</Button>
        </GridItem>
      </Grid>
    </div>
  );
};

export default FilterDuration;
