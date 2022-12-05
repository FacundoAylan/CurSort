import NavBar from './Component/navBar';
import Home from './Component/home';
import { Container, Box} from '@chakra-ui/react';
import LoginButton from './Component/LoginButton/LoginButton';
import LogoutButton from './Component/LogoutButton/LogoutButton';
import Profile from './Component/Profile/Profile';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  return (
    <Container maxW='100%' h='100%' border='1px' p='0' >
      {/* los dejo aca en app de prueba, para que lo pasen al home cuando este listo */}
      {!isAuthenticated && <LoginButton />}            
      {isAuthenticated && <LogoutButton/>}
      <Profile/>
      <Box background='#4FD1C5'maxW='100%' h='10%' >
        <NavBar/>
      </Box>
      <Box h='100%' maxW='100%'>
        <Home/>
      </Box>
      {/* <Box mt='6%' ml='14%'>
        <Form/>
      </Box> */}
    </Container>
)}

export default App;
