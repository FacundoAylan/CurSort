import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import {
  Grid,
  GridItem,
  Box,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";


function NavbarLanding() {
  // const {isAuthenticated, user} = useAuth0()

  return (
    <Flex>
      <Grid templateColumns="repeat(2,1fr)">
        <GridItem p={0}  m={0}>
          <Box ml='2%' mt='1%'>
            <Image src='https://i.ibb.co/9bwtk3s/Logo2.png' alt='' w='25%' />
          </Box>
        </GridItem>

        <GridItem p={0} mt='4%'>
            <Link to='/home'>
              <Button p={4} ml={40}>Cursos</Button>
            </Link>
            <Link to='/Admin'>
              <Button p={4} ml={4}>Administrador</Button>
            </Link>
            <Link to='/Contact'>
              <Button p={4} ml={4}>Contactanos</Button>
            </Link>
            <Button p={4} ml={4}>
              <a href='#footer' p={4} ml={4}>Nosotros</a>
            </Button>
        </GridItem>

      </Grid> 
    </Flex>
  )};
export default NavbarLanding;