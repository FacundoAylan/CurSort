import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton'
import LogoutButton from '../LogoutButton/LogoutButton'
// import Profile from '../Profile/Profile'
import { useAuth0 } from "@auth0/auth0-react";

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem, 
  IconButton
} from "@chakra-ui/react";


import Title from './title/title';
import Search from './search/search'
import { GrCart } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import axios from 'axios';



function NavBar({ setPagina, setOrder}) {

  // const {isAuthenticated, user} = useAuth0()

  const {isAuthenticated} = useAuth0()

  // const reset = () =>{
  //   dispatch(getCourses(''));
  // }

  useEffect(()=>{
      if(isAuthenticated){        
           axios('http://localhost:3001/getToken')
              .then(response => localStorage.setItem('jwt', response.data))
              .catch(error => console.log(error));
      }
  },[isAuthenticated])

  const cart = useSelector(state => state.cart)

  console.log(localStorage.getItem('jwt'));


  return (
    <>
      <Grid templateColumns="repeat(3,1fr)" position="fixed" backgroundColor='#3E4AB8' zIndex='100' mt="-8%">
        <GridItem mt="2%">
          {/* componente del titulo */}
          <Title />
        </GridItem>
        <GridItem mt="2%">
          {/* componente del search */}

          <Search setOrder={setOrder} setPagina={setPagina} />
        </GridItem>

        <GridItem mt="15%" ml="62%">
          <Flex>
            <Box pt={1}>
              <Link to="/checkout">
                <Button
                  color="white"
                  border="2px"
                  borderColor="white"
                  borderRadius="12px"
                >
                  <IconButton size="1%" icon={<GrCart />} />
                  {cart.length > 0 && (
                    <div>
                      <b>
                        <sub
                          style={{
                            fontSize: "10px",
                            marginLeft: "5px",
                            color: "#023e8a",
                            marginRight: "none",
                          }}
                        >
                          {cart.length}
                        </sub>
                      </b>
                    </div>
                  )}
                </Button>
              </Link>
            </Box>

            <Box pl={5}>
              {!isAuthenticated && <LoginButton />}
              {isAuthenticated && <LogoutButton />}
              {/* {isAuthenticated && <Profile/>} */}
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );};
export default NavBar;