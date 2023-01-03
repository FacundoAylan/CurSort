import React from "react";
import ReactPlayer from 'react-player'
import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  IconButton,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@chakra-ui/icons";

function Compra() {
  const url='data:image/jpeg;base64,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'
  return (
    <>
      <Box pt="10px">
        <Link to="/home">
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<ArrowLeftIcon />}
          />
        </Link>
      </Box>
      <Box>
        <Text color='white' ml='40%' fontSize={30}>Bienvenido al curso</Text>
      </Box>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        h="70vh"
        w='98%'
        mt='1%'
        ml='1%'
      >
        {/* <Image
        objectFit="cover"
        w="70vw"
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      /> */}
        <Box w="70vw">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=7TKY-jksHRQ"
            className="react-player"
            playing
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>

        <CardBody color="white" overflow="scroll">
          <Box>List</Box>
          <Divider p={2} />
          <List spacing={3} pt={2}>
            <Flex position="relative">
              <Image
                w="110px"
                h="60px"
                src={url}
                alt="Caffe Latte"
                borderRadius={12}
              />
              <Box
                position="absolute"
                bg="black"
                borderRadius={6}
                ml="21%"
                mt="10%"
                w="12%"
                pl="1%"
              >
                7:06
              </Box>
              <ListItem p={2}>Clase nº1: Presentacion</ListItem>
            </Flex>
            <Flex position="relative">
              <Image
                w="110px"
                h="60px"
                src={url}
                alt="Caffe Latte"
                borderRadius={12}
              />
              <Box
                position="absolute"
                bg="black"
                borderRadius={6}
                ml="18%"
                mt="10%"
                w="14%"
                pl="1%"
              >
                17:26
              </Box>
              <ListItem p={2}>Clase nº2: Conceptos basicos</ListItem>
            </Flex>
            <Flex position="relative">
              <Image
                w="110px"
                h="60px"
                src={url}
                alt="Caffe Latte"
                borderRadius={12}
              />
              <Box
                position="absolute"
                bg="black"
                borderRadius={6}
                ml="18%"
                mt="10%"
                w="14%"
                pl="1%"
              >
                10:08
              </Box>
              <ListItem p={2}>Clase nº3: Practica</ListItem>
            </Flex>
            <Flex position="relative">
              <Image
                w="110px"
                h="60px"
                src={url}
                alt="Caffe Latte"
                borderRadius={12}
              />
              <Box
                position="absolute"
                bg="black"
                borderRadius={6}
                ml="21%"
                mt="10%"
                w="12%"
                pl="1%"
              >
                5:60
              </Box>
              <ListItem p={2}>Clase nº4: Nuevos conceptos</ListItem>
            </Flex>
            <Flex position="relative">
              <Image
                w="110px"
                h="60px"
                src={url}
                alt="Caffe Latte"
                borderRadius={12}
              />
              <Box
                position="absolute"
                bg="black"
                borderRadius={6}
                ml="18%"
                mt="10%"
                w="14%"
                pl="1%"
              >
                20:06
              </Box>
              <ListItem p={2}>Clase nº5: Practica</ListItem>
            </Flex>
            <Flex position="relative">
              <Image
                w="110px"
                h="60px"
                src={url}
                alt="Caffe Latte"
                borderRadius={12}
              />
              <Box
                position="absolute"
                bg="black"
                borderRadius={6}
                ml="18%"
                mt="10%"
                w="14%"
                pl="1%"
              >
                15:56
              </Box>
              <ListItem p={2}>Clase nº6: Configuraciones</ListItem>
            </Flex>
            <Flex position="relative">
              <Image
                w="110px"
                h="60px"
                src={url}
                alt="Caffe Latte"
                borderRadius={12}
              />
              <Box
                position="absolute"
                bg="black"
                borderRadius={6}
                ml="18%"
                mt="10%"
                w="14%"
                pl="1%"
              >
                13:26
              </Box>
              <ListItem p={2}>Clase nº7: ultios conceptos</ListItem>
            </Flex>
            <Flex position="relative">
              <Image
                w="110px"
                h="60px"
                src={url}
                alt="Caffe Latte"
                borderRadius={12}
              />
              <Box
                position="absolute"
                bg="black"
                borderRadius={6}
                ml="18%"
                mt="10%"
                w="14%"
                pl="1%"
              >
                17:26
              </Box>
              <ListItem p={2}>Clase nº8: finalizando modulo 1</ListItem>
            </Flex>
            <Flex position="relative">
              <Image
                w="130px"
                h="60px"
                src={url}
                alt="Caffe Latte"
                borderRadius={12}
              />
              <Box
                position="absolute"
                bg="black"
                borderRadius={6}
                ml="21%"
                mt="10%"
                w="12%"
                pl="1%"
              >
                9:06
              </Box>
              <ListItem p={2}>Clase nº9: Conceptos avanzados</ListItem>
            </Flex>
            <Flex position="relative">
              <Image
                w="110px"
                h="60px"
                src={url}
                alt="Caffe Latte"
                borderRadius={12}
              />
              <Box
                position="absolute"
                bg="black"
                borderRadius={6}
                ml="18%"
                mt="10%"
                w="14%"
                pl="1%"
              >
                19:08
              </Box>
              <ListItem p={2}>Clase nº10: Repaso</ListItem>
            </Flex>
            <Flex position="relative">
              <Image
                w="110px"
                h="60px"
                src={url}
                alt="Caffe Latte"
                borderRadius={12}
              />
              <Box
                position="absolute"
                bg="black"
                borderRadius={6}
                ml="18%"
                mt="10%"
                w="14%"
                pl="1%"
              >
                20:43
              </Box>
              <ListItem p={2}>Clase nº11: Finalizacion</ListItem>
            </Flex>
          </List>
        </CardBody>
      </Card>
    </>
  );
}

export default Compra;
