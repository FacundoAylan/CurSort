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
import OrderStar from "../../InputOrder/OrderStar";
import {
  getCourses,
  orderByRating,
  orderByPrice,
  orderByPublished,
} from "../../../Redux/actions/index";

function Filter({ setPagina, setOrder }) {

  const dispatch = useDispatch();
 

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
    setOrder("order" + e.target.value);
  }

  function handleOrderByStar(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setPagina(1)
    setOrder("order" + e.target.value);
  }

  return (
    <Flex mt={3.8}>
      <Menu>
        <MenuButton>
          <Button background='black' color='white' border='2px' borderColor='white' borderRadius='12px'>
            Category  
          </Button>
        </MenuButton>
        <MenuList>
          <FilterCategory/>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton ml={3}>
        <Button background='black' color='white' border='2px' borderColor='white' borderRadius='12px'>
          Difficulty
          </Button>
          </MenuButton>
        <MenuList>
          <FilterDifficulty />
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton ml={3}>
        <Button background='black' color='white' border='2px' borderColor='white' borderRadius='12px'>
          Duration
          </Button>
          </MenuButton>
        <MenuList>
          <FilterDuration />
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton ml={3}>
        <Button background='black' color='white' border='2px' borderColor='white' borderRadius='12px'>
          Price
          </Button>
        </MenuButton>
        <MenuList>
          <OrderPrice handleOrderByPrice={handleOrderByPrice} />
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton ml={3}>
        <Button background='black' color='white' border='2px' borderColor='white' borderRadius='12px'>
          Publiced
          </Button>
          </MenuButton>
        <MenuList>
          <OrderPublished handleOrderByPublished={handleOrderByPublished} />
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton ml={3}>
        <Button background='black' color='white' border='2px' borderColor='white' borderRadius='12px'>
          Rating
          </Button>
          </MenuButton>
        <MenuList>
          <OrderStar handleOrderByStar={handleOrderByStar} />
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Filter;
