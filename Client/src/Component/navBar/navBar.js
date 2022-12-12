import React,{useState} from 'react';
import { useDispatch } from "react-redux";
import LoginButton from '../LoginButton/LoginButton'
import LogoutButton from '../LogoutButton/LogoutButton'
import Profile from '../Profile/Profile'
import { useAuth0 } from "@auth0/auth0-react";

import {
  Button,
  Input,
  InputRightElement,
  AlertIcon,
  Alert,
  ButtonGroup,
  InputGroup,
  MenuList,
  Menu,
  MenuButton,
  Grid,
  GridItem,
  Center,
  IconButton
} from "@chakra-ui/react";

import {getCourses, createNewCategory} from '../../Redux/actions/index';
import Title from './title/title';
import Search from './search/search'
import { GrCart } from 'react-icons/gr';
import { useHistory } from 'react-router-dom';

function NavBar({ setPagina}) {
  // const {isAuthenticated, user} = useAuth0()

  const initialState = {name: ''}
  let [category, setCategory] = React.useState(initialState);

  const {isAuthenticated, user} = useAuth0()

  const [name, setName] = useState("")
  const [alerta, setAlert] = useState(false)
  const dispatch = useDispatch();


  const onChange = (e) => {
    setCategory({...category, name: e.target.value})
  }

  const history = useHistory();


  // const reset = () =>{
  //   dispatch(getCourses(''));
  // }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewCategory(category))
    setCategory(initialState)
    setAlert(true)
  }

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/cart');
}

  return (
    <>

            <Menu>
              <Center mt='2'>
                <ButtonGroup variant="outline" spacing="6" ml={2}>
                  <MenuButton as={Button} colorScheme='blue'>
                    New category
                  </MenuButton>
                </ButtonGroup>
              </Center>
              <MenuList>
                <InputGroup size='md'>
                  <Input
                    id='categoryname'
                    type='text'
                    name='categoryname'
                    value={category.name}
                    pr='4.5rem'
                    placeholder='Name...'
                    onChange={(e) => onChange(e)} 
                  />
                  <InputRightElement width='4.5rem'>
                    <Button colorScheme="blue" size='sm' onClick={(e) => handleOnSubmit(e)} type='submit'>
                      Create
                    </Button>
                  </InputRightElement>
                </InputGroup>    
              </MenuList>
            </Menu>            
            
            {alerta && 
            <Alert status='success'>
              <AlertIcon />
                Category created successfully!
            </Alert>}
  
      <Grid templateColumns="repeat(3,1fr)">
        <GridItem mt='2%'>
          {/* componente del titulo */}
          <Title/>
        </GridItem>
        <GridItem mt='2%'>
           {/* componente del search */}
          <Search setPagina={setPagina}/>
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