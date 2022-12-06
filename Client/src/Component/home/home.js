
import React, { useEffect , useState} from "react";
import { Grid, GridItem, Container, Box, Center } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import Cards from "../Card/Card";
import NavBar from "../navBar/navBar";
import Paginado from '../paginado/paginado';
import OrderPrice from "../InputOrder/OrderPrice";
import {getCourses, orderByName, orderByRating, orderByPrice, orderByPublished} from "../../Redux/actions";

// importo el json desde la api
// var data = require("./api.json");

function Home() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
  })
  let info = useSelector(state => state.courses, () => false)

  useEffect(() => {
    dispatch(getCourses());
  }, [])

    function handleOrderByName(e){
        console.log(info)
        e.preventDefault();
        dispatch(orderByName(e.target.value))
    }

    function handleOrderByPrice(e){
        console.log(info)
        e.preventDefault();
        dispatch(orderByPrice(e.target.value))
    }
    
    function handleOrderByPublished(e){
        console.log(info)
        e.preventDefault();
        dispatch(orderByPublished(e.target.value))
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
          handleOrderByName={handleOrderByName}
          handleOrderByPublished={handleOrderByPublished}
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
          {info && info.slice(0, 6).map((value) => {
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
        <Paginado max={info.length} />
      </Center>
    </Container>
  );
}

export default Home;
