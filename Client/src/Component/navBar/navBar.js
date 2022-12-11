import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LoginButton from '../LoginButton/LoginButton'
import LogoutButton from '../LogoutButton/LogoutButton'
import Profile from '../Profile/Profile'
import { useAuth0 } from "@auth0/auth0-react";
import {
  AlertIcon,
  Alert,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Input,
  ButtonGroup,
  Center,
  Container,
  Grid,
  GridItem,
  IconButton,
  InputGroup,
  InputRightElement,
  AlertDialog
} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import FilterCategory from '../InputFilter/FilterCategory';
import FilterDifficulty from '../InputFilter/FilterDifficulty';
import FilterDuration from '../InputFilter/FilterDuration';
import OrderPrice from '../InputOrder/OrderPrice';
import OrderPublished  from '../InputOrder/OrderPublished';
import OrderStar from '../InputOrder/OrderStar';
import {getCourses, createNewCategory} from '../../Redux/actions/index.js'

function NavBar({handleOrderByPrice, handleOrderByPublished, handleOrderByStar, setPagina}) {
  const initialState = {name: ''}
  let [category, setCategory] = React.useState(initialState);

  const {isAuthenticated, user} = useAuth0()

  const [name, setName] = useState("")
  const [alerta, setAlert] = useState(false)
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure()
  const onChange = (e) => {
    if (e.target.name === 'categoryname')
      setCategory({...category, name: e.target.value})
    else
      setName(e.target.value)
  }
  const onClick = () =>{
    setPagina(1);
    dispatch(getCourses(name));
  }
  const reset = () =>{
    dispatch(getCourses(''));
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewCategory(category))
    setCategory(initialState)
    setAlert(true)
  }

  return (
    <>
      {!isAuthenticated && <LoginButton/>}
      {isAuthenticated && <LogoutButton/>}
      {isAuthenticated && <Profile/>}
      <Button colorScheme="blue" onClick={onOpen} ml="96%" mt="1%">
        <label>☰</label>
      </Button>
      <Drawer placement="rigth" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <Button
            colorScheme="teal"
            variant="outline"
            h="4%"
            minW="4%"
            ml="80%"
            mt="3%"
            onClick={onClose}
          >
            X
          </Button>
          <DrawerHeader borderBottomWidth="1px">Cursort</DrawerHeader>
          <DrawerBody>
            <Container maxW="100%">
              <Grid templateRows="repeat(6, 40px) " gap={2}>
                <GridItem>
                  <FilterCategory />
                </GridItem>
                <GridItem>
                  <FilterDifficulty />
                </GridItem>
                <GridItem>
                  <FilterDuration />
                </GridItem>
                <GridItem>

                  <OrderPrice handleOrderByPrice={handleOrderByPrice}/>
                </GridItem>
                <GridItem>
                  <OrderPublished handleOrderByPublished={handleOrderByPublished}/>

                </GridItem>
                <GridItem>
                  <OrderStar handleOrderByStar={handleOrderByStar} />
                </GridItem>
              </Grid>
            </Container>

            <Container mt={4}>
              <InputGroup size='md'>
                <Input
                  pr='8rem'
                  placeholder='Buscando'
                  value={name}
                  onChange={onChange}
                />
                <InputRightElement >
                  <IconButton
                      colorScheme="blue"
                      aria-label="Search database"
                      icon={<SearchIcon />}
                      onClick={onClick}
                    />
                </InputRightElement>
              </InputGroup>
   

            </Container>

            <Center mt="2">
              <Link to="/crear" className="linkStart">
                <ButtonGroup variant="outline" spacing="6">
                  <Button colorScheme="blue">Create new curse</Button>
                </ButtonGroup>
              </Link>
                <ButtonGroup variant="outline" spacing="6" ml={2}>
                  <Button colorScheme="blue" onClick={reset}>Reset</Button>
                </ButtonGroup>

            </Center>
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
            

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default NavBar;