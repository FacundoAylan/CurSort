import React from 'react'
import { useSelector } from 'react-redux';
import ShoppingCart from './ShoppingCart';
import EmptyCart from './EmptyCart';
import { Box, Flex, Text, Container, IconButton} from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";

function HomeCart() {
    const cart = useSelector(state => state.cart);

  return (
    <Container maxW="100%" maxH="-moz-initial" bg="#f1faee">
      <Box display="flex" w="100%" h="100%" backgroundColor="#f1faee">
        <Text fontSize="lg" fontWeight="bold">
          Mi Carrito
        </Text>
        <GrCart />
      </Box>
      <Box>{cart.length > 0 ? <ShoppingCart /> : <EmptyCart />}</Box>
    </Container>
  );
}

export default HomeCart