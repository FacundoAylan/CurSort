import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {
  Container,
  Box,
  Center,
  Text,
  Grid,
  // Image,
} from "@chakra-ui/react";
import NavBar from "../navBar/navBar";
import Footer from "../landing/footer/footer";
import CarouselHome from "./currucelHome";
import Filter from "../navBar/filter/filter";
import HomeFilter from "./homeFilter";
import { getCourses } from "../../Redux/actions";

function Home() {
  let info = useSelector(
    (state) => state.courses,
    () => false
  ); // el false, verifica el estado anterior
  // console.log(info)
  const [ home, setHome ] =  useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses(""));
  }, [dispatch]);
  const categories = useSelector(state => state.categories)

  const [pagina, setPagina] = useState(1);
  const porPagina = 10;
  const maximo = Math.ceil(info.length / porPagina);
  const [order, setOrder] = useState("");
  

  return (
    <Container maxW="100%" p="0" heightMode="min">
      <Box mt="8%">
        <NavBar setOrder={setOrder} setPagina={setPagina} setHome={setHome}/>
      </Box>
      <Grid templateColumns="15% 85%" spacing="3px" p={0}>
      <Filter
              setPagina={setPagina}
              setOrder={setOrder}
              booleano={false}
              setHome={setHome}
            />
      <Box h="40%" maxW="100%">
        { home ?
            categories &&
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
            )
        : <HomeFilter info={info} pagina={pagina} setPagina={setPagina} maximo={maximo} porPagina={porPagina} />}

      </Box>
      </Grid>
      <Box mt={7}>
        <Footer/>
      </Box>
    </Container>
  );
}

export default Home;
