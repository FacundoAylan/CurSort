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

    const userLoguin = useSelector((state) => state.userEmail);
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
          console.log(error);
        }
    }

  return (
    <>
        <Heading
          w="100%"
          textAlign={"center"}
          fontWeight="normal"
          mb="2%"
          pt='10'
          color="#f1faee"
        >
          Contact information
        </Heading>
          <form ref={form}>
            <Flex flexDirection='column' px='15rem' >
            <Grid  color='white' templateColumns='repeat(2,1fr)'>
              
              <GridItem px={10} mb='5' >
                <Center><Text>Name</Text></Center>
                <Input type="text" name="name" defaultValue={userLoguin.name} />
              </GridItem>

              <GridItem px={10} mb='5'>
                <Center><Text>Lastname</Text></Center>
                <Input
                  type="text"
                  name="lastname"
                  defaultValue={userLoguin.lastname}
                />
              </GridItem>

              <GridItem px={10} mb='5'>
                <Center><Text>Email</Text></Center>
                <Input
                  type="text"
                  placeholder="Correo Electronico"
                  name="email"
                  defaultValue={userLoguin.email}
                />
              </GridItem>

              <GridItem px={10} mb='5'>
                <Center><Text>Direction</Text></Center>
                <Input type="text" name="address" defaultValue={userLoguin.address} />
              </GridItem>
    
              <GridItem px={10} mb='5'>
                <Center><Text>City</Text></Center>
                <Input type="text" name="city" defaultValue={userLoguin.city} />
              </GridItem>

              <GridItem px={10} mb='5'>
                <Center><Text >Country</Text></Center>
                <Input type="text" name="country"  defaultValue={userLoguin.country}/>
              </GridItem>

              <GridItem px={10} mb='5'>
                <Center><Text>P.C.</Text></Center>
                <Input type="text" name="cp" defaultValue={userLoguin.postalCode} />
              </GridItem>

              <GridItem px={10} mb='5'>
                <Center><Text>Phone</Text></Center>
                <Input type="text" name="phone" defaultValue={userLoguin.phone}/>
              </GridItem>
            </Grid>
            </Flex>
          </form>
        <br/>
        <Box ml='43%'>
          <Stack direction="row" spacing={4} align="center">
            <Link to="/checkout">
              <Button 
                colorScheme="teal" 
                variant="outline"
                width='5rem'
                >
                  Back
              </Button>
            </Link>

            <Button 
              colorScheme="teal" 
              variant="solid" 
              onClick={handleSubmit}
              width='5rem'
              >
                Next
            </Button>
          </Stack>
        </Box>
{/* 
        <Flex mt={6}>
          <Text color='white'>Pedido:</Text>
          {dataLocal.map((item) => (
            <Flex flexDirection='column' bg='#3E4AB8' ml={5} borderRadius={12} color='white' p={2}>
              <Text>{item.name}</Text>
              <Center>USD {item.price}</Center>
            </Flex>
          ))}
        </Flex> */}

    </>
  );
}

export default Information
