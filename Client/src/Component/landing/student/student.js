import React from "react";
import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
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
          <Text>I completed the second part of Cursort's Full Stack Programming course! I learned a lot about how to interact with the final user.</Text>
        </CardBody>
      </Card>
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader>
          <Center>
            <Heading size="md"> Pablo</Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>Another of many goals accomplished! Thanks Cursort, I really learned a lot!
I greatly appreciate the professionalism of the tutors.</Text>
        </CardBody>
      </Card>
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader>
          <Center>
            <Heading size="md"> Mailen</Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>Happy to have completed my first UX/UI course at CurSort! 😁 It was a challenging experience but full of satisfaction.</Text>
        </CardBody>
      </Card>
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader>
          <Center>
            <Heading size="md"> Jonathan </Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>Finally, after a long time looking for where to study programming, a friend recommended me CurSort. I started from scratch and today I am already working in a big company as a JS developer.</Text>
        </CardBody>
      </Card>
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader>
          <Center>
            <Heading size="md"> Federico </Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>The classes far exceeded my expectations. The good vibes and the level of the instructors were the things that I liked the most!</Text>
        </CardBody>
      </Card>
      <Card border='2px' borderColor='white' background='#3E4AB8' color='white'>
        <CardHeader>
          <Center>
            <Heading size="md"> Juan</Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>Without a doubt, it was a great experience that allowed me to acquire new knowledge and continue training. I don't want to stop learning and growing professionally.</Text>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}

export default Student;
