import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { clearCart } from '../../Redux/actions/index';
import {Button, Center, Flex, Grid, Image, Text, Box} from '@chakra-ui/react'

function Checkoutform() {

  
  
  // Pass the appearance object to the Elements instance

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

                const { data } = await axios.post('http://localhost:3001/checkout/payment', {
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
                        title: 'Payment made successfully! You will soon receive an e-mail with the download link.',
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

                //console.log(error)
            }
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
                })
            //console.log(error.message)
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
                w="135px"
                h="100px"
                borderLeftRadius={12}
                objectFit='cover'
              />
      
              <Flex
                flexDirection="column"
                pt={7}
                fontSize={18}
                color="white"
                width='100%'
              >
                <Center><Text>{cart.name}</Text></Center>
                <Center>usd {cart.price}</Center>
              </Flex>
            </Flex>
            </Center>
          ))}
        </Grid>
        </Center>

        {/* Elementos de la tarjeta */}
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
        {/*  */}
        <Flex ml='45%' mt={4}>
          <Link to="/checkout/information">
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
            type='submit' 
            isDisabled ={!stripe || !elements} 
            ml={3}
            width='5rem'
            >
              Buy
            </Button>
        </Flex>
      </form>
    </div>
  );
}

export default Checkoutform