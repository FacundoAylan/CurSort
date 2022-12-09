import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, IconButton,  Flex} from '@chakra-ui/react';
import { PhoneIcon} from '@chakra-ui/icons'

function Cards({nombre, imagen, descripcion, precio, id}){


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
          h='130%'
        />
        <Stack h='100%'>
          <h1>{nombre}</h1>
          <Flex>
            <Text color='blue.600' fontSize='40px'>
              {`$${precio}`}
            </Text>
            <CardFooter background='#3E4AB8' w='10%' h='10%'>
              <IconButton
                size='1%'
                icon={<PhoneIcon />}
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
