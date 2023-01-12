import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../Redux/actions';
import { Button, Card, CardFooter, Center, Flex, Text, Img } from '@chakra-ui/react';


function CartItem(props) {

    const { id, name, price, quantity, image } = props.data;
    const dispatch = useDispatch();

  return (
    <Flex justifyContent='center'>
    <Center mt="1%"  minHeight="50%" bg='#3E4AB8' borderRadius={12} width='40rem'>
      <Card
        direction={{ base: "column", sm: "row" }}
        variant="outline"
        p="1px"
        border="1px"
        minW='100%'
      >
      <Flex minWidth='100%' justifyContent='space-between' flexDirection="row">

        <Img 
          src={image} 
          alt={name} 
          style={{ height: "100%", width: "100px" }} 
          objectFit='cover'
          borderRadius={8}
          />
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
          US ${price}
        </h5>
        <CardFooter>
          <Button
            colorScheme="blue"
            variant="link"
            onClick={() => dispatch(deleteFromCart(id))}
            >
            <Text 
              bg='red' 
              p='1.5' 
              px='2' 
              borderRadius='100%' 
              fontSize="13px" 
              color='white'
              >
                X
            </Text>
          </Button>
        </CardFooter>
      </Flex>
      </Card>
    </Center>
    </Flex>
  );
}

export default CartItem