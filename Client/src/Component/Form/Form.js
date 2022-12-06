import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getStorage, ref ,uploadBytesResumable,getDownloadURL} from "firebase/storage";
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
  Image,
  Box,
} from "@chakra-ui/react";

function Form() {
  const [input, setInput] = useState({
    nombre: "",
    instuctor: "",
    duracion: "",
    dificultad: "",
    imagen: "",
    precio: "",
    descripcion: "",
  });
  const expresiones = {
    nombre: /^[a-z0-9_-]{3,16}$/,
    instuctor: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
    duracion: /^[0-9]+([,][0-9]+)?$/,
    imagen: /(?:jpg|gif|png|jfif)/,
    descripcion: /^[\s\S]{10,100}$/,
  };
  const handleInputChange = (e) => {
    e.target.id === "duracion" || e.target.id === "precio"
      ? setInput({ ...input, [e.target.id]: Number(e.target.value) })
      : setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleImagen = (e)=>{
    const file = e.target.files[0];
    const storage = getStorage();
    const referencia = ref(storage, `cursos/${file.name}`)

    const task = uploadBytesResumable(referencia, file);

    task.on('state_changed',null,null,() => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(task.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setInput({
            ...input,
            [e.target.id]: downloadURL
          })
        });
      })

  }
  const isError = {
    nombre: expresiones.nombre.test(input.nombre) ? false : true,
    instuctor: expresiones.instuctor.test(input.instuctor) ? false : true,
    duracion: expresiones.duracion.test(input.duracion) ? false : true,
    dificultad: input.dificultad === "",
    imagen: expresiones.imagen.test(input.imagen) ? false : true,
    precio: expresiones.duracion.test(input.precio) ? false : true,
    descripcion: expresiones.descripcion.test(input.descripcion) ? false : true
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
      !e.precio &&
      !e.descripcion
    ) {
      
      axios.post('http://localhost:3001/courses',input)
        .then(res => {
            onOpen();
            setInput({
            })
        })
        .catch(error=> alert(`hubo un problema al registrar tu receta ${error}`));
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
                {input.imagen && <Image

                  src={input.imagen}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  border='1px' borderColor='gray.200'
              />}
              </Center>
              <Input
                m = "1" 
                type='file' 
                placeholder="jpg o png"
                id="imagen"
                onChange={handleImagen}
              />
              {!isError.imagen ? (
                <FormHelperText color={"green"}>
                  imagen valida valido
                </FormHelperText>
              ) : (
                <FormErrorMessage>
                  se requiere una imagen
                </FormErrorMessage>
              )}
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired isInvalid={isError.precio}>
              <Center>
                <FormLabel>PRECIO :</FormLabel>
              </Center>
              <Input
                placeholder="Basic usage"
                id="precio"
                onChange={handleInputChange}
              />
              {!isError.precio ? (
                <FormHelperText color={"green"}>precio valido</FormHelperText>
              ) : (
                <FormErrorMessage>
                  se requiere precio del curso
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
            <AlertDialogHeader>Exitoso</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>formulario enviado</AlertDialogBody>
          </AlertDialogContent>
        </AlertDialog>
      </Box>
    </Container>
  );
}

export default Form;
