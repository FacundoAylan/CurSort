import React, { useEffect , useState} from "react";
import { Grid, GridItem, Container, Box, Center, Image} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import Cards from "../Card/Card";
import NavBar from "../navBar/navBar";
import Paginado from '../paginado/paginado';
import  {getCourses} from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  
  const {user, isAuthenticated} = useAuth0() 
  let info = useSelector(state => state.courses, () => false);
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


  return (
    <Container maxW="100%"  p="0" heightMode="min">
      <Box background="#3E4AB8" maxW="100%" maxH="50%">
        <NavBar setPagina={setPagina} />
       
      
      {
        isAuthenticated && 
        <ol>        
        <h2>{user.name}</h2>
        <Link to='/perfil'>
            <Button>Perfil</Button>
        </Link>
        </ol>
        
      }
      
      </Box>

      <Box h="40%" maxW="100%">
      <Center mt='120px'>
      <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} />       
       </Center>
        <Grid templateColumns="repeat(6, 0.5fr)" gap={1} pt={4} pl={20} m={0}>
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
     
    </Container>
  );


}

export default Home;