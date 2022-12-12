import React from 'react'
import { useAuth0,  } from "@auth0/auth0-react";
import { Button} from '@chakra-ui/react'
import { Menu,MenuButton,MenuList,MenuItem, WrapItem,Avatar} from "@chakra-ui/react";
import  Profile from '../Profile/Profile'

const LogoutButton = () => {
    const { logout } =useAuth0()
  return (
    <>
    <Menu>
  <MenuButton>
  <WrapItem>
    <Avatar
      name="prueba"
      src=""
      cursor='poiner'
      />
      </WrapItem>
  </MenuButton>
  <MenuList>
    <Profile/>
    <Button onClick={()=> logout()}>cerrar sesion</Button>
  </MenuList>
</Menu>

    </>
  )
}

export default LogoutButton