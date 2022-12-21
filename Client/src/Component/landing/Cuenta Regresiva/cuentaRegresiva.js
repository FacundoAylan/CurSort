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
        <Heading as="h1" fontSize="4xl" color='white'>
          Elige tu plan
        </Heading>
        <Text fontSize="lg" color={'white'}>
          Comience con una prueba gratuita de 14 días. No se necesita tarjeta de crédito. Cancelar en cualquier momento..
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
          <Box py={0} px={12}>
            <Text fontWeight="500" fontSize="2xl" color='black'>
              Experto
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
            py={1}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Más de 1000 cursos y 21 escuelas
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Certificado digital de cursos y escuelas
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Clases online en vivo
              </ListItem>
              
            </List>
            <Box w="80%" pt={2}>
              <Button w="full" colorScheme="red" >
                Suscribete a Experto
              </Button>
            </Box>
          </VStack>
        </Container>

        <Container bg='white' w='20%' p={0} m={0} borderRadius='12px' border='2px' borderColor='#3E4AB8'>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('#3E4AB8', 'red.700')}
                px={3}
                py={1}
                color='black'
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Mas Popular
              </Text>
            </Box>
            <Box py={2} px={12}>
              <Text fontWeight="500" fontSize="2xl" color='black'>
                Basico
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
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Clases grabadas.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5% de descuento.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  3 cursos gratis.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  certificado cursos online.
                </ListItem>
              </List>
              <Box w="80%" pt={1}>
                <Button w="full" colorScheme="red">
                  Suscribete a Basico
                </Button>
              </Box>
            </VStack>
          </Box>
        </Container>

        <Container bg='white' w='20%' p={0} m={0} borderRadius='12px' border='2px' borderColor='#3E4AB8' h='20%'>
          <Box py={0} px={12}>
            <Text fontWeight="500" fontSize="2xl" color='black'>
              Premium
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
            py={3}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Certificado digital de cursos y escuelas
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Profesores 24 horas.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                clases ilimitadas.
              </ListItem>
            </List>
            <Box w="80%" pt={5}>
              <Button w="full" colorScheme="red">
                Suscribete a Premium
              </Button>
            </Box>
          </VStack>
        </Container>
      </Stack>
    </Box>
  );
}

export default Regresiva;