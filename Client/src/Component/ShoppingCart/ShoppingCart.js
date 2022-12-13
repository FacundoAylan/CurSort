import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Box, Flex, Container, GridItem} from "@chakra-ui/react";
import CartItem from './CartItem';



function ShoppingCart() {

    const cart = useSelector(state => state.cart);
    
    const [cartItem, setCartItem] = useState(
        JSON.parse(localStorage.getItem('cart'))
    );

    const setLocalStorage = () => {
        setCartItem(cart);
        localStorage.setItem('cart', JSON.stringify(cartItem));
    }

  return (
    <>

    <Container maxW="100%" maxH="100vh" m='none'>
      <Box display="flex" h="100%" backgroundColor="none" mt='0.5px'>
        <Flex minWidth='100%' alignItems='stretch' flexDirection="column">
        {
          cart.map((course, index) => (
            <GridItem p='0'>
            <CartItem key={index} data={course} w='100%' justifyConten='space-between'/>
            </GridItem>
          ))
        }
        </Flex>
      </Box>
    </Container>

    </>
  );
}

export default ShoppingCart