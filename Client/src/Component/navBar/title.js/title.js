// En este archivo se encuentra el componente del nombre con el logo que se muestra en navbar
import React from "react";
import {
  Heading,
  Wrap,
  WrapItem,
  Avatar,
  Flex,
  Spacer,
} from "@chakra-ui/react";

function Title () {
  return(
    <Flex gap={3}>
    <Heading
      textShadow="    
        0 0 5px rgb(0, 255, 42),
        0 0 10px rgb(0, 255, 106),
        0 0 20px rgb(0, 255, 34),
        0 0 40px rgb(59, 127, 38),
        0 0 80px rgba(38, 104, 127, 1),
        0 0 90px rgba(38, 104, 127, 1),
        0 0 100px rgba(38, 104, 127, 1),
        0 0 140px rgba(38, 104, 127, 1),
        0 0 180px rgb(38, 127, 38);"
    >
      Cursort
    </Heading>
    <Wrap>
      <WrapItem>
        <Avatar name='' src='https://imagen.research.google/main_gallery_images/a-brain-riding-a-rocketship.jpg' h='40px' w='40px'/>
      </WrapItem>
    </Wrap>
  </Flex>
  )
}

export default Title;