import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import {
    Heading,
    Flex,
  } from "@chakra-ui/react";

function Information() {
    const { user } = useAuth0();
    console.log(user);

    const cart = useSelector(state => state.cart);
    const history = useHistory();
    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
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
        history.push('/checkout/payment');
    }

  return (
    <>
      <div className="Information-content">
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%" color="#f1faee">
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
            <input type="text" placeholder="Direccion" name="addres" />
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
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">
              <p style={{ color: "white" }}>Regresar</p>
            </Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <hr />
      <Flex className="Information-sidebar">
        <h3 style={{ color: "white" }}>Pedido:</h3>
        {cart.map((item) => (
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