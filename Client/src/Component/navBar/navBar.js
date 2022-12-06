import React from 'react';
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
  GridItem
} from "@chakra-ui/react";
import FilterCategory from '../InputFilter/FilterCategory';
import FilterDifficulty from '../InputFilter/FilterDifficulty';
import FilterDuration from '../InputFilter/FilterDuration';
import OrderPrice from '../InputOrder/OrderPrice';
import OrderPublished  from '../InputOrder/OrderPublished';
import OrderStar from '../InputOrder/OrderStar';
import OrderAZ from '../InputOrder/OrderAZ';

function NavBar({handleOrderByPrice, handleOrderByName, handleOrderByPublished, handleOrderByStar}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button colorScheme='blue' onClick={onOpen} ml='96%' mt='1%'>
        <label>☰</label>
      </Button>
      <Drawer placement='rigth' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <Button colorScheme='teal' variant='outline' h='4%' minW='4%' ml='80%' mt='3%' onClick={onClose}>
            X
          </Button>
          <DrawerHeader borderBottomWidth='1px'>Cursort</DrawerHeader>
          <DrawerBody>
            <Container maxW='100%'>
              <Grid templateRows="repeat(6, 40px) " gap={2}>
                <GridItem>
                  <FilterCategory/>
                </GridItem>
                <GridItem>
                  <FilterDifficulty/>
                </GridItem>
                <GridItem>
                  <FilterDuration/>
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
                <GridItem>
                  <OrderAZ handleOrderByName={handleOrderByName}/>
                </GridItem>
              </Grid>
            </Container>
            <Container mt={4}>
              <Input placeholder='Basic usage' />
            </Container>
            <Center mt='2'>
              <Link to="/crear" className="linkStart">
              <ButtonGroup variant='outline' spacing='6'>
                <Button colorScheme='blue'>crear</Button>
              </ButtonGroup>
              </Link>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
};
export default NavBar;
