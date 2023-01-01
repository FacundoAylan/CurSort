import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Swal from "sweetalert2";
import { useHistory } from 'react-router-dom';

function Checkoutform() {

    const stripe = useStripe();
    const elements = useElements();
    const cart = useSelector(state => state.cart);

    const history = useHistory();

    
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
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

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        })

        console.log(stripe.createPaymentMethod)

        if (!error) {
            const{ id } = paymentMethod;

            try {
                const { data } = await axios.post('http://localhost:3001/checkout/payment', {
                    amount: total * 100,
                    id,

                });
    
                const card = elements.getElement(CardElement)
                card.clear();
       
                if(data.message === 'Pago realizado con éxito') {
                   await  Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Pago realizado con éxito, a la brevedad recibirá un email con el link de descarga del curso',
                        showConfirmButton: false,
                        timer: 2000
                      })

                        history.push('/home')
                }
                else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: `${data.message}`,
                        showConfirmButton: false,
                        timer: 2000
                      })
                }
            } catch (error) {

                console.log(error)
            }
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
                })
            console.log(error.message)
        }
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {cart.map((cart) => (
          <div key={cart.id}>
            <h3 style={{ color: "#f1faee" }}>{cart.name}</h3>
            <p style={{ color: "#f1faee" }}>usd {cart.price}</p>
            <img
              src={cart.image}
              alt={cart.name}
              style={{
                width: "100px",
                height: "100px",
              }}
            />
          </div>
        ))}
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
        <button disabled={!stripe || !elements}>Pagar</button>
      </form>
    </div>
  );
}

export default Checkoutform