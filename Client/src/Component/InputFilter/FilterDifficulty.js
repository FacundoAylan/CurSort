import React from "react";
import { useDispatch } from "react-redux";
import { filterDifficulty} from "../../Redux/actions/index";
import { MenuItem } from '@chakra-ui/react'

const FilterDifficulty = ({setPagina, setHome }) => {
  const dispatch = useDispatch();
  
  const handleDifficulty = (e) => {
    setPagina(1);
    setHome(false);
    dispatch(filterDifficulty(e.target.value));    
  };

  return (
    <>
      <MenuItem 
        onClick={(e) => handleDifficulty(e)} 
        value='Beginner'
        bg='black'
        color='white'
        justifyContent='center'
        _hover={{ bg: 'gray.600' }}
        >
          Beginner
      </MenuItem>
    
      <MenuItem 
        onClick={(e) => handleDifficulty(e)} 
        value='Middle'
        bg='black'
        color='white'
        justifyContent='center'
        _hover={{ bg: 'gray.600' }}
        >
          Middle
      </MenuItem>
    
      <MenuItem 
        onClick={(e) => handleDifficulty(e)} 
        value='Advanced'
        bg='black'
        color='white'
        justifyContent='center'
        _hover={{ bg: 'gray.600' }}
        >
          Advanced
      </MenuItem>
    </>
  )
}

export default FilterDifficulty;
