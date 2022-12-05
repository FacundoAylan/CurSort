import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function Paginado({ max }) {
  const pagination = [];
  for (let i = 1; i <= max; i++) {
    pagination.push(i);
  }
  return (
    <>
      <ButtonGroup variant="outline" spacing="6">
        <Button colorScheme="blue">Prev.</Button>
      </ButtonGroup>
      {pagination.map((value) => {
        return (
          <ButtonGroup variant="outline" spacing="6" p={1}>
            <Button colorScheme="blue">{value}</Button>
          </ButtonGroup>
        );
      })}
      <ButtonGroup variant="outline" spacing="6">
        <Button colorScheme="blue">Next</Button>
      </ButtonGroup>
    </>
  );
}

export default Paginado;
