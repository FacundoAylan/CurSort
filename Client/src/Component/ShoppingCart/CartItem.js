import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../Redux/actions';
import { Button, Card, CardFooter, Center, Flex, Text } from '@chakra-ui/react';


function CartItem(props) {

    const { id, name, price, quantity, image } = props.data;
    const dispatch = useDispatch();

  return (
    <Center mt="1%"  minHeight="50%" bg='#3E4AB8' borderRadius={12} >
      <Card
        direction={{ base: "column", sm: "row" }}
        variant="outline"
        p="1px"
        border="1px"
        minW='100%'
      >
      <Flex minWidth='100%' justifyContent='space-between' flexDirection="row">

        <img src={image} alt={name} style={{ height: "58px", width: "50px" }}/>
        <h4
          style={{
            alignItems: "center",
            padding: "10px",
            justifyContent: "center",
            marginTop: "10px",
            marginLeft: "20px",
            color: '#f1faee'
          }}
        >
          {name}
        </h4>
        <br />
        <h5
          style={{
            paddingLeft: "10px",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            marginLeft: "20px",
            marginRight: "20px",
            color: '#f1faee'
          }}
        >
          ${price} x {quantity} = ${quantity * price}
        </h5>
        <CardFooter>
          <Button
            colorScheme="blue"
            variant="link"
            onClick={() => dispatch(deleteFromCart(id))}
          >
            <Text fontSize="13px" color='white'>Eliminar</Text>
          </Button>
        </CardFooter>
      </Flex>
      </Card>
    </Center>
  );
}

export default CartItem