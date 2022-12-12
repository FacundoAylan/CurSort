import React from 'react'
import { Stack, Button, Text } from "@chakra-ui/react"
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
    <Stack direction="row" spacing={4} align="center">
      <Text fontSize="lg" fontWeight="bold">
        TOTAL             USD  {getTotal()}
      </Text>
      <Button onClick={handleCheckout} colorScheme="blue" variant="solid">
        FINALIZAR COMPRA
      </Button>
      <Button colorScheme="blue" variant="outline" onClick={handleClick}>
        CONTINUAR COMPRANDO
      </Button>
    </Stack>
  );
}

export default ButtonCart