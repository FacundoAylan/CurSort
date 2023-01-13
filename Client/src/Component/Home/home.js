import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {
  Container,
  Box,
  Center,
  Text,
  Grid,
  Flex,
  Spinner,
} from "@chakra-ui/react";

import NavBar from "../navBar/navBar";
import Footer from "../landing/footer/footer";
import CarouselHome from "./currucelHome";
import Filter from "../navBar/filter/filter";
import HomeFilter from "./homeFilter";
import { getCategory, getCourses, getUserEmail } from "../../Redux/actions";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useAuth0 } from "@auth0/auth0-react";
import {
  setUserLocalStore,
  getUserLocalStore,
} from "../../Redux/actions/index";

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

  const categories = useSelector((state) => state.categories);

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
  }, [user, dispatch]);

  return (
    <Container maxW="100%" p="0" heightMode="min">
      <Box>
        <NavBar setOrder={setOrder} setPagina={setPagina} setHome={setHome} />
      </Box>

      <Box bg="#3E4AB8" pt="6rem" h="100%" position="fixed">
        <Filter
          setPagina={setPagina}
          setOrder={setOrder}
          booleano={false}
          setHome={setHome}
        />
      </Box>
      {info.length > 0 ?
        <Flex pt="100px" ml="10rem">
          <Box h="40%" width="100%" pl={3} pr={3}>
          {home ? (
            categories &&
            categories.slice(0, 3).map((value) => {
              return (
                <>
                  <Center pt="10px">
                    <Text color="white">{value.name.toUpperCase()}</Text>
                  </Center>
                  <CarouselHome categorie={value.name} />
                </>
              );
            })
          )  
          : 
          (
            <HomeFilter
              info={info}
              pagina={pagina}
              setPagina={setPagina}
              maximo={maximo}
              porPagina={porPagina}
            />
          )}
        </Box>
      </Flex>
        :
        <Box maxW="100%" h='100%' borderRadius={12}>
          <Center pt='10%'>
            <Flex flexDirection='column'>
              <Text fontSize={36} color='white'>Loading</Text>
              <Spinner size='xl' color='white' ml='50px'/>
            </Flex>
          </Center>
        </Box>
      }
      </Grid>
      <Box mt={7}>
        <Footer />
      </Box>
    </Container>
  );
}

export default Home;