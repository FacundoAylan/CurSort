import React, { useState, useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { getCategory } from "../../Redux/actions/index"
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
  IconButton
} from "@chakra-ui/react";
import { ArrowLeftIcon } from '@chakra-ui/icons'

function Form() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(()=>{
    dispatch(getCategory);
  },[dispatch])
  const [input, setInput] = useState({
    nombre: "",
    instuctor: "",
    duracion: "",
    dificultad: "",
    imagen: "",
    precio: "",
    descripcion: "",
    categoria:""
  });
  const expresiones = {
    // ^[A-Za-z\s0-9_-]{3,16}$ codigo anterior
    // ^[\s\S]{0,25}$
    // 
    nombre: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/,
    // ^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$ codigo anterior
    instuctor: /[^\W_]/,    
    duracion: /^[0-9]+([,][0-9]+)?$/,
    imagen: /(?:jpg|gif|png|jfif|jpeg)/,
    descripcion: /^[\s\S]{10,300}$/,
  };
  const handleInputChange = (e) => {
    e.target.id === "duracion" || e.target.id === "precio" || e.target.id === "categoria"
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
    categoria : input.categoria === "",
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
      !e.categoria &&
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
    <Container maxW="100%" h="100vh" p="0">
      <Box p='6px'>
        <Link to="/home" className="backCreate">
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<ArrowLeftIcon />}
          />
        </Link>
      </Box>
      <Box mt="2%" ml="14%">
        <Grid
          templateColumns="repeat(2, 0.4fr)"
          gap={9}
          templateRows="repeat(3, 0.1fr)"
          p={0}
          templateAreas={`"1 2 "
                        "4 5 "
                        "6  7"
                        "8  9"
                        "d d "
                        "button button "`}
        >
          <GridItem area={"1"}>
            <FormControl isInvalid={isError.nombre} isRequired>
              <Center>
                <FormLabel>NOMBRE DEL CURSO:</FormLabel>
              </Center>
              <Input
                placeholder="Nombre"
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
                placeholder="Instructor"
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
                placeholder="Duracion"
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
                <option value="Principiante">Principiante</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
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
                  h ='150px'
                  w = '300px'
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
                  imagen valida
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
                placeholder="Precio en U$s"
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
          <GridItem>
            <FormControl isRequired isInvalid={isError.categoria}>
              <Center>
                <FormLabel>CATEGORIA:</FormLabel>
              </Center>
              <Select
                placeholder="CATEGORIA:"
                id="categoria"
                onChange={handleInputChange}
              >
                {categories &&  categories.map(el=> <option value={el.id}>{el.name}</option>)}

              </Select>
              {!isError.categoria ? (
                <FormHelperText color={"green"}>
                  categoria valida
                </FormHelperText>
              ) : (
                <FormErrorMessage>se requiere categoria</FormErrorMessage>
              )}
            </FormControl>
          </GridItem>
          <GridItem area={"d"}>
            <FormControl isRequired isInvalid={isError.descripcion}>
              <Center>
                <FormLabel>DESCRIPTION:</FormLabel>
              </Center>
              <Textarea
                placeholder="Descripción del curso"
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
          <GridItem area={"button"} pb='25px'>
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
