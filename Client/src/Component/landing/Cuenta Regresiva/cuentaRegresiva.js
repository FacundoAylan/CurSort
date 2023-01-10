import React from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Container,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function Regresiva() {
  return (
    <Box py={1}>
      <VStack>
        <Heading as="h1" fontSize="4xl" color='white' mt='10'>
          Choose the plan that best suits you!
        </Heading>
        <Text fontSize="lg" color={'white'}>
          At CurSort we have a plan for each level, so that you can get the most out of your potential.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
        >
        <Container bg='white' w='20%' p={0} m={0} borderRadius='12px' border='2px' borderColor='#3E4AB8' h='20%'>
          <Box py={2} px={12}>
            <Text fontWeight="500" fontSize="2xl" color='black'>
              Adventurer
            </Text>
            <HStack justifyContent="center" color='black'>
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900" color='black'>
                79
              </Text>
              <Text fontSize="3xl"  color='black'>
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('#3E4AB8', 'gray.700')}
            py={2}
            borderBottomRadius='12px'
          >
            <List spacing={3} textAlign="start" px={8} pt='5%' color='white' fontWeight='600' fontSize='sm'>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                24/7 online help
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Free access to all the applications you need
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Access to our community for team learning
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                2 free beginner level courses
              </ListItem>
              
            </List>
            <Box w="80%" pt={2}>
              <Button w="full" colorScheme="red" >
                Suscribe
              </Button>
            </Box>
          </VStack>
        </Container>

        <Container bg='white' w='20%' p={0} borderRadius='12px' border='2px' borderColor='#3E4AB8'>
          <Box position="relative" >
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('#3E4AB8', 'red.700')}
                px={2}
                py={1}
                color='black'
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Most popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl" color='black'>
                Champion
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600" color='black'>
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900" color='black'>
                  149
                </Text>
                <Text fontSize="3xl"  color='black'>
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('#3E4AB8', 'gray.700')}
              py={2}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px='9' py='4' color='white' fontWeight='600' fontSize='sm'>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Acces to our job bank
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Exclusive workshops
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Acces to +1000 virtual manuals
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  3 free middle level courses
                </ListItem>
              </List>
              <Box w="80%" pt={1}>
                <Button w="full" colorScheme="red">
                  Suscribe
                </Button>
              </Box>
            </VStack>
          </Box>
        </Container>

        <Container bg='white' w='20%' p={0} m={0} borderRadius='12px' border='2px' borderColor='#3E4AB8' h='20%'>
          <Box py={2} px={12}>
            <Text fontWeight="500" fontSize="2xl" color='black'>
              Legendary
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600" color='black'>
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900" color='black'>
                349
              </Text>
              <Text fontSize="3xl" color='black'>
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('#3E4AB8', 'gray.700')}
            pt={4}
            pb={2}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px='8' color='white' fontWeight='600' fontSize='sm'>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Premium clients for freelancers
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                International conventions
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Priority in our assistance service
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                3 free advanced level courses
              </ListItem>
            </List>
            <Box w="80%" pt={3}>
              <Button w="full" colorScheme="red">
                Suscribe
              </Button>
            </Box>
          </VStack>
        </Container>
      </Stack>
    </Box>
  );
}

export default Regresiva;