import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import {
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  ListItem,
  List,
  SimpleGrid,
  StackDivider,
  Flex,
  Container,
  useColorModeValue,
  IconButton,
  HStack,
  Center,
  Textarea,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetail,
  addToCart,
  getCourses,
  postComment,
} from "../../Redux/actions";
import { BsGithub, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { ArrowForwardIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";

function Detalle() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courseDetail);
  const [rating, setRating] = useState(4);
  const history = useHistory();
  const local = useSelector((state) => state.local);
  //console.log('local', local)
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  //este useEffect para poder ver el carrito actualizado
  useEffect(() => {
    dispatch(getCourses(""));
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addToCart(id));
    history.push("/checkout");
  };

  
  function Rating({ rating }) {
    return (
      <Center>
        <Flex maxW="200%" h="50px">
          {Array(5)
            .fill("")
            .map((_, i) => {
              const roundedRating = Math.round(rating * 2) / 2;
              if (roundedRating - i >= 1) {
                return (
                  <Button bg="none">
                    <BsStarFill
                      key={i}
                      color={i < rating ? "yellow" : "gray.300"}
                    />
                  </Button>
                );
              }
              if (roundedRating - i === 0.5) {
                return (
                  <Button bg="none">
                    <BsStarHalf
                      background="white"
                      key={i}
                      style={{ marginLeft: "1" }}
                    />
                  </Button>
                );
              }
              return (
                <Button bg="none" onClick={setRating(i)}>
                  <BsStar
                    background="white"
                    key={i}
                    style={{ marginLeft: "1" }}
                  />
                </Button>
              );
            })}
        </Flex>
      </Center>
    );
  }

  function Comentario() {
    const userEmail = isAuthenticated ? user.email : "";
  
    let [value, setValue] = React.useState({
      name: userEmail,
      text: "",
      courseId: id
    });
  
    let handleInputChange = (e) => {
      let inputValue = e.target.value;
      setValue({ ...value, text: inputValue });
    };
  
    const handleComment = (e) => {
      dispatch(postComment(value));
      setValue({ name: userEmail, text: "", rating: "", courseId: id });
      history.push(`/detalle/${id}`);
    };

    return (
      <>
        <Text mb="8px">Comment :</Text>
        <Textarea
          name="comment"
          //value={value}
          onChange={handleInputChange}
          placeholder="Leave a comment"
          size="sm"
        />
        <Button
          onClick={(e) => handleComment(e)}
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          Send Comment
        </Button>
      </>
    );
  }
  return (
    <Container maxW={"100%"} bg="Black" color="white" m={0} p={0}>
      <Box pt="10px">
        <Link to="/home">
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
        py={{ base: 1, md: 10 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={course.image}
            w={"100%"}
            h={{ base: "100%", sm: "20px", lg: "450px" }}
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

            <Rating rating={rating} />

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
          <Box>
            <Comentario />
          </Box>
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
