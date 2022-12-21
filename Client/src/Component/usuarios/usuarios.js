import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  IconButton,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Slider,
  Switch,
  FormLabel,
} from '@chakra-ui/react';
import {DeleteIcon, EditIcon} from '@chakra-ui/icons';

function Usuarios() {
  return (
    <Center py={6} >
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("#3E4AB8", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={
            "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Lindsey James
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @lindsey_jam3s
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #music
          </Badge>
        </Stack>

        <Box>
          <Stack pt='8px'>
              <p htmlFor='isChecked'>On/Off:</p>
              <Center>
                <Switch id='isChecked' p={0} colorScheme='blue' bg='black' w='15.7%' borderRadius='30px' border='2px' borderColor='black'/>
              </Center>
          </Stack>
        </Box>

        <Center>
          
          <Stack mt={3} direction={"row"} spacing={4}>
            <IconButton
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              maxW="10px"
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
              aria-label="Search database"
              icon={<DeleteIcon/>}
            />

            <IconButton
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
              maxW="10px"
              icon={<EditIcon/>}
            />
          </Stack>
        </Center>

      </Box>
    </Center>
  );
};

export default Usuarios;