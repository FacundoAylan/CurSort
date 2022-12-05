import React from 'react';
import { Link } from "react-router-dom";
import { Center, Button, ButtonGroup } from '@chakra-ui/react';


function Load (){
  return(
    <Center>
      <h1>Bienvenidos a Curosort</h1>
      <Link to="/home" className="linkStart">
        <ButtonGroup variant='outline' spacing='6'>
          <Button colorScheme='blue'>Ingresar</Button>
        </ButtonGroup>
      </Link>
    </Center>
  )
}

export default Load;