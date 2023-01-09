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
import { getCategory, getCourses } from "../../Redux/actions";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useAuth0 } from '@auth0/auth0-react';

function Home() {
  let info = useSelector(
    (state) => state.courses,
    () => false
  ); // el false, verifica el estado anterior
  //console.log(info)
  const [ home, setHome ] =  useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses(""));
    dispatch(getCategory());
  }, [dispatch]);
  const categories = useSelector(state => state.categories)

  const [pagina, setPagina] = useState(1);
  const porPagina = 10;
  const maximo = Math.ceil(info.length / porPagina);
  const [order, setOrder] = useState("");

  //modificación mai local storage
  useLocalStorage("cart", []);
  const { user, isAuthenticated } = useAuth0();

  const [userLocal, setUserLocal ] = useLocalStorage("user", user || []);

  useEffect(() => {
    setUserLocal(user || [])
  }, [user])
  

  return (
    <Container maxW="100%" p="0" heightMode="min">
      <Box>
        <NavBar setOrder={setOrder} setPagina={setPagina} setHome={setHome}/>
      </Box>
      <Grid templateColumns="15% 85%" spacing="3px" pt='110px'>
      <Filter
              setPagina={setPagina}
              setOrder={setOrder}
              booleano={false}
              setHome={setHome}
            />
      <Box h="40%" maxW="100%" >
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
