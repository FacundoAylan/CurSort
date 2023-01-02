import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import {
  Grid,
  GridItem,
  Box,
  Image,
  // useColorModeValue,
  Icon,
  // chakra,
  Tooltip,
  Center,
  Flex,
  Button,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import Swal from "sweetalert2";



const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

function Rating({ rating }) {
  return (
    <Flex maxW="100%">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                color={i < rating ? "yellow" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf
                background="white"
                key={i}
                style={{ marginLeft: "1" }}
              />
            );
          }
          return (
            <BsStar background="white" key={i} style={{ marginLeft: "1" }} />
          );
        })}
    </Flex>
  );
}

function Cards({ name, image, price, id, categories, rating }) {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const cart = useSelector((state) => state.cart);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addToCart(id));
    const course = courses.find((course) => course.id === id);
    const itemRepeated = cart.find((course) => course.id === id);
    if (itemRepeated) {
      return Swal.fire({
        position: "top-center",
        icon: "warning",
        title: `${course.name} ya se encuentra en el carrito`,
        fontSize: "5px",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: `${course.name} se agregó al carrito`,
      fontSize: '5px',
      showConfirmButton: false,
      timer: 1500
    })
  };
  return (
    <Link to={`/detalle/${id}`} className="linkStart">
      <Grid
        p={0}
        templateRows=" 45% 55%"
        background="#3E4AB8"
        h="400px"
        color="black"
        // borderRadius={12}
      >
        <GridItem>
          <Image
            // borderTopRadius={12}
            src={image}
            alt={`Picture of ${name}`}
            h="100%"
            w="100%"
            p={0}
            m={0}
          />
        </GridItem>

        <GridItem w="100%" >
          {/* cursos nuevos  */}
          {/* <Box d="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box> */}
          {/* cursos nuevos   */}

          {/* nombre del course */}
          <Center fontSize="100%" p={0}>
            {name}
          </Center>
          <Center>{categories}</Center>
          {/* nombre del course */}

          {/* puntuacion */}
          <Box>
            <Center ml="1%">
              <Rating rating={rating} />
            </Center>
            {/* puntuacion */}

            {/* precio */}
            <Center fontSize="40px" color="#03C139">
              {`$${price.toFixed(2)}`}
            </Center>
            {/* precio */}

            {/* boton de compra */}
            <Center >
              <Tooltip
                label="Add to cart"
                bg="#03C139"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
                onClick={handleClick}
              >
                {/* <Link to="/cart"> */}
                  <Button background="none">
                    <Icon
                      as={FiShoppingCart}
                      h={7}
                      w={7}
                      alignSelf={"center"}
                      color="black"
                      onClick={handleClick}
                    />
                  </Button>
                {/* </Link> */}
              </Tooltip>
            </Center>
            {/* boton de compra */}
          </Box>
        </GridItem>
      </Grid>
    </Link>
  );
}
export default Cards;
