import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody, CardFooter, Image, Stack, Text, IconButton,  Flex} from '@chakra-ui/react';

import { addToCart } from "../../Redux/actions";
import { GrCart } from "react-icons/gr";
import { useDispatch } from "react-redux";


function Cards({nombre, imagen, descripcion, precio, id}){

  const history = useHistory();
  
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addToCart(id));
    history.push('/cart');
}


  return(
    <Card maxW='90%' h='150%' border='1px' ml={2} background='#3E4AB8'>
      <Link to={`/detalle/${id}`} className="linkStart">
      <CardBody maxW='100%' h='90%'  p={0}>
        <Image
          src={imagen}
          alt=''
          borderRadius='lg'
          border='1px' borderColor='gray.200'
          p={0}
          w='100%'
          h='115%'
        />
        <Stack h='100%'>
          <h1>{nombre}</h1>
          <Flex>
            <Text color='blue.600' fontSize='40px'>
              {`$${precio}`}
            </Text>
            <CardFooter background='#3E4AB8' w='10%' h='10%'>
              <IconButton
                onClick={handleClick}
                size='1%'
                icon={<GrCart/>}
              />
            </CardFooter>
          </Flex>
        </Stack>
      </CardBody>
      </Link>
    </Card>
  );
};

export default Cards;
