import React from "react";
import { Grid, GridItem, Container, Box, Center } from "@chakra-ui/react";
import Cards from "../Card/Card";
import NavBar from "../navBar/navBar";
import Paginado from '../paginado/paginado'
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
// importo el json desde la api
var data = require("./api.json");

function Home() {
  let info = data.cursos;
  return (
    <Container maxW="100%" h="100%" border="1px" p="0">
      <Box background="#4FD1C5" maxW="100%" h="10%">
        <Link to='/disable/'>
          <Button>Profile</Button>
        </Link>
        <NavBar />
      </Box>
      <Box h="100%" maxW="100%">
        <Grid
          templateColumns="repeat(3, 0.3fr)"
          gap={9}
          templateRows="repeat(2, 0.1fr)"
          pt={4}
          pl={20}
          m={0}
        >
          {info.slice(0, 6).map((value) => {
            return (
              <GridItem>
                <Cards
                  nombre={value.nombre}
                  imagen={value.imagen}
                  descripcion={value.descripcion}
                  precio={value.precio}
                />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
      <Center pt={6}>
        <Paginado max={info.length}/>
      </Center>
    </Container>
  );
}

export default Home;
