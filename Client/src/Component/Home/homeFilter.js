import React from "react";
import {
  Grid,
  GridItem,
  Container,
  Box,
  Center
} from "@chakra-ui/react";
import Cards from "../Card/Card";
import Paginado from "../paginado/paginado";

function HomeFilter({info, pagina, setPagina, maximo, porPagina}) {

  return (
    <Container maxW="100%" p="0" heightMode="min">
        <Box h="100%" maxW="100%" >
          <Center mt="1%">
            <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} />
          </Center>
          <Grid templateColumns="repeat(5, 0.2fr)" templateRows='repeat(2,350px)' gap={4} pt={4} p={5} m={0}>
            {info &&
              info
                .slice(
                  (pagina - 1) * porPagina,
                  (pagina - 1) * porPagina + porPagina
                )
                .map((value) => {
                  return (
                    <GridItem>
                      <Cards
                        name={value.name}
                        image={value.image}
                        price={value.price}
                        id={value.id}
                        category={value.categories[0]}
                        createdAt={value.createdAt}
                      />
                    </GridItem>
                  );
                })}
          </Grid>
        </Box>

    </Container>
  );
}

export default HomeFilter;