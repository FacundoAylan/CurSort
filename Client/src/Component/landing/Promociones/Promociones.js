import { Alert, AlertDescription, Box, Button, CloseButton, Flex, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { BiRocket } from 'react-icons/bi';

function Promociones() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  return isVisible ? (
    <Alert status='success' bg='red' h='3%'>
      <Box w='100%'>
        <AlertDescription >
          <Flex ml='25%' >
            <BiRocket color='#191E29' fontSize={25}/>
            <Box pl={2} pr={2}>
             Semana de Carreras  Aprovechá 35% OFF en carreras + 12 cuotas sin interés  Hasta el 18/12 
            </Box>
            <BiRocket color='#191E29' fontSize={25}/>
          </Flex>
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <Button onClick={onOpen}>Show Alert</Button>
  )
};

export default Promociones;