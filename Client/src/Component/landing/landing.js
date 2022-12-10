import React from "react";
import Carrucel from "../carrucel/carrucel";
import NavbarLanding from './navbarLanding.js/navbar'
import{Box} from "@chakra-ui/react";
import Student from './student/student';
import Footer from "./footer/footer";

function Landing () {
  return(
    <>
      <Box background="#3E4AB8" maxW="100%" maxH="15%">
        <NavbarLanding/>
      </Box>
      <Box>
      {/* carruce */}
      <Carrucel />
    </Box>
    <Box mt='2%'>
      <Student/>
    </Box>
    <Box mt='2%'>
      <Footer/>
    </Box>
    </>
  )
}
export default Landing;