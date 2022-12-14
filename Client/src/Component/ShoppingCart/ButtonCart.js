import React from 'react'
import { Button, Text, GridItem } from "@chakra-ui/react"
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function ButtonCart({getTotal}) {

  const history = useHistory();
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/home');
  }

  const handleCheckout = (e) => {
    e.preventDefault();
    !isAuthenticated && loginWithRedirect()
  }


  return (
    <GridItem>
      <Text fontSize="lg" fontWeight="bold" color='#f1faee'  m="10px">
        TOTAL             USD  {getTotal()}
      </Text>
      <Button onClick={handleCheckout} colorScheme="blue" variant="solid" m="10px">
        FINALIZAR COMPRA
      </Button>
      <Button colorScheme="blue" variant="outline" onClick={handleClick}>
        CONTINUAR COMPRANDO
      </Button>
    </GridItem>
  );
}

export default ButtonCart