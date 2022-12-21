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
      templateColumns="repeat(3,1fr)"
      templateRows='repeat(2,0.5fr)'
      p={1}
    >
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader >
          <Center>
            <Heading size="md"> Facundo</Heading>
          </Center>
        </CardHeader>
        <CardBody >
          <Text>Hoy llegó el día y completé la segunda parte del curso de Programación Full Stack de Cursort, aprendí demasiadas cosas para interactuar con el usuario...</Text>
        </CardBody>
      </Card>
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader>
          <Center>
            <Heading size="md"> Pablo</Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>Otro de tantos objetivos cumplidos! Gracias Cursort, realmente aprendí muchísimo!
Valoro enormemente el profesionalismo de los tutores....</Text>
        </CardBody>
      </Card>
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader>
          <Center>
            <Heading size="md"> Mailen</Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>¡Feliz de haber culminado mi primer curso de UX/UI en Cursort! 😁 Fue una experiencia retadora pero llena de aprendizaje.....</Text>
        </CardBody>
      </Card>
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader>
          <Center>
            <Heading size="md"> Jonathan </Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>El trabajo de varios meses en donde comencé desde 0, en donde tuve la oportunidad de crear esta solución pensada en las necesidades del usuario, con fundamento, mucha investigación, desafíos entregados..</Text>
        </CardBody>
      </Card>
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader>
          <Center>
            <Heading size="md"> Federico </Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>Las clases superaron mis expectativas ampliamente, la buena onda y las explicaciones fueron nada que ver a lo que yo pensaba....</Text>
        </CardBody>
      </Card>
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader>
          <Center>
            <Heading size="md"> Juan</Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>Sin duda fue una gran experiencia que me permitió adquirir nuevos conocimientos y seguir capacitándome. No quiero dejar de agradecer....</Text>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}

export default Student;
