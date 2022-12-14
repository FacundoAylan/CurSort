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
import { useDispatch } from "react-redux";
import { getUserLocalStore, setUserLocalStore } from "../../Redux/actions/index";
import { useAuth0 } from '@auth0/auth0-react';


function Landing () {
  //modificación mai local storage
  useLocalStorage("cart", []);
  const { user } = useAuth0();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (user) {
      dispatch(setUserLocalStore(user));
    } else {
      dispatch(getUserLocalStore());
    }
  }, [user, dispatch])

  return (
    <>
      <Box background="#3E4AB8" width='100%' maxH="15%" position='fixed' zIndex='100'>
        <NavbarLanding/>
      </Box>
      
      <Box position='fixed' zIndex='100' width='100%' mt='4.8%'>
        <Promociones/>
      </Box>

      <Box pt='9rem'>
        {/* carruce */}
        <Carousel/>
      </Box>
      <Box mt="1%">
        <Center fontWeight='800' fontSize="4xl" color='white' mb='1%' mt='5%'>
          Our students
        </Center>
        <Student />
      </Box>
      {/* Promociones  */}
      <Box maxW="100%" bg='#191E29'>
        <Regresiva />
      </Box>
      {/* Promociones */}
      <Box p={6}>           
        <Center fontWeight='800' fontSize="4xl" color="white"  pb='4'>
            Our team
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
