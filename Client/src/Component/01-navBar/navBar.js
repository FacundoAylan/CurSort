import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton'
import LogoutButton from '../LogoutButton/LogoutButton'
// import Profile from '../Profile/Profile'
import { useAuth0 } from "@auth0/auth0-react";
import './navbar.css'

import {
  Box,
  Button,
  Center,
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
              .then(response => localStorage.setItem('jwt', response.data))
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
      <Grid templateColumns="15% 60% 25%" position="fixed" backgroundColor='#3E4AB8' zIndex='100'  w='100vw' h='12%'>
        <GridItem>
          {/* componente del titulo */}
          <Title />
        </GridItem>
        <GridItem className='search'>
          {/* componente del search */}

          <Search setOrder={setOrder} setPagina={setPagina} setHome={setHome}/>
        </GridItem>

        <GridItem className='icons' >
          <Center>
          <Flex>
            <Box pt={1} className='button'>
              <Link to="/checkout">
                <Button>
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
          </Center>
        </GridItem>
      </Grid>
    </>
  );};
export default NavBar;