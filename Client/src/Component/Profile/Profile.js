import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Center, Grid, GridItem } from "@chakra-ui/react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Grid templateRows="25px repeat(2,45px)">
      <Center>
        <GridItem>{isAuthenticated && <h2>{user.name}</h2>}</GridItem>
      </Center>
      <GridItem>
        <Button>Compras</Button>
      </GridItem>
      <GridItem>
        <Button>Setting</Button>
      </GridItem>
      {/* <img src={user.picture}alt='imagen' /> */}
      {/* <h2>Nombre: {user.name}</h2>
        {user.email_verified === true ?<h3>Verificado</h3>:<button>actualizar perfil</button>} */}
    </Grid>
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
