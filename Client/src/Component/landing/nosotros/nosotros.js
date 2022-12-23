import { Avatar, AvatarBadge, Box, Button, Center, Stack, Text } from "@chakra-ui/react";
import React from "react";

function Nosotros () {
  return (
    <a name='footer' href=''>
    <Center>
      <Stack direction="row" spacing={3} color='white'>

      <Box border='2px' borderColor='white' bg='#132D46' h='250px' w='200px' pt={4} pl={3}  borderRadius={12}>
            <Avatar ml='22%' src='' size='xl'>
              <AvatarBadge  bg="green" boxSize="0.6em"  border='2px' borderColor='black' mr='8px'/>
            </Avatar>
              <Text fontSize='22' pl='5px' >Pablo swistoniuk</Text>
              <Text fontSize='15'ml='25%'>@Front-end</Text>
              <Text fontSize='10' ml='25%'>
                <Button bg="#3E4AB8" >
                  <a target="_blank" href="https://www.linkedin.com/in/pablo-swistoniuk-0b15a6247/">linkedin</a>
                </Button>
              </Text>
        </Box>


        <Box border='2px' borderColor='white' bg='#132D46' h='250px' w='200px' pt={4} pl={3}  borderRadius={12}>
            <Avatar ml='22%' src='' size='xl'>
              <AvatarBadge  bg="green" boxSize="0.6em"  border='2px' borderColor='black' mr='8px'/>
            </Avatar>
              <Text fontSize='22' pl='14px'>Mailen Benitez</Text>
              <Text fontSize='15'ml='25%'>@Front-end</Text>
              <Text fontSize='10' ml='25%'>
                <Button bg="#3E4AB8" >
                  <a href="https://www.linkedin.com/in/facundo-aylan-582b52257/">linkedin</a>
                </Button>
              </Text>
        </Box>


        <Box border='2px' borderColor='white' bg='#132D46' h='250px' w='200px' pt={4} pl={3}  borderRadius={12}>
            <Avatar ml='22%' src='' size='xl'>
              <AvatarBadge  bg="green" boxSize="0.6em"  border='2px' borderColor='black' mr='8px'/>
            </Avatar>
              <Text fontSize='22' pl='1px' >Jonathan Lozano</Text>
              <Text fontSize='15'ml='25%'>@Front-end</Text>
              <Text fontSize='10' ml='25%'>
                <Button bg="#3E4AB8" >
                  <a href="https://www.linkedin.com/in/facundo-aylan-582b52257/">linkedin</a>
                </Button>
              </Text>
        </Box>


        <Box border='2px' borderColor='white' bg='#132D46' h='250px' w='200px' pt={4} pl={3}  borderRadius={12}>
            <Avatar ml='22%' src='' size='xl'>
              <AvatarBadge  bg="green" boxSize="0.6em"  border='2px' borderColor='black' mr='8px'/>
            </Avatar>
              <Text fontSize='22' >Federico Ciociano</Text>
              <Text fontSize='15'ml='25%'>@Front-end</Text>
              <Text fontSize='10' ml='25%'>
                <Button bg="#3E4AB8" >
                  <a href="https://www.linkedin.com/in/facundo-aylan-582b52257/">linkedin</a>
                </Button>
              </Text>
        </Box>


        <Box border='2px' borderColor='white' bg='#132D46' h='250px' w='200px' pt={4} pl={3}  borderRadius={12}>
            <Avatar ml='22%' src='' size='xl'>
              <AvatarBadge  bg="green" boxSize="0.6em"  border='2px' borderColor='black' mr='8px'/>
            </Avatar>
              <Text fontSize='22' pl='24px'>Juan Gómez </Text>
              <Text fontSize='15'ml='25%'>@Front-end</Text>
              <Text fontSize='10' ml='25%'>
                <Button bg="#3E4AB8" >
                  <a href="https://www.linkedin.com/in/facundo-aylan-582b52257/" >linkedin</a>
                </Button>
              </Text>
        </Box>

        <Box border='2px' borderColor='white' bg='#132D46' h='250px' w='200px' pt={4} pl={3}  borderRadius={12}>
            <Avatar ml='22%' src='https://i.ibb.co/m8CsBFc/link.jpg' size='xl'>
              <AvatarBadge  bg="green" boxSize="0.6em"  border='2px' borderColor='black' mr='8px'/>
            </Avatar>
              <Text fontSize='22' pl='15px'>Facundo Aylan</Text>
              <Text fontSize='15'ml='25%'>@Front-end</Text>
              <Text fontSize='10' ml='25%'>
                <Button bg="#3E4AB8" >
                  <a href="https://www.linkedin.com/in/facundo-aylan-582b52257/">linkedin</a>
                </Button>
              </Text>
        </Box>
      </Stack>
    </Center>
    </a>
  );
}

export default Nosotros;