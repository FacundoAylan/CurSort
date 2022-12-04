import './App.css';
import NavBar from './Component/navBar';
import Home from './Component/home';
import { Container, Box} from '@chakra-ui/react';

function App() {
  
  return (
    <Container maxW='100%' h='100%' border='1px' p='0' >
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
  );
}

export default App;
