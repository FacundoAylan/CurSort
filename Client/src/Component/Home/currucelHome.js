
import React, {useState,useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux'
import { filterCategory, getCourses } from "../../Redux/actions";

import Cards from "../Card/Card";
import { Box, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
};

function CarouselHome({ categorie }) {


  let info = useSelector(
    (state) => state.courses,
    () => false
  );

  // As we have used custom buttons, we need a reference variable to
  // change the state

  const [slider, setSlider] = React.useState(<Slider />);
  const dispatch = useDispatch();
  const filterCourse = info.filter((c) => c.categories.includes(categorie));
 

  useEffect(() => {
    dispatch(getCourses(''))
    // descomentar esta linea y comentar la linea de arriba 
    // dispatch(filterCategory('fronprueba'));
  }, [dispatch]);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  return (

    <Box
      position={"relative"}
      height={"400px"}
      width={"100%"}
      p={1}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <a name={categorie} href="">
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {filterCourse &&
            filterCourse.map((value) => {
              return (
                <Box p="10px">
                  <Cards
                    name={value.name}
                    image={value.image}
                    price={value.price}
                    id={value.id}
                    categories={value.categories}
                    rating={value.rating}
                    createdAt={value.createdAt}
                  />
                </Box>
              );
            })}
        </Slider>
      </a>
    </Box>
  );
}

export default CarouselHome;
