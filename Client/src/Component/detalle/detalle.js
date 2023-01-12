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
  Center,
  Textarea,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
 
  Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetail,
  addToCart,
  getCourses,
  postComment,
} from "../../Redux/actions";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { ArrowForwardIcon, ArrowLeftIcon } from "@chakra-ui/icons";
// import { useAuth0 } from "@auth0/auth0-react";

function Detalle() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courseDetail);
  const [rating, setRating] = useState(4);
  const history = useHistory();
  // const local = useSelector((state) => state.local);

  const user = JSON.parse(window.localStorage.getItem("user"));
  const loguin = JSON.parse(window.localStorage.getItem("loguin"));

  const reviews = course.reviews;

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
    const userEmail = loguin ? user.email : "";
    // console.log("userEmail", user.email);

    let [value, setValue] = React.useState({
      name: userEmail,
      text: "",
      courseId: id,
      rating: "",
    });

    let handleInputChange = (e) => {      
      setValue({...value, [e.target.id]:e.target.value });
    };

    
    const handleComment = (e) => {
      dispatch(postComment(value));
      setTimeout(() => {
        setValue({ name: userEmail, text: "", rating: "", courseId: id });
        dispatch(getDetail(id));
        history.push(`/detalle/${id}`);
      }, 500);
    };

    return (
      <>
       <Text mb="8px">Rating: </Text>
       <Select
            // placeholder="Enter an option:"
            id="rating"
            onChange={handleInputChange}
            color='white'
          >
            <option style={{backgroundColor: '#191E29'}}>Enter an option:</option>
            <option style={{backgroundColor: '#191E29'}} value="1">1</option>
            <option style={{backgroundColor: '#191E29'}} value="2">2</option>
            <option style={{backgroundColor: '#191E29'}} value="3">3</option>
            <option style={{backgroundColor: '#191E29'}} value="4">4</option>
            <option style={{backgroundColor: '#191E29'}} value="5">5</option>
          </Select>
        <Text mb="8px">Comment :</Text>
        <Textarea
          name="comment"
          id="text"
          //value={value}
          onChange={handleInputChange}
          placeholder="Leave a comment"
          size="sm"
        />
        <Flex justifyContent='end'>
          <Button
            onClick={(e) => handleComment(e)}
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline"
            mt='2'
          >
            Send
          </Button>
        </Flex>
        {/* acordeon de comentarios*/}
        <Box>
          <Accordion defaultIndex={[0]} allowMultiple>
            {reviews &&
              reviews.map((review) => {
                // console.log("dentro del map", course);
                return (
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Comment from : {review.name}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{review.text}</AccordionPanel>
                  </AccordionItem>
                );
              })}
          </Accordion>
        </Box>
      </>
    );
  }

 
  return (
    <Container maxW={"100%"} bg="#191E29" color="white" m={0} px={4}>
      <Box pt="10px">
        <Link to="/home">
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<ArrowLeftIcon />}
            position='fixed'
            my='3'
            ml='1'
          />
        </Link>
      </Box>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 1, md: 10 }}
        // py={{ base: 1, md: 10 }}
        pt='1'
        pb='4'
        >
        <Box>
          <Flex justifyContent='center'>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={course.image}
              w={"70%"}
            />
          </Flex>
    
          <Box mt='10'>
              <Comentario />
          </Box>
        </Box>
        <Stack spacing={{ base: 2, md: 10 }}>
          <Box as={"header"}>
            <Flex justifyContent='center'>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {course.name}
              </Heading>
            </Flex>
            <Rating rating={rating} />
            <Flex mt='5' alignItems='center' justifyContent='space-around'>
              <Text fontWeight={300} fontSize={"2xl"} color="white">
                {`Price: US $${course.price}`}
              </Text>
    
              <Button
                size={"lg"}
                py={"7"}
                bg={useColorModeValue("green", "gray.50")}
                color={useColorModeValue("white", "gray.900")}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(4px)",
                  boxShadow: "2xl",
                }}
                onClick={(e) => handleClick(e)}
                justifyItems='end'
              >
                Add to cart
              </Button>
            </Flex>
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
                  <ListItem>{`Duration: ${course.duration} hs`}</ListItem>{" "}
                </List>
                <List spacing={2}>

                  <ListItem>{`Released date: ${course.released && course.released.slice(0, 10)}`}</ListItem>
                  <ListItem>{`Difficulty: ${course.difficulty}`}</ListItem>

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
                About this course
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

        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default Detalle;
