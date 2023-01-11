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
          <Box ml='8rem'>
            <Image src='https://i.ibb.co/9bwtk3s/Logo2.png' alt='' width='12rem' />
          </Box>
        </GridItem>

        <GridItem mt='4%' mr='5rem'>
            <Link to='/home'>
              <Button p={4} ml='120px'>Courses</Button>
            </Link>
            <Link to='/Admin'>
              <Button p={4} ml={4}>Admin</Button>
            </Link>
            <Link to='/Contact'>
              <Button p={4} ml={4}>Contact us</Button>
            </Link>
            <Button p={4} ml={4}>
              <a href='#Knowus' p={4} ml={4}>Know us</a>
            </Button>
        </GridItem>

      </Grid> 
    </Flex>
  )};
export default NavbarLanding;