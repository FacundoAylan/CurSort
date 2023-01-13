import React from 'react';
import { 
  Stack, 
  Button, 
  Text, 
  Center,
  Box,
  Flex
} from "@chakra-ui/react"
import { useHistory } from "react-router-dom";

function EmptyCart() {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  return (
    <Center>
      <Box>
        <Text 
          fontSize="lg" 
          fontWeight="bold" 
          color='#f1faee'
          mt='10rem'
          >
          No courses added to cart yet!
        </Text>
        
        <Center>
          <Button 
            colorScheme="teal" 
            variant="solid" 
            onClick={handleClick}
            mt='5rem'
            mb='-5rem'
            >
              ADD COURSES
          </Button>
        </Center>
      </Box>
    </Center>  
  );
}

export default EmptyCart