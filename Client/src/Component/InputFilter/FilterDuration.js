
import React from "react";
import { useDispatch } from "react-redux";
import { filterDuration } from "../../Redux/actions/index";
import { MenuItem } from '@chakra-ui/react';

const FilterDuration = ({setPagina, setHome}) => {
  const dispatch = useDispatch();

  const handleDuration = (e) => {
    setPagina(1);
    setHome(false);
    dispatch(filterDuration(e.target.value));
  };
  
  return (
    <>
        <MenuItem 
          onClick={(e) => handleDuration(e)} 
          value='1A50'
          bg='#3E4AB8'
          color='white'
          justifyContent='center'
          _hover={{ color:'black' }}
          fontFamily='text'
          fontWeight='bold'
          >
            1hs - 50hs
        </MenuItem>
        
        <MenuItem 
          onClick={(e) => handleDuration(e)} 
          value='51A100'
          bg='#3E4AB8'
          color='white'
          justifyContent='center'
          _hover={{ color:'black' }}
          fontFamily='text'
          fontWeight='bold'
          >
            51hs - 100hs
        </MenuItem>
        
        <MenuItem 
          onClick={(e) => handleDuration(e)} 
          value='100'
          bg='#3E4AB8'
          color='white'
          justifyContent='center'
          _hover={{ color:'black' }}
          fontFamily='text'
          fontWeight='bold'
          >
            + 100hs
        </MenuItem>
    </>
  );
};

export default FilterDuration;
