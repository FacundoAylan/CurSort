import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup,Button } from '@chakra-ui/react';


function Cards({nombre, imagen, descripcion, precio, id}){


  return(
    <Card maxW='90%' h='100%' border='1px' ml={2}>
      <CardBody maxW='100%' h='40%' background='#4FD1C5'>
        <Image

          src={imagen}

          alt='Green double couch with wooden legs'
          borderRadius='lg'
          border='1px' borderColor='gray.200'
        />
        <Stack  spacing='3'>
          <Heading size='md'>{nombre}</Heading>
          <Text>
            {descripcion}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter background='#158034 '>
        <ButtonGroup spacing='2'>

        <Link to={`/detalle/${id}`} className="linkStart">

          <Button variant='solid' colorScheme='blue'>
            Detalle
          </Button>
          </Link>
          <Button variant='ghost' colorScheme='blue'>
            Agregar al carro
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Cards;
