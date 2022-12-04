import './App.css';

import LoginButton from './Component/LoginButton/LoginButton';
import LogoutButton from './Component/LogoutButton/LogoutButton';
import Profile from './Component/Profile/Profile';
import FilterCategory from './Component/InputFilter/FilterCategory'
import FilterDifficulty from './Component/InputFilter/FilterDifficulty'
import FilterDuration from './Component/InputFilter/FilterDuration'
import OrderPrice from './Component/InputOrder/OrderPrice'
import OrderPublished from "./Component/InputOrder/OrderPublished";
import OrderStar from './Component/InputOrder/OrderStar'
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from '@chakra-ui/react'

function App() {
  const {  isAuthenticated  } = useAuth0();

   

  return (
    <Box className="App">
   
     
        {/* <h1>Bienvenidos al proyecto Final</h1> */}
       
       {/* los dejo aca en app de prueba, para que lo pasen al home cuando este listo */}
       {!isAuthenticated && <LoginButton />}            
       {isAuthenticated && 
       <div>
         <LogoutButton/>
         <Profile/>
         <h2>Filtros</h2>
         <FilterCategory/>
         <FilterDifficulty/>
         <FilterDuration/>
         <h2>Ordenamientos
         </h2>
         <OrderPrice/>
         <OrderPublished/>
         <OrderStar/>
       </div>
       }
      
            
      </Box>
  );
}

export default App;
