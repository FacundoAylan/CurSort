import React, { useEffect } from "react";

import { Grid, Button } from '@chakra-ui/react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCategory, filterCategory, home } from "../../Redux/actions";


const FilterCategory = ({booleano, setPagina, setHome}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);


  const categories = useSelector(state => state.categories)
  // console.log('categories', categories)
  const handleCategory = (e) => {    
    setPagina(1);
    setHome(false)
    dispatch(filterCategory(e.target.value)); 
  };

  return (
      //deberia hacer un map de las categorias presentes en base de datos 
      <Grid
      gridTemplateRows='repeat(3, 45px)' 
      p={0}
      >
      <Button onClick={(e) => handleCategory(e)} key='all' value='all'>All</Button>
      {categories &&
            categories.map((e) => {
              if(!booleano){
                return(
                  <Button onClick={(e) => handleCategory(e)} key={e.id} value={e.name}>{e.name}</Button>
                )
              }
              else{
                return( 
                <Button>
                  <a href={`#${e.name}`} p={4} ml={4}>{e.name}</a>
                </Button>
                )
              }
            })}

    </Grid>

  );
};

export default FilterCategory;
