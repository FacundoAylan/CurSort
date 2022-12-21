import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ShoppingCart from './ShoppingCart';
import EmptyCart from './EmptyCart';
import {Text, Grid, GridItem} from "@chakra-ui/react";
import { useAuth0 } from '@auth0/auth0-react';
import ButtonCart from './ButtonCart';

function HomeCart() {
  const cart = useSelector((state) => state.cart);

  const [total, setTotal] = useState(0);

  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
    return total;
  };

  return (
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
        {cart.length > 0 ? <ShoppingCart /> : <EmptyCart />}
      </GridItem>
      <GridItem
        gridRowStart={8}
        gridRowEnd={10}
        gridColumnStart={1}
        gridColumnEnd={3}
      >
        {cart.length > 0 ? <ButtonCart getTotal={getTotal} /> : null}
      </GridItem>
    </Grid>
  );
}

export default HomeCart