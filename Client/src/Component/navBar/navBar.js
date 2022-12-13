import React from 'react';

import LoginButton from '../LoginButton/LoginButton'
import LogoutButton from '../LogoutButton/LogoutButton'
// import Profile from '../Profile/Profile'
import { useAuth0 } from "@auth0/auth0-react";

import {
  Grid,
  GridItem, 
  IconButton
} from "@chakra-ui/react";


import Title from './title/title';
import Search from './search/search'
import { GrCart } from 'react-icons/gr';
import { useHistory } from 'react-router-dom';

function NavBar({setPagina,setOrder}) {
  
  // const {isAuthenticated, user} = useAuth0()

  const {isAuthenticated, user} = useAuth0()

  const history = useHistory();


  // const reset = () =>{
  //   dispatch(getCourses(''));
  // }



  const handleClick = (e) => {
    e.preventDefault();
    history.push('/cart');
}

  return (
    <>

        <Grid templateColumns="repeat(3,1fr)">
        <GridItem mt='2%'>
          {/* componente del titulo */}
          <Title/>
        </GridItem>
        <GridItem mt='2%'>
           {/* componente del search */}
          <Search setOrder={setOrder} setPagina={setPagina}/>
        </GridItem>

          <GridItem mt='13%' ml='85%'>
              {!isAuthenticated && <LoginButton/>}
              {isAuthenticated && <LogoutButton/>}
             {/* {isAuthenticated && <Profile/>} */}
             
             <IconButton
                onClick={handleClick}
                size='1%'
                icon={<GrCart/>}
              />
                     
          </GridItem>
      </Grid> 
    </>
  )};
export default NavBar;