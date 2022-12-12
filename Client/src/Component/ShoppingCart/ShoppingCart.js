import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Box, Flex, Text, Container, Divider} from "@chakra-ui/react";
import CartItem from './CartItem';
import ButtonCart from './ButtonCart';
import EmptyCart from './EmptyCart';


function ShoppingCart() {

    const cart = useSelector(state => state.cart);
    
    const [cartItem, setCartItem] = useState(
        JSON.parse(localStorage.getItem('cart'))
    );

    const setLocalStorage = () => {
        setCartItem(cart);
        localStorage.setItem('cart', JSON.stringify(cartItem));
    }

    const [total, setTotal] = useState(0);

    const getTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        });
        setTotal(total);
        return total
    }

    // const getQuantity = () => {
    //     let quantity = 0;
    //     cart.forEach((item) => {
    //         quantity += item.quantity;
    //       return quantity
    //     });

  return (
    <Container maxW="100%" maxH="-moz-initial" bg="#f1faee">
      <Box display="flex" w="100%" h="100%" backgroundColor="#f1faee">
        <Flex>
        {
          cart.map((course, index) => (
            <div>
            <CartItem key={index} data={course}/>
            <Divider orientation='horizontal' />
            </div>
          ))
        }
        </Flex>
      <ButtonCart getTotal={getTotal}/>
      </Box>
    </Container>
  );
}

export default ShoppingCart