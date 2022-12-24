import React, { useEffect, useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Textarea,
  FormHelperText,
  Center,
  Image,
  FormErrorMessage,
  Container,
  IconButton,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { getCategory } from "../../Redux/actions/index"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
const Form1 = ({ input, setInput, isError }) => {
  
  const handleInputChange = (e) => {
    e.target.id === "duracion" ||
    e.target.id === "precio" ||
    e.target.id === "categoria"
      ? setInput({ ...input, [e.target.id]: Number(e.target.value) })
      : setInput({ ...input, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl mr="5%" isInvalid={isError.nombre} isRequired>
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            NOMBRE DEL CURSO:
          </FormLabel>
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

        <FormControl isRequired isInvalid={isError.instuctor}>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            INSTRUCTOR:
          </FormLabel>
          <Input
            placeholder="Instructor"
            id="instuctor"
            onChange={handleInputChange}
          />
          {!isError.instuctor ? (
            <FormHelperText color={"green"}>instuctor valido</FormHelperText>
          ) : (
            <FormErrorMessage>
              se requiere el nombre del instuctor
            </FormErrorMessage>
          )}
        </FormControl>
      </Flex>

      <Flex>
        <FormControl
          mt="2%"
          w="48%"
          mr="5%"
          isRequired
          isInvalid={isError.duracion}
        >
          <FormLabel htmlFor="email" fontWeight={"normal"}>
            DURACION:
          </FormLabel>
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
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl w="48%" mt="1%" isRequired isInvalid={isError.dificultad}>
          <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
            DIFICULTAD:
          </FormLabel>
          <Select
            placeholder="DIFICULTAD:"
            id="dificultad"
            onChange={handleInputChange}
            color='black'
          >
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </Select>
          {!isError.dificultad ? (
            <FormHelperText color={"green"}>dificultad valido</FormHelperText>
          ) : (
            <FormErrorMessage>se requiere la dificultad</FormErrorMessage>
          )}
        </FormControl>
      </Flex>
    </>
  );
};

const Form2 = ({ input, setInput, categories, isError }) => {

  const handleInputChange = (e) => {
    e.target.id === "duracion" ||
    e.target.id === "precio" ||
    e.target.id === "categoria"
      ? setInput({ ...input, [e.target.id]: Number(e.target.value) })
      : setInput({ ...input, [e.target.id]: e.target.value });
  };
  console.log(categories)

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl mr="5%" isRequired isInvalid={isError.precio}>
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            Precio
          </FormLabel>
          <Input
            placeholder="Precio en U$s"
            id="precio"
            onChange={handleInputChange}
          />
          {!isError.precio ? (
            <FormHelperText color={"green"}>precio valido</FormHelperText>
          ) : (
            <FormErrorMessage>se requiere precio del curso</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isRequired isInvalid={isError.categoria}>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            CATEGORIA:
          </FormLabel>
          <Select
            placeholder="CATEGORIA:"
            id="categoria"
            onChange={handleInputChange}
          >
            {categories &&
              categories.map((d) => (<option value={d.id}>{d.name}</option>))}
          </Select>
          {!isError.categoria ? (
            <FormHelperText color={"green"}>categoria valida</FormHelperText>
          ) : (
            <FormErrorMessage>se requiere categoria</FormErrorMessage>
          )}
        </FormControl>
      </Flex>
    </>
  );
};

const Form3 = ({ input, setInput }) => {
  const handleImagen = (e) => {
    const file = e.target.files[0];
    const storage = getStorage();
    const referencia = ref(storage, `cursos/${file.name}`);

    const task = uploadBytesResumable(referencia, file);

    task.on("state_changed", null, null, () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(task.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        setInput({
          ...input,
          [e.target.id]: downloadURL,
        });
      });
    });
  };
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Imagen
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <Center>
          <Center p={5}>
            {input.imagen && (
              <Image
                h="150px"
                w="300px"
                src={input.imagen}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                border="1px"
                borderColor="gray.200"
              />
            )}
          </Center>
        </Center>
        <Input value={input.id} />
        <Box pt={2}>
          <input
            pt={3}
            type="file"
            placeholder="jpg o png"
            id="imagen"
            onChange={handleImagen}
          />
        </Box>
      </FormControl>
    </>
  );
};

const Form4 = ({ input, setInput, isError }) => {
  const handleInputChange = (e) => {
    e.target.id === "duracion" ||
    e.target.id === "precio" ||
    e.target.id === "categoria"
      ? setInput({ ...input, [e.target.id]: Number(e.target.value) })
      : setInput({ ...input, [e.target.id]: e.target.value });
      
  };
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Descripción
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl
          as={GridItem}
          colSpan={[3, 2]}
          isRequired
          isInvalid={isError.descripcion}
        >
          <Textarea
            placeholder="Descripción del curso"
            id="descripcion"
            onChange={handleInputChange}
          />
          {!isError.descripcion ? (
            <FormHelperText color={"green"}>description valido</FormHelperText>
          ) : (
            <FormErrorMessage>se requiere la descripcion</FormErrorMessage>
          )}
        </FormControl>
      </SimpleGrid>
    </>
  );
};

function Form() {
  
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const history = useHistory()

  useEffect(() => {
    dispatch(getCategory);
  }, [dispatch]);
  
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [input, setInput] = useState({
    nombre: "",
    instuctor: "",
    duracion: "",
    dificultad: "",
    imagen: "",
    precio: "",
    descripcion: "",
    categoria: "",
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

  const isError = {
    nombre: expresiones.nombre.test(input.nombre) ? false : true,
    //instuctor: expresiones.instuctor.test(input.instuctor) ? false : true,
    duracion: expresiones.duracion.test(input.duracion) ? false : true,
    dificultad: input.dificultad === "",
    categoria: input.categoria === "",
    imagen: expresiones.imagen.test(input.imagen) ? false : true,
    precio: expresiones.duracion.test(input.precio) ? false : true,
    descripcion: expresiones.descripcion.test(input.descripcion) ? false : true,
  };
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
    <Container maxW="100%" h="100vh" as="form"  color="black">
      <Box pt={1}>
        <Link to="/home" className="backCreate">
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<ArrowLeftIcon />}
          />
        </Link>
      </Box>
      <Box maxWidth={800} ml='18%' mt='5%' p={2} border='1px' borderColor='black' borderRadius={9} bg="#3E4AB8" >
        <Progress hasStripe value={progress} isAnimated></Progress>
        {step === 1 ? (
          <Form1 input={input} setInput={setInput} isError={isError} />
        ) : step === 2 ? (
          <Form2
            input={input}
            setInput={setInput}
            categories={categories}
            isError={isError}
          />
        ) : step === 3 ? (
          <Form3 input={input} setInput={setInput} />
        ) : (
          <Form4 input={input} setInput={setInput} isError={isError} />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 25);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 4}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 4) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 25);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 4 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  validacion();
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                  history.push('/home')
                }
              
              }
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
export default Form;
