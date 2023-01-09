import React, { useEffect } from 'react'
import { Button, Text, GridItem, Center, Box } from "@chakra-ui/react"
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function ButtonCart({getTotal}) {

  const history = useHistory();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    getTotal()
  }, [getTotal])

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/home');
  }

  const handleCheckout = (e) => {
    e.preventDefault();
    !isAuthenticated ? loginWithRedirect() : history.push('/checkout/information');
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