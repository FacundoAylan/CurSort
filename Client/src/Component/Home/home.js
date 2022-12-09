import React, { useEffect , useState, Component} from "react";
import { Grid, GridItem, Container, Box, Center, Image } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import Cards from "../Card/Card";
import NavBar from "../navBar/navBar";
import Paginado from '../paginado/paginado';
import {getCourses} from "../../Redux/actions";
import Carousel from 'nuka-carousel';


// importo el json desde la api
// var data = require("./api.json");

function Home() {
  
  
  let info = useSelector(state => state.courses, () => false);
  const dispatch = useDispatch();
  const [pagina, setPagina] = useState(1);
  const porPagina = 6;
  const maximo = Math.ceil(info.length / porPagina);

  useEffect(() => {
    dispatch(getCourses(''));
  }, [dispatch])

  const flickityOptions = {
      initialIndex: 2
    }
  return (
    <Container maxW="100%" h="100%" p="0">
      <Box background="#3E4AB8" maxW="100%" maxH="50%">
        <NavBar setPagina={setPagina} />
      </Box>
      {/* carruce */}
      <Carousel wrapAround={true} slidesToShow={3} >
        <Box>
          <Image src="https://i.ytimg.com/vi/k0kT6mwq7mY/maxresdefault.jpg"  mt='3%'/>
        </Box>
        <Box>
          <Image src="https://edteam-media.s3.amazonaws.com/courses/original/440bf729-4f2b-49a6-a0c7-7cf65a8bd31b.png" mt='3%'/>
        </Box>
        <Box>
          <Image src="https://i.ytimg.com/vi/okHy95wG484/maxresdefault.jpg"  mt='3%'/>
        </Box>
        <Box>
          <Image src="https://i.ytimg.com/vi/okHy95wG484/maxresdefault.jpg"  mt='3%'/>
        </Box>
        <Box>
          <Image src="https://i.ytimg.com/vi/okHy95wG484/maxresdefault.jpg"  mt='3%'/>
        </Box>
      </Carousel>

      <Box h="40%" maxW="100%">
        <Grid
          templateColumns="repeat(6, 0.5fr)"
          gap={1}
          // templateRows="repeat(2, 0.1fr)"
          pt={4}
          pl={20}
          m={0}
        >
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
                      nombre={value.name}
                      imagen={value.image}
                      descripcion={value.description}
                      precio={value.price}
                      id={value.id}
                    />
                  </GridItem>
                );
              })}
        </Grid>
      </Box>
      <Center pt={5}>
        <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} />
      </Center>
    </Container>
  );
}

export default Home;
