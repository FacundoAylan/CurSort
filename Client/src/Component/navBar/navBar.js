import React from 'react';
import { useDispatch } from "react-redux";

// import LoginButton from '../LoginButton/LoginButton'
// import LogoutButton from '../LogoutButton/LogoutButton'
// import Profile from '../Profile/Profile'
// import { useAuth0 } from "@auth0/auth0-react";
import {
  Wrap,
  WrapItem,
  Avatar,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Center
} from "@chakra-ui/react";
import { ChevronDownIcon } from  '@chakra-ui/icons'
import {getCourses} from '../../Redux/actions/index.js';
import Title from './title.js/title';
import Search from './search/search'

function NavBar({ setPagina}) {
  // const {isAuthenticated, user} = useAuth0()
  const dispatch = useDispatch();
  const reset = () =>{
    dispatch(getCourses(''));
  }
  return (
    <>
      {/* {!isAuthenticated && <LoginButton/>}
      {isAuthenticated && <LogoutButton/>}
      {isAuthenticated && <Profile/>} */}
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
              <Menu  mt='70px' background="red">
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} background='none'>
                  nombre
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>

            </Center>
          </GridItem>

          {/* <ButtonGroup variant="outline" spacing="6" ml={2}>
            <Button colorScheme="blue" onClick={reset}>
              Reset
            </Button>
          </ButtonGroup> */}
      </Grid>
    </>
  );
};
export default NavBar;