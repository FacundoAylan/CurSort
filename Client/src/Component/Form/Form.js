import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Grid,
  GridItem,
  Button,
  ButtonGroup,
  Textarea,
  Select,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogCloseButton,
  Container,
  Box,
} from "@chakra-ui/react";

function Form() {
  const [input, setInput] = useState({
    nombre: "",
    instuctor: "",
    duracion: "",
    dificultad: "",
    imagen: "",
    fecha: "",
    descripcion: "",
  });
  const expresiones = {
    nombre: /^[a-z0-9_-]{3,16}$/,
    instuctor: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
    duracion: /^[0-9]+([,][0-9]+)?$/,
    imagen: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
    descripcion: /^[\s\S]{10,100}$/,
  };
  const handleInputChange = (e) => {
    e.target.id === "duracion"
      ? setInput({ ...input, [e.target.id]: Number(e.target.value) })
      : setInput({ ...input, [e.target.id]: e.target.value });
  };
  const isError = {
    nombre: expresiones.nombre.test(input.nombre) ? false : true,
    instuctor: expresiones.instuctor.test(input.instuctor) ? false : true,
    duracion: expresiones.duracion.test(input.duracion) ? false : true,
    dificultad: input.dificultad === "",
    imagen: expresiones.imagen.test(input.imagen) ? false : true,
    fecha: input.fecha === "",
    descripcion: expresiones.descripcion.test(input.descripcion) ? false : true,
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const validacion = () => {
    const e = isError;
    if (
      !e.nombre &&
      !e.instuctor &&
      !e.duracion &&
      !e.dificultad &&
      !e.imagen &&
      !e.fecha &&
      !e.descripcion
    ) {
      onOpen();
      return true;
    } else {
      return false;
    }
  };
  return (
    <Container maxW="100%" h="100vh" border="1px" p="0">
      <Box>
      <Link to="/home" className="backCreate">
        <ButtonGroup variant="outline" spacing="6" p={1}>
          <Button colorScheme="blue">{"<="}</Button>
        </ButtonGroup>
      </Link>
      </Box>
      <Box mt="6%" ml="14%">
        <Grid
          templateColumns="repeat(2, 0.4fr)"
          gap={9}
          templateRows="repeat(3, 70px)"
          p={0}
          templateAreas={`"1 2 "
                        "4 5 "
                        "6 7"
                        "d d "
                        "button button "`}
        >
          <GridItem area={"1"}>
            <FormControl isInvalid={isError.nombre} isRequired>
              <Center>
                <FormLabel>NOMBRE DEL CURSO:</FormLabel>
              </Center>
              <Input
                placeholder="Basic usage"
                id="nombre"
                onChange={handleInputChange}
              />
              {!isError.nombre ? (
                <FormHelperText color={"green"}>nombre valido</FormHelperText>
              ) : (
                <FormErrorMessage>se requiere el nombre</FormErrorMessage>
              )}
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired isInvalid={isError.instuctor}>
              <Center>
                <FormLabel>INSTRUCTOR:</FormLabel>
              </Center>
              <Input
                placeholder="Basic usage"
                id="instuctor"
                onChange={handleInputChange}
              />
              {!isError.instuctor ? (
                <FormHelperText color={"green"}>
                  instuctor valido
                </FormHelperText>
              ) : (
                <FormErrorMessage>
                  se requiere el nombre del instuctor
                </FormErrorMessage>
              )}
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired isInvalid={isError.duracion}>
              <Center>
                <FormLabel>DURACION:</FormLabel>
              </Center>
              <Input
                placeholder="Basic usage"
                id="duracion"
                onChange={handleInputChange}
              />
              {!isError.duracion ? (
                <FormHelperText color={"green"}>duracion valido</FormHelperText>
              ) : (
                <FormErrorMessage>
                  se requiere la duracion del curso
                </FormErrorMessage>
              )}
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired isInvalid={isError.dificultad}>
              <Center>
                <FormLabel>DIFICULTAD:</FormLabel>
              </Center>
              <Select
                placeholder="DIFICULTAD:"
                id="dificultad"
                onChange={handleInputChange}
              >
                <option value="option1">Principiante</option>
                <option value="option2">Intermedio</option>
                <option value="option3">Dificil</option>
              </Select>
              {!isError.dificultad ? (
                <FormHelperText color={"green"}>
                  dificultad valido
                </FormHelperText>
              ) : (
                <FormErrorMessage>se requiere la dificultad</FormErrorMessage>
              )}
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired isInvalid={isError.imagen}>
              <Center>
                <FormLabel>IMAGEN:</FormLabel>
              </Center>
              <Input
                placeholder="jpg o png"
                id="imagen"
                onChange={handleInputChange}
              />
              {!isError.imagen ? (
                <FormHelperText color={"green"}>
                  imagen valida valido
                </FormHelperText>
              ) : (
                <FormErrorMessage>
                  se requiere la url de la imagen
                </FormErrorMessage>
              )}
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired isInvalid={isError.fecha}>
              <Center>
                <FormLabel>FECHA DE CREACION:</FormLabel>
              </Center>
              <Input
                placeholder="mm/dd/yyyy"
                type="date"
                id="fecha"
                onChange={handleInputChange}
              />
              {!isError.fecha ? (
                <FormHelperText color={"green"}>
                  imagen valida valido
                </FormHelperText>
              ) : (
                <FormErrorMessage>
                  se requiere la url de la imagen
                </FormErrorMessage>
              )}
            </FormControl>
          </GridItem>
          <GridItem area={"d"}>
            <FormControl isRequired isInvalid={isError.descripcion}>
              <Center>
                <FormLabel>DESCRIPTION:</FormLabel>
              </Center>
              <Textarea
                placeholder="Here is a sample placeholder"
                id="descripcion"
                onChange={handleInputChange}
              />
              {!isError.descripcion ? (
                <FormHelperText color={"green"}>
                  description valido
                </FormHelperText>
              ) : (
                <FormErrorMessage>se requiere la descripcion</FormErrorMessage>
              )}
            </FormControl>
          </GridItem>
          <GridItem area={"button"}>
            <Center>
              <ButtonGroup variant="outline" spacing="6" onClick={validacion}>
                <Button colorScheme="blue">Send</Button>
              </ButtonGroup>
            </Center>
          </GridItem>
        </Grid>
        {/* alerta */}

        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>formlario enviado</AlertDialogBody>
          </AlertDialogContent>
        </AlertDialog>
      </Box>
    </Container>
  );
}

export default Form;
