import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import {
    Heading,
    Flex,
    Button,
    Stack,
    TagLabel as label,
    Text,
    Grid,
    GridItem,
    Input,
    Box,
    Center,
  } from "@chakra-ui/react";
import axios from 'axios';
import Swal from "sweetalert2";

function Information() {
    const useLocal = window.localStorage.getItem("user");
    const user = JSON.parse(useLocal);

    const history = useHistory();
    const form = useRef(null);

    const dataLocalStore = window.localStorage.getItem("cart");
    const dataLocal = JSON.parse(dataLocalStore);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const formData = new FormData(form.current);
          const buyer = {
              name: formData.get('name'),
              lastname: formData.get('lastname'),
              mail: formData.get('email'),
              phone: formData.get('phone'),
              address: formData.get('address'),
              city: formData.get('city'),
              country: formData.get('country'),
              postalCode: formData.get('cp'),
          };
          console.log(buyer)
          const { data } = await axios.post('http://localhost:3001/checkout/information', buyer);
          //console.log(data);
          if(data.message === 'success'){
            //console.log(data)
            history.push('/checkout/payment');
          } else {
            Swal.fire({
              icon: 'info',
              title: 'Oops...',
              text: 'Algo salió mal, intentalo de nuevo',
            })
          }

        }
        catch(error){
          //console.log(error);
        }
    }

  return (
    <>
        <Heading
          w="100%"
          textAlign={"center"}
          fontWeight="normal"
          mb="2%"
          color="#f1faee"
        >
          Información de contacto
        </Heading>
          <form ref={form}>
            <Grid templateColumns='repeat(2,1fr)' templateRows='repeat(4,100px)' w='100vw' color='white' pl={10} pr={10} >
              <GridItem pl={10} pr={10}>
                <Text ml='45%' fontSize={20}>Name</Text>
                <Input type="text" name="name" defaultValue={user.given_name} />
              </GridItem>
            <GridItem pl={10} pr={10}>
              <Text ml='45%' fontSize={20}>lastname</Text>
              <Input
                type="text"
                name="lastname"
                defaultValue={user.family_name}
              />
            </GridItem>

            <GridItem pl={10} pr={10}>
              <Text ml='45%' fontSize={20}>Email</Text>
              <Input
                type="text"
                placeholder="Correo Electronico"
                name="email"
                defaultValue={user.email}
              />
            </GridItem>

            <GridItem pl={10} pr={10}>
              <Text ml='45%' fontSize={20}>Direction</Text>
              <Input type="text" placeholder="Direccion" name="address" />
            </GridItem>
  
            <GridItem pl={10} pr={10}>
              <Text ml='45%' fontSize={20}>City</Text>
              <Input type="text" placeholder="Ciudad" name="city" />
            </GridItem>

            <GridItem pl={10} pr={10}>
              <Text ml='45%' fontSize={20}>Country</Text>
              <Input type="text" placeholder="Pais" name="country" />
            </GridItem>

            <GridItem pl={10} pr={10}>
            <Text ml='45%' fontSize={20}>CP</Text>
            <Input type="text" placeholder="Codigo postal" name="cp" />
            </GridItem>

            <GridItem pl={10} pr={10}>
              <Text ml='45%' fontSize={20}>Phone</Text>
              <Input type="text" placeholder="Telefono" name="phone" />
            </GridItem>

            </Grid>
          </form>
        <br/>
        <Box ml='43%'>
          <Stack direction="row" spacing={4} align="center">
            <Link to="/checkout">
              <Button colorScheme="teal" variant="outline">
                Regresar
              </Button>
            </Link>

            <Button colorScheme="teal" variant="solid" onClick={handleSubmit}>
              Pagar
            </Button>
          </Stack>
        </Box>

        <Flex mt={6}>
          <Text color='white'>Pedido:</Text>
          {dataLocal.map((item) => (
            <Flex flexDirection='column' bg='#3E4AB8' ml={5} borderRadius={12} color='white' p={2}>
              <Text>{item.name}</Text>
              <Center>USD {item.price}</Center>
            </Flex>
          ))}
        </Flex>

    </>
  );
}

export default Information