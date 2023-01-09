import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import {
    Heading,
    Flex,
    Button,
    Stack,
  } from "@chakra-ui/react";
import axios from 'axios';
import Swal from "sweetalert2";
import { useLocalStorage } from '../../hooks/useLocalStorage';

function Information() {
    const useLocal = window.localStorage.getItem("user");
    const user = JSON.parse(useLocal);
    //console.log('userInformation',user)

    const history = useHistory();
    const form = useRef(null);

    const dataLocalStore = window.localStorage.getItem("cart");
    const dataLocal = JSON.parse(dataLocalStore);

    useLocalStorage('user', user)

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
          //console.log(error);
        }
    }

  return (
    <>
      <div className="Information-content">
        <Heading
          w="100%"
          textAlign={"center"}
          fontWeight="normal"
          mb="2%"
          color="#f1faee"
        >
          Información de contacto
        </Heading>
        <Flex>
          <form ref={form}>
            <input type="text" name="name" defaultValue={user.given_name} />
            <br />
            <br />
            <input
              type="text"
              name="lastname"
              defaultValue={user.family_name}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Correo Electronico"
              name="email"
              defaultValue={user.email}
            />
            <br />
            <br />
            <input type="text" placeholder="Direccion" name="address" />
            <br />
            <br />
            <input type="text" placeholder="Ciudad" name="city" />
            <br />
            <br />
            <input type="text" placeholder="Pais" name="country" />
            <br />
            <br />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <br />
            <br />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </Flex>
        <br/>
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
      </div>
      <br />
      <hr />
      <Flex className="Information-sidebar">
        <h3 style={{ color: "#f1faee" }}>Pedido:</h3>
        {dataLocal.map((item) => (
          <div className="Information-element" key={item.id}>
            <h4 style={{ color: "white" }}>{item.name}</h4>
            <span style={{ color: "white" }}>USD {item.price}</span>
          </div>
        ))}
      </Flex>
    </>
  );
}

export default Information