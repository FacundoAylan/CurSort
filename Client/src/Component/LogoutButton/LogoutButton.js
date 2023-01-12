import {useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, WrapItem, Avatar } from "@chakra-ui/react";
import Profile from "../Profile/Profile";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserLocalStore, setLoguinLocalStore, getUserLocalStore } from "../../Redux/actions/index";

const LogoutButton = () => {
  const { logout, user } = useAuth0();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    user && axios.post("http://localhost:3001/users/create", user);
    dispatch(getUserLocalStore())
  },[user, dispatch])
  
  const userLocalStorage = JSON.parse(window.localStorage.getItem("user"))
  
  const handleLogout = () => {
    logout({ returnTo: 'http://localhost:3000/home' });
    dispatch(setUserLocalStore({}));
    dispatch(setLoguinLocalStore(false));
  };

  return (
    <>
      <Menu>
        <MenuButton>
          <WrapItem>
            <Avatar name={userLocalStorage.name} src={userLocalStorage.picture} />
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
