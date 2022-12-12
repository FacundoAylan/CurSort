import React,{useState} from 'react';
import { useDispatch } from "react-redux";
import LoginButton from '../LoginButton/LoginButton'
import LogoutButton from '../LogoutButton/LogoutButton'
import Profile from '../Profile/Profile'
import { useAuth0 } from "@auth0/auth0-react";
import {
  Wrap,
  WrapItem,
  Avatar,
  Grid,
  GridItem,
  Center,
  IconButton
} from "@chakra-ui/react";

import {getCourses} from '../../Redux/actions/index';
import Title from './title/title';
import Search from './search/search'
import { GrCart } from 'react-icons/gr';
import { useHistory } from 'react-router-dom';

function NavBar({ setPagina}) {
  // const {isAuthenticated, user} = useAuth0()

  const {isAuthenticated, user} = useAuth0()

  const [name, setName] = useState("")
  const dispatch = useDispatch();
  const history = useHistory();

  const reset = () =>{
    dispatch(getCourses(''));
  }
  
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
          <Search setPagina={setPagina}/>
        </GridItem>

          <GridItem>
            <Center mt='20%' ml='200px'>

            <Wrap>
              <WrapItem>
                <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
              </WrapItem>
            </Wrap>
              {!isAuthenticated && <LoginButton/>}
              {isAuthenticated && <LogoutButton/>}
              {isAuthenticated && <Profile/>}
              <Wrap>
             <IconButton
                onClick={handleClick}
                size='1%'
                icon={<GrCart/>}
              />
            </Wrap>
            </Center>
          </GridItem>
      </Grid> 
    </>
  )};
export default NavBar;