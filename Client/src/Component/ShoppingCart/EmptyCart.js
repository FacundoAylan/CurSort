import React from 'react';
import { Stack, Button, Text } from "@chakra-ui/react"
import { useHistory } from "react-router-dom";

function EmptyCart() {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  return (
    <Stack direction="row" spacing={4} align="center">
      <Text fontSize="lg" fontWeight="bold">
        No hay cursos en el carrito
      </Text>
      <Button colorScheme="blue" variant="solid" onClick={handleClick}>
        ELEGIR CURSO
      </Button>
    </Stack>
  );
}

export default EmptyCart