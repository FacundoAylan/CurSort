import './App.css';
import LoginButton from './Component/LoginButton/LoginButton';
import LogoutButton from './Component/LogoutButton/LogoutButton';
import Profile from './Component/Profile/Profile';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {  isAuthenticated  } = useAuth0();
  return (
    <div className="App">
        <h1>Bienvenidos al proyecto Final</h1>
       
       {/* los dejo aca en app de prueba, para que lo pasen al home cuando este listo */}
       {!isAuthenticated && <LoginButton />}            
       {isAuthenticated && <LogoutButton/>}
       <Profile/>
            
      </div>
  );
}

export default App;
