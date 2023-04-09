import React, { useEffect } from "react";

import { Button, MenuItem, Box } from '@chakra-ui/react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCategory, filterCategory, home } from "../../Redux/actions";


const FilterCategory = ({booleano, setPagina, setHome}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);


  const categories = useSelector(state => state.categories)
  const handleCategory = (e) => {    
    setPagina(1);
    setHome(false)
    dispatch(filterCategory(e.target.value)); 
  };

  return (
    //deberia hacer un map de las categorias presentes en base de datos 
    <Box borderRadius='14px'>
      {categories &&
        categories.map((e) => {
          if(!booleano){
            return(
              <MenuItem
              display='flex' justifyContent='center' alingText='center'
                onClick={(e) => handleCategory(e)} 
                key={e.id} 
                value={e.name}
                bg='#3E4AB8'
                color='white'
                _hover={{ color: 'black'}}
                fontFamily='text'
                fontWeight='bold'
                >
                  {e.name}
              </MenuItem>
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
    </Box>
  );
};

export default FilterCategory;
