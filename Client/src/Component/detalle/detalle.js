
import React, { useEffect} from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { Image, Stack, Heading, Text, Button, Box, ListItem, List, SimpleGrid, StackDivider, VStack, Flex, Container, useColorModeValue, IconButton, HStack} from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { getDetail, addToCart, getCourses  } from "../../Redux/actions";
import { BsGithub} from 'react-icons/bs';
import { ArrowLeftIcon } from '@chakra-ui/icons'


function Detalle() {

  let { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector(state => state.courseDetail)
  const history = useHistory();

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

    //este useEffect para poder ver el carrito actualizado
    useEffect(() => { 
      dispatch(getCourses(''));
  }, [dispatch]);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(addToCart(id));
        history.push('/cart');
    }
  return (
    <Container maxW={"100%"} bg="Black" color="white" m={0} p={2}>
      <Box pt="30px">
        <Link to="/home" className="backCreate">
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<ArrowLeftIcon />}
          />
        </Link>
      </Box>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 1, md: 10 }}
        py={{ base: 1, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={course.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 2, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {course.name}
            </Heading>
            <Text fontWeight={300} fontSize={"2xl"} color="white">
              {`$${course.price} USD`}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            {/* <VStack spacing={{ base: 4, sm: 6 }}>
              {course.temario.map(temario=>{
                return (
                  <Text fontSize={"lg"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                    maxime modi nam officiis porro, quae, quisquam quos
                    reprehenderit velit? Natus, totam.
                  </Text>
                )
              })}
            </VStack> */}
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>{`Instructor: ${course.instructor}`}</ListItem>
                  <ListItem>{`duracion: ${course.duration} hs`}</ListItem>{" "}
                </List>
                <List spacing={2}>
                  <ListItem>{`Fecha de lanzamiento: ${course.fecha}`}</ListItem>
                  <ListItem>{`dificultad: ${course.difficulty}`}</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    {course.description}
                  </Text>
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={(e) => handleClick(e)}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
          <a href="https://github.com/FacundoAylan/CurSort">
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: "#0D74FF" }}
              icon={<BsGithub size="40px" />}
            />
            </a>
          </Stack>
        </Stack>
        <HStack
          mt={{ lg: 10, md: 10 }}
          spacing={5}
          px={5}
          alignItems="flex-start"
        ></HStack>
      </SimpleGrid>
    </Container>
  );
}

export default Detalle;
