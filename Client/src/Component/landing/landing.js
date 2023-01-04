import React from "react";
import Regresiva from "./Cuenta Regresiva/cuentaRegresiva";
import Carousel from "../carrucel/carrucel";
import NavbarLanding from './navbarLanding.js/navbar'
import{Box, Center, Text} from "@chakra-ui/react";
import Student from './student/student';
import Footer from "./footer/footer";
import Promociones from "./Promociones/Promociones";
import Nosotros from "./nosotros/nosotros";
import Instructor from "./instructor/instructor";

function Landing () {
  return (
    <>
      <Box>
        <Promociones />
      </Box>

      <Box background="#3E4AB8" maxW="100%" maxH="15%">
        <NavbarLanding />
      </Box>

      <Box>
        {/* carruce */}
        <Carousel />
      </Box>
      <Box mt="1%">
        <Center fontSize={40} color="white">
          Estudiantes
        </Center>
        <Student />
      </Box>
      {/* Promociones  */}
      <Box maxW="100%" bg="#191E29">
        <Regresiva />
      </Box>
      {/* Promociones */}
      <Box p={6}>
        <Center color="white" fontSize={35} p={4}>
          ¿Quienes somos?
        </Center>
        <Box fontSize={18}>
        <Text color='white' >
          Somos un grupo de estudiantes de Full Stack Developer(soy Henry), Esta
          pagina es nuestro proyecto final , que se trata de un ecommerce de
          ventas de cursos de programación, en el cual vas a poder: 
        </Text>
        <Text color='white'>
          1- Ver los cursos disponibles.
        </Text>
        <Text color='white'>
          2-Ver los detalles de cada curso por separado.
        </Text>
        <Text color='white'>
          3-Agregar cursos a tu carrito y luego comprarlos.
        </Text>
        <Text color='white'>
          4-poder registrarte o ingresar con tu cuenta de Gmail.
        </Text>
        <Text color='white'>
          5-Comunicarte con nosotros a través de tu correo electrónico.
        </Text>
        <Text color='white'>
          6-Responder tus consultas mas rápido a través del chatbot.
        </Text>
        <Text color='white'>
          7- Filtrar los cursos por ( precio, rating, dificultad, duración, fecha de lanzamiento) 
        </Text>
        <Text color='white'>
          Si te otorgan los permisos de administrador vas a poder crear nuevos cursos y subirlos.
          
        </Text>
        </Box>
        <Center color="white" fontSize={35} p={4}>
            Integrantes del proyecto:
        </Center>
        <Nosotros />
      </Box>

      <Box>
        <Instructor />
      </Box>

      <Box mt="2%">
        <Footer />
      </Box>
    </>
  );
}
export default Landing;