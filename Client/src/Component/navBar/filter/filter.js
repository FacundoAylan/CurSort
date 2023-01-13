import React from "react";
import { useDispatch } from "react-redux";
import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  Flex,
  background,
  MenuItem,
} from "@chakra-ui/react";
import FilterCategory from "../../InputFilter/FilterCategory";
import FilterDifficulty from "../../InputFilter/FilterDifficulty";
import FilterDuration from "../../InputFilter/FilterDuration";
import OrderPrice from "../../InputOrder/OrderPrice";
import OrderPublished from "../../InputOrder/OrderPublished";
import {
  getCourses,
  orderByRating,
  orderByPrice,
  orderByPublished,
  cleanFilters,
  home
} from "../../../Redux/actions/index";

function Filter({ setPagina, setOrder, booleano, setHome }) {

  const dispatch = useDispatch();

  function handleOrderByPrice(e) {
  
    e.preventDefault();
    setPagina(1);
    dispatch(orderByPrice(e.target.value));
    setPagina(1)
    setOrder("order" + e.target.value);
  }

  function handleOrderByPublished(e) {
    e.preventDefault();
    dispatch(orderByPublished(e.target.value));
    setPagina(1)
    setHome(false)
    setOrder("order" + e.target.value);
  }

  function handleOrderByStar(e) {
    e.preventDefault();
    dispatch(orderByRating());
    setPagina(1)
    setHome(false)
    setOrder("order" + e.target.value);
  }

  function handleCleanFilters(e) {
    e.preventDefault();
    dispatch(cleanFilters());
    setHome(true)
  }

  return (
    <Flex 
      mt={booleano? 3.8 : 5} 
      pl={3} 
      pr={3} 
      flexDirection={booleano? 'row':'column'}
      >
      <Menu>
        <MenuButton 
          background='black' 
          color='white' 
          border='2px' 
          borderColor='white' 
          borderRadius='12px' 
          w='100%'
          py='1.5'
          fontWeight='bold'
          _hover={{ bg: 'gray.600' }}
          >
          Category  
        </MenuButton>
        <MenuList 
          bg='black' 
          minWidth='150px'
          >
          <FilterCategory booleano={booleano} setPagina={setPagina} setHome={setHome}/>          
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton 
          ml={booleano? 3: 0} 
          mt={booleano? '0':'10px'}
          background='black' 
          color='white' 
          border='2px' 
          borderColor='white' 
          borderRadius='12px' 
          w='100%'
          _hover={{ bg: 'gray.600' }}
          py='1.5'
          fontWeight='bold'
          >
          Difficulty
        </MenuButton>
        <MenuList
          bg='black' 
          minWidth='150px'
          >
          <FilterDifficulty setPagina={setPagina} setHome={setHome}/>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton 
          ml={booleano? 3: 0} 
          mt={booleano? '0':'10px'}
          background='black' 
          color='white' 
          border='2px' 
          borderColor='white' 
          borderRadius='12px' 
          w='100%'
          _hover={{ bg: 'gray.600' }}
          py='1.5'
          fontWeight='bold'
          >
          Duration
        </MenuButton>
        <MenuList
          bg='black' 
          minWidth='150px'
          >
          <FilterDuration setPagina={setPagina} setHome={setHome} />
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton 
          ml={booleano? 3: 0} 
          mt={booleano? '0':'10px'}
          background='black' 
          color='white' 
          border='2px' 
          borderColor='white' 
          borderRadius='12px' 
          w='100%'
          _hover={{ bg: 'gray.600' }}
          py='1.5'
          fontWeight='bold'
          >
          Price
        </MenuButton>
        <MenuList
          bg='black' 
          minWidth='150px'
          >
          <OrderPrice handleOrderByPrice={handleOrderByPrice}/>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton 
          ml={booleano? 3: 0} 
          mt={booleano? '0':'10px'}
          background='black' 
          color='white' 
          border='2px' 
          borderColor='white' 
          borderRadius='12px' 
          w='100%'
          _hover={{ bg: 'gray.600' }}
          py='1.5'
          fontWeight='bold'
          >
          Released Date
        </MenuButton>
        <MenuList
          bg='black' 
          minWidth='150px'
          >
          <OrderPublished handleOrderByPublished={handleOrderByPublished}/>
        </MenuList>
      </Menu>
      
      <Menu >
        <Button 
          ml={booleano? 3: 0} mt={booleano? '0':'10px'}
          background='black' 
          color='white' 
          border='2px' 
          borderColor='white' 
          borderRadius='12px' 
          w='100%' 
          onClick={(e) => handleOrderByStar(e)}
          _hover={{ bg: 'gray.600' }}
          >
            Best Rated
        </Button> 
      </Menu>

      <Menu >
        <Button 
          ml={booleano? 3: 0} mt={booleano? '0':'10px'}
          background='black' 
          color='white' 
          border='2px' 
          borderColor='white' 
          borderRadius='12px' 
          w='100%' 
          onClick={(e) => handleCleanFilters(e)}
          _hover={{ bg: 'gray.600' }}
          >
            Clean Filters
        </Button> 
      </Menu>
    </Flex>
  );
}

export default Filter;
