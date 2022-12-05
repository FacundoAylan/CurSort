import NavBar from './Component/navBar';
import Home from './Component/home';
import LoginButton from './Component/LoginButton/LoginButton'
import { Container, Box} from '@chakra-ui/react';
import Profile from './Component/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    
    <LoginButton/>
    <Route path='/' component={Home}/>
    
    
    
    
    </BrowserRouter>
    
)}

export default App;
