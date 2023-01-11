import React, { useEffect } from 'react'
import { Button, Text, GridItem, Center, Box } from "@chakra-ui/react"
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux';
import { getLoguinLocalStore } from '../../Redux/actions/index';


function ButtonCart({getTotal}) {

  const history = useHistory();
  const dispatch = useDispatch();
  const { loginWithRedirect } = useAuth0();
  
  useEffect(() => {
    getTotal()
    dispatch(getLoguinLocalStore())
  }, [getTotal])
  
  const loguin = window.localStorage.getItem("loguin");

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/home');
  }

  const handleCheckout = (e) => {
    e.preventDefault();
    !loguin ? loginWithRedirect() : history.push('/checkout/information');
  }


  return (
    <GridItem>
      <Box ml='65%'>
        <Text fontSize="lg" fontWeight="bold" color='#f1faee'  m="10px">
          TOTAL             USD  {getTotal()}
        </Text>
      </Box>
      <Box ml='50%'>
        <Button onClick={handleCheckout} colorScheme="blue" variant="solid" m="10px">
          FINALIZAR COMPRA
        </Button>
        <Button colorScheme="blue" variant="outline" onClick={handleClick}>
          CONTINUAR COMPRANDO
        </Button>
      </Box>
    </GridItem>
  );
}

export default ButtonCart