import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../Redux/actions';
import { Button, Text } from '@chakra-ui/react';


function CartItem(props) {

    const { id, name, price, quantity, image } = props.data;
    const dispatch = useDispatch();

  return (
    <div>
      <img src={image} alt={name} style={{ height: "50px", width: "50px" }} />
      <h4>{name}</h4>
      <h5>
        ${price} x {quantity} = ${quantity * price}
      </h5>
      <Button colorScheme="blue" variant="link" onClick={() => dispatch(deleteFromCart(id))}>
        <Text fontSize="13px">

        Eliminar
        </Text>
      </Button>
    </div>
  );
}

export default CartItem