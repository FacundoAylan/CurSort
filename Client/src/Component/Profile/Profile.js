import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";


const Profile = () => {
   const {user} = useAuth0()

  return (
    <div>     
      {/* <img src={user.picture}alt='imagen' /> */}
      {/* <h2>Nombre: {user.name}</h2>
      {user.email_verified === true ?<h3>Verificado</h3>:<button>actualizar perfil</button>} */}
    </div>
       
  );
};

export default Profile;

// email: "swistoniukpablo@gmail.com";
// email_verified: true;
// family_name: "Swistoniuk";
// given_name: "Pablo";
// locale: "es-419";
// name: "Pablo Swistoniuk";
// nickname: "swistoniukpablo";
// picture: "https://lh3.googleusercontent.com/a/ALm5wu1EQf9HP_lTr6NHAURcqeMzf57iOkBcKFmwjDYS=s96-c";
// sub: "google-oauth2|105952523446250351908";
// updated_at: "2022-12-04T19:16:00.216Z";
