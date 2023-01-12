import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ShoppingCart from './ShoppingCart';
import EmptyCart from './EmptyCart';
import {Text, Grid, GridItem, Box, IconButton} from "@chakra-ui/react";
import ButtonCart from './ButtonCart';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function HomeCart() {

  const dataLocalStore = window.localStorage.getItem("cart");
  const dataLocal = JSON.parse(dataLocalStore);
  const data = dataLocal.flat();
  
  const local = useSelector((state) => state.local);


  const [shop, setShop] = useLocalStorage("cart", data);

  useEffect(() => {
    setShop(data);
  }, []);

 
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    let total = 0;
    data.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
    return total;
  };

  return (
    <>
      <Box pt="10px">
        <Link to="/home">
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<ArrowLeftIcon />}
          />
        </Link>
      </Box>
      <Grid
        minH="100vh"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(4, 1fr)"
        mt="0"
        color="gray"
        fontWeight="bold"
      >
        <Text
          fontSize="24px"
          fontWeight="bold"
          p="10px"
          gridRowStart={1}
          gridRowEnd={2}
          marginBottom="5px"
          color="#f1faee"
          ml="45vw"
          w="200px"
        >
          Mi Carrito
        </Text>
        <GridItem
          pl="2"
          gridRowStart={2}
          gridRowEnd={7}
          gridColumnStart={1}
          gridColumnEnd={5}
        >
          {data.length > 0 ? <ShoppingCart data={data} /> : <EmptyCart />}
        </GridItem>
        <GridItem
          gridRowStart={8}
          gridRowEnd={10}
          gridColumnStart={1}
          gridColumnEnd={3}
        >
          {data.length > 0 ? <ButtonCart getTotal={getTotal} /> : null}
        </GridItem>
      </Grid>
    </>
  );
}

export default HomeCart