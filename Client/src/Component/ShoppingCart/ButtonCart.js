import React, { useEffect } from 'react'
import { Button, Text, GridItem, Center, Box, Grid, Flex } from "@chakra-ui/react"
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
    <Flex 
      width='100%' 
      justifyContent='center' 
      position='fixed' 
      zIndex='100' 
      bottom='0' 
      >
    <GridItem 
      width='100%' 
      py='3'
      pb='5'
      borderTop='2px'
      borderColor='blue'
      bg='#101725'
      >
      <Box>
        <Center>
          <Text 
            fontSize="lg" 
            fontWeight="bold" 
            color='#f1faee'
            mb='4'
            >
              TOTAL US ${getTotal()}
          </Text>
        </Center>
      </Box>
      <Center><Box>
        <Button 
          colorScheme="teal" 
          variant="outline" 
          onClick={handleClick}
          >
            Continue buying
        </Button>
        <Button 
          onClick={handleCheckout} 
          colorScheme="teal" 
          variant="solid" 
          ml="10px"
          >
            Finalize purchase
        </Button>
      </Box></Center>
    </GridItem>
    </Flex>
  );
}

export default ButtonCart