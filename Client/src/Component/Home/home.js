import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {
  Container,
  Box,
  Center,
  Text,
  // Image,
} from "@chakra-ui/react";
import NavBar from "../navBar/navBar";
// import CreateCategory from "../CreateCategory/CreateCategory";
import Footer from "../landing/footer/footer";
import CarouselHome from "./currucelHome";
import {getCategory} from '../../Redux/actions/index'


// importo el json desde la api
// var data = require("./api.json");

function Home() {
  const categories = useSelector(state => state.categories)

  const [pagina, setPagina] = useState(1);
  const porPagina = 6;
  // const maximo = Math.ceil(info.length / porPagina);

  let [order, setOrder] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(getCategory(""));
   }, [dispatch]);
  
  // if (info <= 1) {
  //   //alert('No hay coincidencias con esos filtros. ¿Desea reiniciar su busqueda?')
  //   dispatch(getCourses(""));
  // }
  return (
    <Container maxW="100%" p="0" heightMode="min">
      <Box background="#3E4AB8" maxW="100%" maxH="50%">
        <NavBar setOrder={setOrder} setPagina={setPagina} />
      </Box>
      <Box h="40%" maxW="100%">
        {categories &&
        categories.slice(0,3).map((value) => {
          return (
            <>
              <Center pt='10px'>
                  <Text color='white'>{value.name.toUpperCase()}</Text>
              </Center>
              <CarouselHome categorie={value.name}/>

            </>
          )
        }
        )}
      </Box>

      <Box mt={7}>
        <Footer/>
      </Box>
    </Container>
  );
}

export default Home;
