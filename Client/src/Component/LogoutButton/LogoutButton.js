import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, WrapItem, Avatar } from "@chakra-ui/react";
import Profile from "../Profile/Profile";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Menu>
        <MenuButton>
          <WrapItem>
            <Avatar name="prueba" src="" cursor="poiner" />
          </WrapItem>
        </MenuButton>
        <MenuList>
          <Profile />
          <Button
            onClick={() => logout()}
            background="black"
            color="white"
            border="2px"
            borderColor="white"
            borderRadius="12px"
            ml="10px"
          >
            cerrar sesion
          </Button>
        </MenuList>
      </Menu>
    </>
  );
};

export default LogoutButton;
