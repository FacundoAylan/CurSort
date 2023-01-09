// En este archivo se encuentra el componente del nombre con el logo que se muestra en navbar
import React from "react";
import { Link } from "react-router-dom";
import {
  Image,
  Box
} from "@chakra-ui/react";

function Title () {
  return(
    <Box ml='6%' mt='2%' bg='none'>
      <Link to='/'>
        <Image src='https://i.ibb.co/9bwtk3s/Logo2.png' alt='' w='70%' maxH='75px' />
      </Link>
    </Box>
  )
}

export default Title;