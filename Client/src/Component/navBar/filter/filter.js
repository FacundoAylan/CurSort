import React from "react";
// import { useState } from "react";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import {
  // Grid,
  // Tabs,
  // TabList,
  // Tab,
  Menu,
  Button,
  // Popover,
  // PopoverTrigger,
  // Portal,
  // PopoverContent,
  // PopoverArrow,
  // PopoverCloseButton,
  // PopoverBody,
  MenuButton,
  MenuList,
  Flex,
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

  // function handleOrderByName(e) {
  //   e.preventDefault();
  //   setPagina(1);
  //   dispatch(getCourses(e.target.value));
  //   setPagina(1)
  //   setOrder("order" + e.target.value);
  // }


  function handleOrderByPrice(e) {
    console.log(e.target.value);
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
  }

  return (
    <Flex mt={booleano? 3.8 : 5} p={0} flexDirection={booleano? 'row':'column'}>
      <Menu>
        <MenuButton>
          <Button background='black' color='white' border='2px' borderColor='white' borderRadius='12px' w='100%'>
            Category  
          </Button>
        </MenuButton>
        <MenuList>
          <FilterCategory booleano={booleano} setPagina={setPagina} setHome={setHome}/>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton ml={booleano? 3: 0} mt={booleano? '0':'10px'}>
          <Button background='black' color='white' border='2px' borderColor='white' borderRadius='12px' w='100%'>
            Difficulty
          </Button>
        </MenuButton>
        <MenuList>
          <FilterDifficulty setPagina={setPagina} setHome={setHome}/>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton ml={booleano? 3: 0} mt={booleano? '0':'10px'}>
          <Button background='black' color='white' border='2px' borderColor='white' borderRadius='12px' w='100%'>
            Duration
          </Button>
        </MenuButton>
        <MenuList>
          <FilterDuration setPagina={setPagina} setHome={setHome} />
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton ml={booleano? 3: 0} mt={booleano? '0':'10px'}>
          <Button background='black' color='white' border='2px' borderColor='white' borderRadius='12px' w='100%'>
            Price
          </Button>
        </MenuButton>
        <MenuList>
          <OrderPrice handleOrderByPrice={handleOrderByPrice}/>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton ml={booleano? 3: 0} mt={booleano? '0':'10px'}>
          <Button background='black' color='white' border='2px' borderColor='white' borderRadius='12px' w='100%'>
            Released Date
          </Button>
        </MenuButton>
        <MenuList>
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
          onClick={(e) => handleOrderByStar(e)}>
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
          onClick={(e) => handleCleanFilters(e)}>
            Clean Filters
        </Button> 
      </Menu>
    </Flex>
  );
}

export default Filter;
