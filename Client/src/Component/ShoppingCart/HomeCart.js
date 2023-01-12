import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ShoppingCart from './ShoppingCart';
import EmptyCart from './EmptyCart';
import {
  Text, 
  Grid, 
  GridItem, 
  Box, 
  IconButton, 
  Center,
  Flex,
} from "@chakra-ui/react";
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
    <Flex>
      <Box pt="10px" position='fixed' ml='5' mt='3'>
        <Link to="/home">
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<ArrowLeftIcon />}
          />
        </Link>
      </Box>
      <Flex justifyContent='center' width='100%' mb='15rem'>
      <Grid
        color="gray"
        fontWeight="bold"
        width='100%'
        
      >
        <Center><Text
          fontSize="24px"
          fontWeight="bold"
          color="#f1faee"
          mt='10'
        >
          Cart
        </Text></Center>
        <GridItem>
          {data.length > 0 ? <ShoppingCart data={data} /> : <EmptyCart />}
        </GridItem>
        <GridItem mt='5'>
          {data.length > 0 ? <ButtonCart getTotal={getTotal} /> : null}
        </GridItem>
      </Grid>
      </Flex>
    </Flex>
  );
}

export default HomeCart