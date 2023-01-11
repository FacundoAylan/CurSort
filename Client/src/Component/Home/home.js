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
import { setUserLocalStore, getUserLocalStore } from '../../Redux/actions/index';

function Home() {
  let info = useSelector(
    (state) => state.courses,
    () => false
  ); // el false, verifica el estado anterior
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
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      dispatch(setUserLocalStore(user));
    } else {
      dispatch(getUserLocalStore());
    }
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
      {info.length > 0 ?
      <Box h="40%" maxW="100%" pl={3} pr={3}>
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
        :
        <Box maxW="100%" h='100%' backgroundImage="url('/images/kyuubi.png')" borderRadius={12}>
          <Center pt='10%'>
            <Flex flexDirection='column'>
              <Text fontSize={36} color='white'>Loanding</Text>
              <Spinner size='xl' color='white' ml='50px'/>
            </Flex>
          </Center>
        </Box>
      }
      </Grid>
      <Box mt={7}>
        <Footer/>
      </Box>
    </Container>
  );
}

export default Home;
