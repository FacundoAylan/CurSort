import React, { useEffect , useState} from "react";
import { Grid, GridItem, Container, Box, Center, Image} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import Cards from "../Card/Card";
import NavBar from "../navBar/navBar";
import Paginado from '../paginado/paginado';
import {getCourses} from "../../Redux/actions";


// importo el json desde la api
// var data = require("./api.json");

function Home() {
  
  
  let info = useSelector(state => state.courses, () => false); // el false, verifica el estado anterior 
  console.log(info)
  const dispatch = useDispatch();
  const [pagina, setPagina] = useState(1);
  const porPagina = 6;
  const maximo = Math.ceil(info.length / porPagina);


  useEffect(() => {
    dispatch(getCourses(''));
  }, [dispatch])

  if(info <=1){
    //alert('No hay coincidencias con esos filtros. ¿Desea reiniciar su busqueda?')
    dispatch(getCourses(''))
  }
  
  // const flickityOptions = {
  //     initialIndex: 2
  //   }


    return (
      <Container maxW="100%"  p="0" heightMode="min">
        <Box background="#3E4AB8" maxW="100%" maxH="50%">
          <NavBar setPagina={setPagina} />
        </Box>

        <Center mt='1%'>
          <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} />
        </Center>
        <Box h="40%" maxW="100%">
          <Grid templateColumns="repeat(6, 0.2fr)" gap={4} pt={4} p={5} m={0}>
            {info &&
              info
                .slice(
                  (pagina - 1) * porPagina,
                  (pagina - 1) * porPagina + porPagina
                )
                .map((value) => {
                  return (
                    <GridItem >
                      <Cards
                        name={value.name}
                        image={value.image}
                        price={value.price}
                        id={value.id}
                        category={value.categories[0]}
                      />
                    </GridItem>
                  );
                })}
          </Grid>
        </Box>
      </Container>
    );


}

export default Home;
