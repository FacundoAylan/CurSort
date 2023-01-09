import React from "react";
import { Image, Stack, Text, Button, Box, SimpleGrid, StackDivider, Flex, useColorModeValue, HStack, Center} from '@chakra-ui/react';



function Instructor() {

    return (
    <Center maxW={"80%"} bg="white" color="black"  ml={'9%'} borderRadius={12} p={0} maxH='400px' pr={2}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 1, md: 1 }}
        py={{ base: 1, md: 2 }}
      >
        <Flex>
        <Image
            rounded={"md"}
            alt={"product image"}
            src={'https://s.udemycdn.com/home/non-student-cta/instructor-mobile-v3.jpg'}
            w={"100%"}
            h={{ base: "100%", sm: "20px", lg: "300px" }}
          />
        </Flex>
        <Stack spacing={{ base: 2, md: 10 }}>
    
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >

            <Box color='black' pt={10}>
              <Text fontSize={30}>
                Conviértete en instructor
              </Text>
              <Text>
              Instructores de todo el mundo enseñan a millones de estudiantes en Cursort. Proporcionamos las herramientas y las habilidades para que enseñes lo que te apasiona.
              </Text>
            </Box>
          </Stack>
            <Button bg='#3E4AB8'>
              Empieza a enseñar hoy mismo
            </Button>

        </Stack>
        <HStack
          mt={{ lg: 2, md: 10 }}
          spacing={5}
          px={5}
          alignItems="flex-start"
        ></HStack>
      </SimpleGrid>
    </Center>
  );
}

export default Instructor;
