import React from "react";
import { useDispatch } from "react-redux";
import {
  Menu,
  Button,
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
    <Flex gap={3} padding={2}>
      <Menu>
        <MenuButton 
          ml={booleano? 3: 0} 
          mt={booleano? '0':'10px'}
          background='#3E4AB8' 
          color='white' 
          _hover={{ border: '3px', borderColor:'green'}}
          border='2px' 
          borderColor='white' 
          borderRadius='12px' 
          w='100%'
          py='1.5'
          fontWeight='bold'
          >
          Category  
        </MenuButton>
        <MenuList 
        padding={0}
        margin={0}
        minWidth='170px'
        borderRadius='14px'
          >
          <FilterCategory booleano={booleano} setPagina={setPagina} setHome={setHome}/>          
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton 
          ml={booleano? 3: 0} 
          mt={booleano? '0':'10px'}
          background='#3E4AB8' 
          color='white' 
          _hover={{ border: '3px', borderColor:'green'}}
          border='2px' 
          borderColor='white' 
          borderRadius='12px' 
          w='100%'
          py='1.5'
          fontWeight='bold'
          >
          Difficulty
        </MenuButton>
        <MenuList
          padding={0}
          margin={0}
          minWidth='170px'
          borderRadius='14px'
          >
          <FilterDifficulty setPagina={setPagina} setHome={setHome}/>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton 
          ml={booleano? 3: 0} 
          mt={booleano? '0':'10px'}
          background='#3E4AB8' 
          color='white' 
          _hover={{ border: '3px', borderColor:'green'}}
          border='2px' 
          borderColor='white' 
          borderRadius='12px' 
          w='100%'
          py='1.5'
          fontWeight='bold'
          >
          Duration
        </MenuButton>
        <MenuList
          padding={0}
          margin={0}
          minWidth='170px'
          borderRadius='14px'
          >
          <FilterDuration setPagina={setPagina} setHome={setHome} />
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton 
          ml={booleano? 3: 0} 
          mt={booleano? '0':'10px'}
          background='#3E4AB8' 
          color='white' 
          _hover={{ border: '3px', borderColor:'green'}}
          border='2px' 
          borderColor='white' 
          borderRadius='12px' 
          w='100%'
          py='1.5'
          fontWeight='bold'
          >
          Price
        </MenuButton>
        <MenuList
          padding={0}
          margin={0}
          minWidth='170px'
          borderRadius='14px'
          >
          <OrderPrice handleOrderByPrice={handleOrderByPrice}/>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton 
          ml={booleano? 3: 0} 
          mt={booleano? '0':'10px'}
          background='#3E4AB8' 
          color='white' 
          _hover={{ border: '3px', borderColor:'green'}}
          border='2px' 
          borderColor='white' 
          borderRadius='12px' 
          w='100%'
          py='1.5'
          fontWeight='bold'
          >
          Released Date
        </MenuButton>
        <MenuList
          padding={0}
          margin={0}
          minWidth='170px'
          borderRadius='14px'
          >
          <OrderPublished handleOrderByPublished={handleOrderByPublished}/>
        </MenuList>
      </Menu>
      
      <Menu >
        <Button 
          ml={booleano? 3: 0} mt={booleano? '0':'10px'}
          background='#3E4AB8' 
          color='white' 
          _hover={{ border: '3px', borderColor:'green'}}
          border='2px' 
          borderColor='white' 
          borderRadius='12px' 
          w='100%' 
          onClick={(e) => handleOrderByStar(e)}
          >
            Best Rated
        </Button> 
      </Menu>

      <Menu >
        <Button 
          ml={booleano? 3: 0} mt={booleano? '0':'10px'}
          background='#3E4AB8' 
          color='white' 
          _hover={{ border: '3px', borderColor:'green'}}
          border='2px' 
          borderColor='white' 
          borderRadius='12px' 
          w='100%' 
          onClick={(e) => handleCleanFilters(e)}
          >
            Clean Filters
        </Button> 
      </Menu>
    </Flex>
  );
}

export default Filter;
