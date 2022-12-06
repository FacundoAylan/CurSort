import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
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
  InputRightElement
} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import FilterCategory from '../InputFilter/FilterCategory';
import FilterDifficulty from '../InputFilter/FilterDifficulty';
import FilterDuration from '../InputFilter/FilterDuration';
import OrderPrice from '../InputOrder/OrderPrice';
import OrderPublished  from '../InputOrder/OrderPublished';
import OrderStar from '../InputOrder/OrderStar'
import {getCourses} from '../../Redux/actions/index.js'

function NavBar({setPagina}) {
  const [name, setName] = useState("")
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onChange = (e) => {
    setName(e.target.value)
  }
  const onClick = () =>{
    setPagina(1);
    dispatch(getCourses(name));
  }
  const reset = () =>{
    dispatch(getCourses(''));
  }
  return (
    <>
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
                  <OrderPrice />
                </GridItem>
                <GridItem>
                  <OrderPublished />
                </GridItem>
                <GridItem>
                  <OrderStar />
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
                  <Button colorScheme="blue">crear</Button>
                </ButtonGroup>
              </Link>
                <ButtonGroup variant="outline" spacing="6" ml={2}>
                  <Button colorScheme="blue" onClick={reset}>Reset</Button>
                </ButtonGroup>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default NavBar;
