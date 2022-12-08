
import React, { useEffect , useState} from "react";
import { Grid, GridItem, Container, Box, Center } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import Cards from "../Card/Card";
import NavBar from "../navBar/navBar";
import Paginado from '../paginado/paginado';
import {getCourses, orderByRating, orderByPrice, orderByPublished} from "../../Redux/actions";

// importo el json desde la api
// var data = require("./api.json");

function Home() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
  })
  let info = useSelector(state => state.courses, () => false);
  const [pagina, setPagina] = useState(1);
  const porPagina = 6;

  const maximo = Math.ceil(info.length / porPagina);



  let [ order, setOrder ] = useState('')

  useEffect(() => {
    dispatch(getCourses(''));
  }, [dispatch])


    function handleOrderByPrice(e){
        e.preventDefault();
        dispatch(orderByPrice(e.target.value))
        setOrder('order' + e.target.value)
    }
    
    function handleOrderByPublished(e){
        e.preventDefault();
        dispatch(orderByPublished(e.target.value))
        setOrder('order' + e.target.value)
    }

    function handleOrderByStar(e){
      e.preventDefault();
      dispatch(orderByRating(e.target.value))
      setOrder('order' + e.target.value)
  }

  return (
    <Container maxW="100%" h="100%" border="1px" p="0">
      <div>
      {/* filtro order A-Z */}
        {/* <select onChange={(e) => handleOrderByName(e)} placeholder="Order">
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select> */}
      </div>
      <Box background="#4FD1C5" maxW="100%" h="10%">
        <NavBar 
          handleOrderByPrice={handleOrderByPrice} 
          handleOrderByPublished={handleOrderByPublished}
          handleOrderByStar={handleOrderByStar}
          setPagina={setPagina}
          />
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
          {info && info.slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            ).map((value) => {
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
      <Center pt={6}>
        <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} />
      </Center>
    </Container>
  );
}

export default Home;
