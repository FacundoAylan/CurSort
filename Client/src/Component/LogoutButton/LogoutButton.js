import {useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, WrapItem, Avatar } from "@chakra-ui/react";
import Profile from "../Profile/Profile";
import axios from "axios";

const LogoutButton = () => {
  const { logout, user } = useAuth0();

useEffect(()=>{
  axios.post("https://cursort-api.onrender.com/users/create", user);
},[user])
  
  const handleLogout = () => {
    logout({ returnTo: 'https://cursort.onrender.com/home' });
    window.LocalStorage.setItem("user", []);
  };

  return (
    <>
      <Menu>
        <MenuButton>
          <WrapItem>
            <Avatar name={user.name} src={user.picture} />
          </WrapItem>
        </MenuButton>
        <MenuList>
          <Profile />
          <Button
            onClick={()=> handleLogout()} //corregir el harcode
            background="black"
            color="white"
            border="2px"
            borderColor="white"
            borderRadius="12px"
            ml="10px"
            width='90%'
          >
            Logout
          </Button>
        </MenuList>
      </Menu>
    </>
  );
};

export default LogoutButton;
