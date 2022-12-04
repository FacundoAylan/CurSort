import React from "react";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup,Button } from '@chakra-ui/react'
             
function Cards(){
  return(
    <Card maxW='90%' h='100%' border='1px' ml={2}>
      <CardBody maxW='100%' h='40%' background='#4FD1C5'>
        <Image
          src='https://goncy.netlify.app/static/d52f717f79aca102bdd13af15e455879/23f4e/banner.jpg'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          border='1px' borderColor='gray.200'
        />
        <Stack  spacing='3'>
          <Heading size='md'>Proyecto Final</Heading>
          <Text>
            Esto es una practica de Chakra css de un component Card
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter background='#158034 '>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Cards;
