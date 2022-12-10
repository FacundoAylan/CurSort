import React, { useEffect } from "react";
import {  useSelector , useDispatch} from "react-redux"
import { getCategory,filterCategory  } from '../../Redux/actions/index';
import { Grid, GridItem, Button } from '@chakra-ui/react'

const FilterCategory = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch])

  const categories = useSelector(state => state.categories)

  // function handleFilterCategory(e) {
  //  dispatch(filterCategory(e.target.value))
  // }

  return (
      //deberia hacer un map de las categorias presentes en base de datos 
      <Grid
      gridTemplateRows='repeat(3, 45px)' 
      p={0}
      >
      <GridItem>
        {categories &&
            categories.map((e) => {
              return <Button value='option1'>Beginner</Button>;
            })}
      </GridItem>

    </Grid>
  );
};

export default FilterCategory;
