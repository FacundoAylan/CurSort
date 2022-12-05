import React from 'react';
import {useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Input} from '@chakra-ui/react'

function NavBar() {
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
            <Input placeholder='Basic usage' />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
};
export default NavBar;
