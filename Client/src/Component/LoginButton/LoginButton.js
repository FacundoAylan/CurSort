import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button} from '@chakra-ui/react'
import { Wrap, WrapItem,Avatar} from "@chakra-ui/react";



const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrap>
    <WrapItem>
      <Avatar
        name=""
        src=""
        onClick={() => loginWithRedirect()}
        cursor='poiner'
      />
    </WrapItem>
  </Wrap>
  )
}

export default LoginButton