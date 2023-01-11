import React from 'react';
import { Box, Flex, Container, GridItem} from "@chakra-ui/react";
import CartItem from './CartItem';

function ShoppingCart({data}) {
  
  return (
    <>

    <Container maxW="100%" maxH="100vh" m='none' >
      <Box display="flex" h="100%" backgroundColor="none" mt='0.5px'>
        <Flex minWidth='100%' alignItems='stretch' flexDirection="column" >
        { data &&
          data.map((course, index) => (
            <GridItem p='0' key={index}>
            <CartItem key={index} data={course} w='100%' justifyConten='space-between' />
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