import React from 'react'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import { Box,IconButton,Center, Text,Avatar,SimpleGrid} from '@chakra-ui/react';
import Nosotros from '../nosotros/nosotros';



function project() {
  return (
    <>


    <Box pt="10px">
        <Link to="/">
          <IconButton
            colorScheme="black"
            aria-label="Search database"
            icon={<ArrowLeftIcon />}
          />
        </Link>
      </Box>
      <Center color='white' fontSize={35} p={4}
      
      >
          ¿Quienes somos?
      </Center>
      <Box fontSize={18}>
      <Text color='white' >
        //ESTE TEXTO HAY QUE EDITARLO Y ARMARLO COMO UN PARRAFO, LINDO Y HERMOSHO//
        <br></br>
        Somos un grupo de estudiantes de Full Stack Developer(soy Henry), Esta
        pagina es nuestro proyecto final , que se trata de un ecommerce de
        ventas de cursos de programación, en el cual vas a poder: 
      </Text>
      <Text color='white'>
        1- Ver los cursos disponibles.
      </Text>
      <Text color='white'>
        2-Ver los detalles de cada curso por separado.
      </Text>
      <Text color='white'>
        3-Agregar cursos a tu carrito y luego comprarlos.
      </Text>
      <Text color='white'>
        4-poder registrarte o ingresar con tu cuenta de Gmail.
      </Text>
      <Text color='white'>
        5-Comunicarte con nosotros a través de tu correo electrónico.
      </Text>
      <Text color='white'>
        6-Responder tus consultas mas rápido a través del chatbot.
      </Text>
      <Text color='white'>
        7- Filtrar los cursos por ( precio, rating, dificultad, duración, fecha de lanzamiento) 
      </Text>
      <Text color='white'>
        Si te otorgan los permisos de administrador vas a poder crear nuevos cursos y subirlos.
       </Text>
      </Box>

      <Box p={20}>         
        <Nosotros/>
      </Box>

      <Center color="white" fontSize={35} p={20}>
            Tecnologias utilizadas
      </Center>

      <SimpleGrid
      spacing={2}
      templateColumns="repeat(3,1fr)"
      templateRows='repeat(2,0.5fr)'
      p={1}>
      
      <Box>
        <Avatar ml="22%" src="https://portfolio-kype.onrender.com/Logos/html5.svg" size="xl">            
        </Avatar>
            <Text fontSize="15" ml="25%">
                HTML5
            </Text>
      </Box>
      <Box>
        <Avatar ml="22%" src="https://portfolio-kype.onrender.com/Logos/javascript.svg" size="xl">            
        </Avatar>
            <Text fontSize="15" ml="25%">
                JAVASCRIPT
            </Text>
      </Box>
      <Box>
        <Avatar ml="22%" src="https://portfolio-kype.onrender.com/Logos/react.svg" size="xl">            
        </Avatar>
            <Text fontSize="15" ml="25%">
                REACT
            </Text>
      </Box>
      <Box>
        <Avatar ml="22%" src="https://portfolio-kype.onrender.com/Logos/redux.svg" size="xl">            
        </Avatar>
            <Text fontSize="15" ml="25%">
                REDUX
            </Text>
      </Box>
      <Box>
        <Avatar ml="22%" src="https://portfolio-kype.onrender.com/Logos/nodedotjs.svg" size="xl">            
        </Avatar>
            <Text fontSize="15" ml="25%">
                NODE
            </Text>
      </Box>
      <Box>
        <Avatar ml="22%" src="https://portfolio-kype.onrender.com/Logos/express.svg" size="xl">            
        </Avatar>
            <Text fontSize="15" ml="25%">
                EXPRESS
            </Text>
      </Box>
      <Box>
        <Avatar ml="22%" src="https://portfolio-kype.onrender.com/Logos/postgresql.svg" size="xl">            
        </Avatar>
            <Text fontSize="15" ml="25%">
                PostgreSQL
            </Text>
      </Box>
      <Box>
        <Avatar ml="22%" src="https://portfolio-kype.onrender.com/Logos/sequelize.svg" size="xl">            
        </Avatar>
            <Text fontSize="15" ml="25%">
                SEQUELIZE
            </Text>
      </Box>
      <Box>
        <Avatar ml="22%" src="https://cdn.worldvectorlogo.com/logos/auth0.svg" size="xl">            
        </Avatar>
            <Text fontSize="15" ml="25%">
                Auth0
            </Text>
      </Box>
      <Box>
        <Avatar ml="22%" src="https://www.svgrepo.com/show/303670/firebase-1-logo.svg" size="xl">            
        </Avatar>
            <Text fontSize="15" ml="25%">
                FIREBASE
            </Text>
      </Box>
      <Box>
        <Avatar ml="22%" src="https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg" size="xl">            
        </Avatar>
            <Text fontSize="15" ml="25%">
                CHAKRA-UI
            </Text>
      </Box>   
      <Box>
        <Avatar ml="22%" src="https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png" size="xl">            
        </Avatar>
            <Text fontSize="15" ml="25%">
                CSS
            </Text>
      </Box>   




      </SimpleGrid>
      
    
      </>
  )
}

export default project