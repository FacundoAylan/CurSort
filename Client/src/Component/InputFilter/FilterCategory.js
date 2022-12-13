import React, { useEffect } from "react";

import { Grid, GridItem, Button } from '@chakra-ui/react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCategory, filterCategory } from "../../Redux/actions";


const FilterCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);


  const categories = useSelector(state => state.categories)
  const handleCategory = (e) => {    
    dispatch(filterCategory(e.target.value)); 
  };

  return (
      //deberia hacer un map de las categorias presentes en base de datos 
      <Grid
      gridTemplateRows='repeat(3, 45px)' 
      p={0}
      >
      <GridItem>
      <Button onClick={(e) => handleCategory(e)} key='all' value='all'>All</Button>
        {categories &&
            categories.map((e) => {
              return <Button onClick={(e) => handleCategory(e)} key={e.id} value={e.name}>{e.name}</Button>
            })}
      </GridItem>

    </Grid>

  );
};

export default FilterCategory;
