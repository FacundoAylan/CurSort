
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
          bg='black'
          color='white'
          justifyContent='center'
          _hover={{ bg: 'gray.600' }}
          >
            1hs - 50hs
        </MenuItem>
        
        <MenuItem 
          onClick={(e) => handleDuration(e)} 
          value='51A100'
          bg='black'
          color='white'
          justifyContent='center'
          _hover={{ bg: 'gray.600' }}
          >
            51hs - 100hs
        </MenuItem>
        
        <MenuItem 
          onClick={(e) => handleDuration(e)} 
          value='100'
          bg='black'
          color='white'
          justifyContent='center'
          _hover={{ bg: 'gray.600' }}
          >
            + 100hs
        </MenuItem>
    </>
  );
};

export default FilterDuration;
