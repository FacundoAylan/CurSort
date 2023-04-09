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
        bg='#3E4AB8'
        color='white'
        justifyContent='center'
        _hover={{ color:'black' }}
        fontFamily='text'
        fontWeight='bold'
        >
          Beginner
      </MenuItem>
    
      <MenuItem 
        onClick={(e) => handleDifficulty(e)} 
        value='Middle'
        bg='#3E4AB8'
        color='white'
        justifyContent='center'
        _hover={{ color:'black' }}
        fontFamily='text'
        fontWeight='bold'
        >
          Middle
      </MenuItem>
    
      <MenuItem 
        onClick={(e) => handleDifficulty(e)} 
        value='Advanced'
        bg='#3E4AB8'
        color='white'
        justifyContent='center'
        _hover={{ color:'black' }}
        fontFamily='text'
        fontWeight='bold'
        >
          Advanced
      </MenuItem>
    </>
  )
}

export default FilterDifficulty;
