import React from "react";
import {
  Grid,
  GridItem,
  Container,
  Box,
  Center,
  AlertTitle,
  AlertIcon,
  Alert,
  IconButton
} from "@chakra-ui/react";
import Cards from "../Card/Card";
import Paginado from "../paginado/paginado";
import { useDispatch, useSelector } from "react-redux";
import {CloseIcon} from '@chakra-ui/icons';
import { getWarning } from "../../Redux/actions/index";

function HomeFilter({info, pagina, setPagina, maximo, porPagina}) {

  const warnings = useSelector ((state) => state.warnings)

  const dispatch = useDispatch()
  const handleWarning = () => {
    dispatch(getWarning())
  }

  return (
    <Container maxW="100%" p="0" heightMode="min">
        <Box h="100%" maxW="100%" >
          <Center mt="1%">
            <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} />
          </Center>
          {warnings === 'no match found'?
          <Alert
          status='warning'
          variant='subtle'
          flexDirection='column'
          height='200px'
          w='40%'
          ml='22%'
          borderRadius={12}
          position='fixed'
          mt='4%'
        >
          <IconButton aria-label='Search database' icon={<CloseIcon />} ml='90%' bg='none' onClick={handleWarning}/>
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            {warnings}
          </AlertTitle>
        </Alert>
        : ""}
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

    </Container>
  );
}

export default HomeFilter;