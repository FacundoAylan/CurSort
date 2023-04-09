// En este archivo se encuentra el componente del nombre con el logo que se muestra en navbar
import React from "react";
import { Link } from "react-router-dom";
import {
  Box, Center
} from "@chakra-ui/react";
import './title.css'

function Title () {
  return(
    <Center className="box">
      <Link to='/'>Cursort</Link>
    </Center>
  )
}

export default Title;