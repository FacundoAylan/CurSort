import React from "react";
import Regresiva from "./Cuenta Regresiva/cuentaRegresiva";
import Carousel from "../carrucel/carrucel";
import NavbarLanding from './navbarLanding.js/navbar'
import{Box, Center} from "@chakra-ui/react";
import Student from './student/student';
import Footer from "./footer/footer";
import Promociones from "./Promociones/Promociones";

function Landing () {
  return (
    <>
      <Box>
        <Promociones/>
      </Box>

      <Box background="#3E4AB8" maxW="100%" maxH="15%">
        <NavbarLanding />
      </Box>
      

      <Box>
        {/* carruce */}
        <Carousel/>
      </Box>
      <Box mt="1%">
        <Center fontSize={40} color='white'>
          Estudiantes
        </Center>
        <Student />
      </Box>
      {/* Promociones  */}
      <Box maxW="100%" bg="rgba(0, 0, 0, 0.774)">
        <Regresiva />
      </Box>
      {/* Promociones */}

      <Box mt="2%">
        <Footer />
      </Box>
    </>
  );
}
export default Landing;