import React from 'react'
import { useSelector } from 'react-redux';
import ShoppingCart from './ShoppingCart';
import EmptyCart from './EmptyCart';
import {Text, Grid, GridItem, Image} from "@chakra-ui/react";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import { Link } from 'react-router-dom';

function HomeCart() {
    const cart = useSelector(state => state.cart);
    const {isAuthenticated, user} = useAuth0()

  return (
    <Grid
      minH="100vh"
      templateRows="repeat(12, 1fr)"
      templateColumns="repeat(4, 1fr)"

      fontWeight="bold"
    >
    
      <Text
        fontSize="24px"
        fontWeight="bold"
        p="10px"
        gridRowStart={2}
        gridRowEnd={3}
      >
        Mi Carrito
      </Text>
      <GridItem pl="2"  gridRowStart={4}
            gridRowEnd={7}
            gridColumnStart={2}
            gridColumnEnd={4}>
        {cart.length > 0 ? <ShoppingCart /> : <EmptyCart />}
      </GridItem>
    </Grid>
  );
}

export default HomeCart