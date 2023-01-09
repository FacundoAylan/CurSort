import React, { useState } from "react";
import {contact} from '../../Redux/actions/index';
import { useDispatch } from "react-redux";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import Swal from "sweetalert2";

function Contact() {
  const [user, setUsers] = useState(
    {
      "name": '',
      "mail": '',
      "message": ''
    });
    const dispatch = useDispatch();
  const mensaje = (e) => {
    setUsers({
      ...user,
      [e.target.id]: e.target.value
    })
  }
  const send = () => {
    dispatch(contact(user))
    Swal.fire({
        position: "top-center",
        icon: 'success',
        title: `Consulta enviada con exito`,
        fontSize: "5px",
        showConfirmButton: false,
        timer: 1500,
      });
      setUsers({
        ...user,
        "name": '',
        "mail": '',
        "message": ''
      })
  }

  return (
    <Container bg="#3E4AB8" maxW="full" mt={0} centerContent overflow="hidden" h='100vh'>
      <Box mr='99%' pt='4px'>
        <Link to="/">
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<ArrowLeftIcon />}
          />
        </Link>
      </Box>
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Thank you for choosing our community.
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start"> 
                    <Flex ml='60px'>
                      <MdPhone color="#1970F1" size="20px"/>
                      <Text ml={2}>
                        +54-1175260856
                      </Text>
                    </Flex>
                    <Flex pl='40px'>
                      <MdEmail color="#1970F1" size="20px" />
                        <Text ml={2}>
                          cursort.2022@gmail.com
                        </Text>
                    </Flex>
                    <Flex pl='70px'>
                    <MdLocationOn color="#1970F1" size="20px" />
                      <Text ml={2}>
                        Argentina
                      </Text>
                    </Flex>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <a href="https://github.com/FacundoAylan/CurSort">
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsGithub size="40px" />}
                        ml='90px'
                      />
                    </a>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" id='name' value={user.name} onChange={mensaje} />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md"  id='mail' value={user.mail} onChange={mensaje}/>
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                          value={user.message}
                          id='message' onChange={mensaje}
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                      <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                          onClick={send}
                          ml='60px'
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default Contact;
