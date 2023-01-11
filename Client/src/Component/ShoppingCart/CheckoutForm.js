import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { clearCart } from '../../Redux/actions/index';
import {Button, Center, Flex, Grid, Image, Text} from '@chakra-ui/react'

function Checkoutform() {

    const stripe = useStripe();
    const elements = useElements();
    const user = JSON.parse(window.localStorage.getItem("user"));
    const history = useHistory();
    const dispatch = useDispatch();

    const dataLocalStore = window.localStorage.getItem("cart");
    const data = JSON.parse(dataLocalStore);

  const [total, setTotal] = useState(0);

  const getTotal = () => {
    let total = 0;
    data.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
    return total;
  };

  useEffect(() => {
    getTotal();
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const dataLocalStore = window.localStorage.getItem("cart");
        const dataLocal = JSON.parse(dataLocalStore);
    

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        })

        if (!error) {
            const{ id } = paymentMethod;

            try {

                const { data } = await axios.post('https://cursort.onrender.com//checkout/payment', {
                    amount: total * 100,
                    id,
                    mail: user.email,
                    name: user.name,
                    id_courses: dataLocal.map((cart) => cart.id),
                    course_name: dataLocal.map((cart) => cart.name)
                });
    
                const card = elements.getElement(CardElement)
                card.clear();
       
                if(data.message === 'success') {
                   await  Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Pago realizado con éxito, a la brevedad recibirá un email con el link de descarga del curso',
                        showConfirmButton: false,
                        timer: 4000
                      })
                        dispatch(clearCart())
                        window.localStorage.setItem('cart', JSON.stringify([]))
                        history.push('/home')
                }
                else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: `${data.message}`,
                        showConfirmButton: false,
                        timer: 4000
                      })
                }
            } catch (error) {

              
            }
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
                })
          
        }
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Center>
        <Grid templateColumns='repeat(2,400px)'>

          {data.map((cart) => (
            <Center>
            <Flex bg="#3E4AB8" w="100%" borderRadius={12} m={3}>
              <Image
                src={cart.image}
                alt={cart.name}
                w="100px"
                h="100px"
                borderLeftRadius={12}
              />
              <Flex
                flexDirection="column"
                pt={7}
                fontSize={18}
                color="white"
                pl={2}
              >
                <Text>{cart.name}</Text>
                <Center>usd {cart.price}</Center>
              </Flex>
            </Flex>
            </Center>
          ))}
        </Grid>
        </Center>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "white",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <Flex ml='45%' mt={4}>
          <Link to="/checkout/information">
            <Button>Regresar</Button>
          </Link>

          <Button type='submit' isDisabled ={!stripe || !elements} ml={3}>Pagar</Button>
        </Flex>
      </form>
    </div>
  );
}

export default Checkoutform
