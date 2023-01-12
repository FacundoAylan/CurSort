import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button} from '@chakra-ui/react'
import { Wrap, WrapItem,Avatar} from "@chakra-ui/react";
import { setUserLocalStore, setLoguinLocalStore } from '../../Redux/actions/index';
import { useDispatch } from 'react-redux';



const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUserLocalStore([]));
    dispatch(setLoguinLocalStore(true));
    loginWithRedirect();
  }

  return (
    <Wrap>
    <WrapItem>
      <Avatar
        name=""
        src=""
        onClick={() => handleLogin()}
        cursor='poiner'
      />
    </WrapItem>
  </Wrap>
  )
}

export default LoginButton