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
import { useLocalStorage } from '../../hooks/useLocalStorage';


function NavBar({ setPagina, setOrder, setHome}) {

  // const {isAuthenticated, user} = useAuth0()

  const {isAuthenticated} = useAuth0()

  // const reset = () =>{
  //   dispatch(getCourses(''));
  // }

  useEffect(()=>{
      if(isAuthenticated){        
           axios('http://localhost:3001/getToken')
              .then(response => window.localStorage.setItem('jwt', response.data))
              .catch(error => console.log(error));
      }
  },[isAuthenticated])

  const local = useSelector((state) => state.local);

  const [storage, setStorage] = useLocalStorage("cart", local)
  
  useEffect(() => {
    setStorage(local);
  }, [local]);

  const loguin = useSelector(state => state.loguin)

  return (
    <>
      <Grid templateColumns="25% 50% 25%" position="fixed" backgroundColor='#3E4AB8' zIndex='100'  w='100vw' h='105px'>
        <GridItem mt="2%">
          {/* componente del titulo */}
          <Title />
        </GridItem>
        <GridItem mt="2%">
          {/* componente del search */}

          <Search setOrder={setOrder} setPagina={setPagina} setHome={setHome}/>
        </GridItem>

        <GridItem mt="15%" ml="60%" pr='10px'>
          <Flex >
            <Box pt={1}>
              <Link to="/checkout">
                <Button
                  color="white"
                  border="2px"
                  borderColor="white"
                  borderRadius="12px"
                >
                  <IconButton size="1%" icon={<GrCart />} />
                  {local.length > 0 && (
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
                          {local.length}
                        </sub>
                      </b>
                    </div>
                  )}
                </Button>
              </Link>
            </Box>

            <Box pl={1}>
              {loguin ? <LogoutButton /> : <LoginButton />}
              {/* {isAuthenticated && <Profile/>} */}
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );};
export default NavBar;