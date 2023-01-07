import React, {useState,useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux'
import {
  Grid,
  GridItem,
  Container,
  Box,
  Center,
  SimpleGrid,
  Button,
  IconButton,
  // Image,
} from "@chakra-ui/react";
import Cards from "../Card/Card";
import NavBar from "../navBar/navBar";
import Paginado from "../paginado/paginado";
import { getCourses } from "../../Redux/actions";
// import CreateCategory from "../CreateCategory/CreateCategory";
import Footer from "../landing/footer/footer";
import Filter from "../navBar/filter/filter";
import { Link } from "react-router-dom";
import { SmallCloseIcon } from "@chakra-ui/icons";


// importo el json desde la api
// var data = require("./api.json");

function HomeFilter() {
  let info = useSelector(
    (state) => state.courses,
    () => false
  ); // el false, verifica el estado anterior
  console.log("Info: ", info)
  const dispatch = useDispatch();
  const [pagina, setPagina] = useState(1);
  const porPagina = 10;
  const maximo = Math.ceil(info.length / porPagina);

  let [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getCourses(""));
  }, [dispatch]);

  if (info <= 1) {
    //alert('No hay coincidencias con esos filtros. ¿Desea reiniciar su busqueda?')
    dispatch(getCourses(""));
  }

  // const flickityOptions = {
  //     initialIndex: 2
  //   }

  return (
    <Container maxW="100%" p="0" heightMode="min">
      <Box background="#3E4AB8" maxW="100%" maxH="50%">
        <NavBar setOrder={setOrder} setPagina={setPagina} />
      </Box>

      <Grid templateColumns="15% 85%" spacing="3px" p={0}>
        <GridItem>
          <Box bg="none" w="100%" h="100%" p={0} mt='10px'>
            <Box pl={40}>
              <Link to="home">
                <IconButton
                  colorScheme="blue"
                  aria-label="Search database"
                  icon={<SmallCloseIcon />}
                />
              </Link>
            </Box>

            <Filter
              setPagina={setPagina}
              setOrder={setOrder}
              booleano={false}
            />
          </Box>
        </GridItem>
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
      </Grid>
      <Box mt={7}>
        <Footer />
      </Box>
    </Container>
  );
}

export default HomeFilter;