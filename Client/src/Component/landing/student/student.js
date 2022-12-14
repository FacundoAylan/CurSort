import React from "react";
import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  Button,
  CardFooter,
  Center,
} from "@chakra-ui/react";

function Student() {
  return (
    <SimpleGrid
      spacing={2}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      p={4}
    >
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader >
          <Center>
            <Heading size="md"> Facundo</Heading>
          </Center>
        </CardHeader>
        <CardBody >
          <Text>Este es un pequeño comentario para la landing</Text>
        </CardBody>
        <CardFooter>
          <Button background='black'>View here</Button>
        </CardFooter>
      </Card>
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader>
          <Center>
            <Heading size="md"> Pablo</Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button background='black'>View here</Button>
        </CardFooter>
      </Card>
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader>
          <Center>
            <Heading size="md"> Mailen</Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button background='black'>View here</Button>
        </CardFooter>
      </Card>
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader>
          <Center>
            <Heading size="md"> Jonathan </Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button background='black'>View here</Button>
        </CardFooter>
      </Card>
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader>
          <Center>
            <Heading size="md"> Federico </Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button background='black'>View here</Button>
        </CardFooter>
      </Card>
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader>
          <Center>
            <Heading size="md"> Juan</Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button background='black'>View here</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}

export default Student;
