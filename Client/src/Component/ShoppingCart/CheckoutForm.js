import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { clearCart } from '../../Redux/actions/index';

function Checkoutform() {

    const stripe = useStripe();
    const elements = useElements();
    const { user, isAuthenticated } = useAuth0();
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
                        timer: 2000
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
                        timer: 2000
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
        {data.map((cart) => (
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
        
        <button disabled={!stripe || !elements} style={{ color: "#f1faee" }}>Pagar</button>
      </form>
    </div>
  );
}

export default Checkoutform
