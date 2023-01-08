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
import { getCategory } from "../../../Redux/actions/index"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@chakra-ui/icons";

const Form1 = ({ input, setInput, isError }) => {

  const handleInputChange = (e) => {
   setInput({ ...input, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Flex mt='5%'>
        <FormControl mr="5%" isInvalid={isError.nombre} isRequired>
          <FormLabel htmlFor="first-name" fontWeight={"normal"} color='white'>
            Course name:
          </FormLabel>
          <Input
            id="nombre"
            onChange={handleInputChange}
            color='white'
          />
          {!isError.nombre ? (
            <FormHelperText color={"green"}>✓</FormHelperText>
          ) : (
            <FormErrorMessage>Obligatory field</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isRequired isInvalid={isError.instuctor}>
          <FormLabel htmlFor="last-name" fontWeight={"normal"} color='white'>
            Instructor name:
          </FormLabel>
          <Input
            id="instuctor"
            onChange={handleInputChange}
            color='white'
          />
          {!isError.instuctor ? (
            <FormHelperText color={"green"}>✓</FormHelperText>
          ) : (
            <FormErrorMessage>
              Obligatory field
            </FormErrorMessage>
          )}
        </FormControl>
      </Flex>

      <Flex mt='3%'>
        <FormControl
          mt="2%"
          w="48%"
          mr="5%"
          isRequired
          isInvalid={isError.duracion}
        >
          <FormLabel htmlFor="email" fontWeight={"normal"} color='white'>
            Duration time: (hs)
          </FormLabel>
          <Input
            id="duracion"
            onChange={handleInputChange}
            color='white'
          />
          {!isError.duracion ? (
            <FormHelperText color={"green"}>✓</FormHelperText>
          ) : (
            <FormErrorMessage>
              Obligatory field
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl w="48%" mt="1%" isRequired isInvalid={isError.dificultad}>
          <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%" color='white'>
            Difficulty:
          </FormLabel>
          <Select
            placeholder="Enter an option:"
            id="dificultad"
            onChange={handleInputChange}
            color='white'
          >
            <option value="Beginner">Beginner</option>
            <option value="Middle">Middle</option>
            <option value="Advanced">Advanced</option>
          </Select>
          {!isError.dificultad ? (
            <FormHelperText color={"green"}>✓</FormHelperText>
          ) : (
            <FormErrorMessage>Obligatory field</FormErrorMessage>
          )}
        </FormControl>
      </Flex>
    </>
  );
};

const Form2 = ({ input, setInput, categories, isError }) => {

  const handleInputChange = (e) => {
     setInput({ ...input, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Flex mt='5%' pb='17.2%'>
        <FormControl mr="5%" isRequired isInvalid={isError.precio}>
          <FormLabel htmlFor="first-name" fontWeight={"normal"} color='white'>
            Cost:
          </FormLabel>
          <Input
            placeholder="US$"
            id="precio"
            onChange={handleInputChange}
            color='white'
          />
          {!isError.precio ? (
            <FormHelperText color={"green"}>✓</FormHelperText>
          ) : (
            <FormErrorMessage>Obligatory field</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isRequired isInvalid={isError.categoria}>
          <FormLabel htmlFor="last-name" fontWeight={"normal"} color='white'>
            Category:
          </FormLabel>
          <Select
            placeholder="Enter an option:"
            id="categoria"
            onChange={handleInputChange}
            color='white'
          >
            {categories &&
              categories.map((el) => <option value={el.id}>{el.name}</option>)}
          </Select>
          {!isError.categoria ? (
            <FormHelperText color={"green"}>✓</FormHelperText>
          ) : (
            <FormErrorMessage>Obligatory field</FormErrorMessage>
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
      <FormControl as={GridItem} colSpan={[6, 3]} pb='15.4%'>
        <FormLabel htmlFor="last-name" fontWeight={"normal"} color='white' mt='5%'>
          Cover image:
        </FormLabel>        
        <Center>
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
        <Input value={input.id} color='white'/>
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
   setInput({ ...input, [e.target.id]: e.target.value });
  };
  return (
    <>
      <FormLabel htmlFor="last-name" fontWeight={"normal"} color='white' mt='5%'>
        Description:
      </FormLabel>        
      <SimpleGrid columns={1} spacing={6}>
        <FormControl
          as={GridItem}
          colSpan={[3, 2]}
          isRequired
          isInvalid={isError.descripcion}
        >
          <Textarea
            placeholder="This course is about..."
            id="descripcion"
            onChange={handleInputChange}
            color='white'
            size='sm'
            rows='8'
          />
          {!isError.descripcion ? (
            <FormHelperText color={"green"}>✓</FormHelperText>
          ) : (
            <FormErrorMessage>Obligatory field</FormErrorMessage>
          )}
        </FormControl>
      </SimpleGrid>
    </>
  );
};

function CreateCursor() {
  
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);
  
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
    instuctor: expresiones.instuctor.test(input.instuctor) ? false : true,
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
      !e.nombre 
      // &&
    //   !e.instuctor &&
    //  // !e.duracion &&
    //   !e.dificultad &&
    //   !e.categoria &&
    //   // !e.imagen &&
    //   // !e.precio &&
    //   !e.descripcion
    ) {
      axios.post('http://localhost:3001/courses',input)
        .then(res => {
            setInput({
            })
        })
        .catch(error=> alert(`${error}`));
      return true;
    } else {
      return false;
    }
  };
  return (
    <Container maxW="100%" as="form" color="black">
      <Box maxWidth={800} ml='18%' mt='3%' p={2}>
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
        <Center>
        <ButtonGroup mt="7%" w="100" >
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              {step !== 1 && (
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 25);
                }}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              )}
              {step !== 4 && (
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
              )}
            </Flex>
            {step === 4 ? (
              <Button
                width="7rem"
                colorScheme="red"
                variant="solid"
                ml='4%'
                isDisabled={isError.descripcion}
                onClick={() => {
                  validacion();
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                  setTimeout(function(){
                    window.history.back()
                }, 1000)
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
        </Center>
      </Box>
    </Container>
  );
}
export default CreateCursor;
