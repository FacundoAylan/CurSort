import React, { useEffect } from "react";
import Regresiva from "./Cuenta Regresiva/cuentaRegresiva";
import Carousel from "../carrucel/carrucel";
import NavbarLanding from './navbarLanding.js/navbar'
import{Box, Center} from "@chakra-ui/react";
import Student from './student/student';
import Footer from "./footer/footer";
import Promociones from "./Promociones/Promociones";
import Nosotros from "./nosotros/nosotros";
import Instructor from "./instructor/instructor";
import { useLocalStorage } from "../../hooks/useLocalStorage"; //modificación mai local storage
import { useDispatch, useSelector } from "react-redux";
import { setUserLocalStore } from "../../Redux/actions/index";

function Landing () {
  //modificación mai local storage
  const userLocalStorage = useSelector(state => state.user)
  console.log('userLocalStorage', userLocalStorage)

  useLocalStorage("cart", []);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userLocalStorage) {
      dispatch(setUserLocalStore({}));
    }
  }, [userLocalStorage])

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
      <Box maxW="100%" bg='#191E29'>
        <Regresiva />
      </Box>
      {/* Promociones */}
      <Box p={6}>           
        <Center color="white" fontSize={35} p={4}>
            Integrantes del proyecto:
        </Center>
        <Nosotros/>
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
