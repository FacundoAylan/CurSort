import React, { useState, useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux'
import { Link, useHistory } from "react-router-dom";
import { getCategory, courseEdit } from "../../Redux/actions/index"
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
  const history = useHistory()
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const allCourses=useSelector(state=>state.allCourses)
  
  
  const [input, setInput] = useState({
    
    nombre: "",
    instuctor: "",
    duracion: "",
    dificultad: "",
    imagen: "",
    precio: "",
    descripcion: "",
    categoria:""
  }
  ); 
  console.log(input)

  function handleSubmit(e){
    e.preventDefault()
    dispatch(courseEdit(input))
    alert("Curso modificado con Exito🚀🙌")
    setInput({
      nombre: "",
      instuctor: "",
      duracion: "",
      dificultad: "",
      imagen: "",
      precio: "",
      descripcion: "",
      categoria:""
    })
    history.push('/home')
}

function handleChange(e){
  setInput({
      ...input,
      [e.target.name] : e.target.value
  })
}
  
  
  
    useEffect(()=>{
      dispatch(getCategory);
    },[dispatch])
   

  return (
    <Container maxW="100%" h="100vh" p="0">
    <form onSubmit={(e) => handleSubmit(e)} >  

      <Box p='6px'>
        <Link to="/" className="backCreate">
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
            <FormControl>
              <Center>
                <FormLabel>NOMBRE DEL CURSO A MODIFICAR:</FormLabel>
              </Center>
              <Select
                placeholder="Nombre"
                id="nombre" 
                name='name'                           
                onChange={handleChange}
                
              >
                {allCourses && allCourses.map((el)=>(
                <option value={el.id}>{el.name}
                </option>))}

              </Select>             
            </FormControl>            
          </GridItem>
          
          <GridItem>
            <FormControl>
              <Center>
                <FormLabel>INSTRUCTOR:</FormLabel>
              </Center>
              <Input
                placeholder="Instructor"
                id="instuctor"
                name='instructor'
                onChange={handleChange}
              />             
            </FormControl>
          </GridItem>


          <GridItem>
            <FormControl>
              <Center>
                <FormLabel>DURACION:</FormLabel>
              </Center>
              <Input
                placeholder="Duracion"
                id="duracion"
                name='duracion'
                onChange={handleChange}
              />              
            </FormControl>
          </GridItem>


          <GridItem>
            <FormControl>
              <Center>
                <FormLabel>DIFICULTAD:</FormLabel>
              </Center>
              <Select
                placeholder="DIFICULTAD:"
                id="dificultad"
                name='dificultad'
                onChange={handleChange}
              >
                <option value="Principiante">Principiante</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </Select>              
            </FormControl>
          </GridItem>
          
          <GridItem>
            <FormControl>
              <Center>
                <FormLabel>IMAGEN:</FormLabel>
                {input.imagen && <Image
                  h ='100px'
                  w = '100px'
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
                onChange={handleChange}
              />              
            </FormControl>
          </GridItem>


          <GridItem>
            <FormControl>
              <Center>
                <FormLabel>PRECIO :</FormLabel>
              </Center>
              <Input
                placeholder="Precio en U$s"
                id="precio"
                onChange={handleChange}
              />              
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <Center>
                <FormLabel>CATEGORIA:</FormLabel>
              </Center>
              <Select
                placeholder="CATEGORIA:"
                id="categoria"
                onChange={handleChange}
              >
                {categories &&  categories.map(el=> <option value={el.id}>{el.name}</option>)}

              </Select>              
            </FormControl>
          </GridItem>


          <GridItem area={"d"}>
            <FormControl>
              <Center>
                <FormLabel>DESCRIPTION:</FormLabel>
              </Center>
              <Textarea
                placeholder="Descripción del curso"
                id="descripcion"
                name='descripcion'
                onChange={handleChange}
              />             
            </FormControl>
          </GridItem>


          <GridItem area={"button"} pb='25px'>
            <Center>
              <ButtonGroup variant="outline" spacing="6">
                <Button
                onSubmit={(e) => handleSubmit(e)} 
                type='submit'
                colorScheme="blue">Send</Button>
              </ButtonGroup>
            </Center>
          </GridItem>
        </Grid>

        {/* alerta */}

        <AlertDialog
          motionPreset="slideInBottom"
          //leastDestructiveRef={cancelRef}
          //onClose={onClose}
          //isOpen={isOpen}
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
          </form>
    </Container>
  );
}

export default Form;

