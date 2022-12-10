// En este archivo se encuentra el componente del nombre con el logo que se muestra en navbar
import React from "react";
import { Link } from "react-router-dom";
import {
  Image,
  Box
} from "@chakra-ui/react";

function Title () {
  return(
    <Box ml='15%' mt='4%'>
      <Link to='/'>
        <Image src='https://i.ibb.co/9bwtk3s/Logo2.png' alt='' w='50%' />
      </Link>
    </Box>
  )
}

export default Title;