import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Box, Flex, Container, GridItem} from "@chakra-ui/react";
import CartItem from './CartItem';



function ShoppingCart({data}) {

    const cart = useSelector(state => state.cart);
    
 
    const [cartItem, setCartItem] = useState([]
      );
  
      useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
  
      useEffect(() => {
        const data = window.localStorage.getItem("cart");
        setCartItem(JSON.parse(data));
        console.log("cartItem", cartItem);
      }, []);

  return (
    <>

    <Container maxW="100%" maxH="100vh" m='none'>
      <Box display="flex" h="100%" backgroundColor="none" mt='0.5px'>
        <Flex minWidth='100%' alignItems='stretch' flexDirection="column">
        { cart ?
          cart.map((course, index) => (
            <GridItem p='0' key={index}>
            <CartItem key={index} data={course} w='100%' justifyConten='space-between'/>
            </GridItem>
          ))
          : data.map((course, index) => (
            <GridItem p='0' key={index}>
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