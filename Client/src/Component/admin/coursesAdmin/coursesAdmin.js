import React, {useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  IconButton,
  Switch,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import { getCourses } from "../../../Redux/actions/index";
import {EditIcon, DeleteIcon} from '@chakra-ui/icons';

function CoursesAdmin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  const [form, setForm] = useState({});
  const [id, setId] = useState(0);
 
  let info = useSelector(
    (state) => state.courses,
    () => false
  );

  const handleChange = async (id)=>{
    try {
      await axios.put(`http://localhost:3001/courses/disable/${id}`);
      dispatch(getCourses(""));
    } catch(error){
      console.log(error);
    }
  }

  const handleClick = async() => {
      try {
        await axios.put(`http://localhost:3001/courses/edit/${id}`, form);
        dispatch(getCourses(""));
        setForm({});
      }catch(error){
        console.log(error)
      }
  }

  const handleForm = (e) =>{
      if(e.target.id === 'name'){
        setForm({
          ...form,
          [e.target.id]: e.target.value.toUpperCase()
        })
      }else{
        setForm({
          ...form,
          [e.target.id]: e.target.value
        })
      }
      
  }

  const handleDelete = async (id)=>{
    try{
      await axios.delete(`http://localhost:3001/courses/delete/${id}`);
      dispatch(getCourses(""));
    }catch(error){
      console.log(error);
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses(""));
  }, [dispatch]);

  return (
    <>
      <TableContainer color="white">
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Course</Th>
              <Th>Instructor</Th>
              <Th>Review</Th>
              <Th>Categories</Th>
              <Th>Price</Th>
              <Th>Enable</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {info &&
              info.map((value) => {
                return (
                  <Tr>
                    {/* nombre del curso */}
                    <Td>{value.name}</Td>
                    {/* nombre del instructor */}
                    <Td>{value.instructor}</Td>
                    {/* visitas */}
                    <Td pl="3%">{value.rating}</Td>
                    {/* categoria */}
                    <Td>{value.categories[0]}</Td>
                    {/* precio */}
                    <Td>{`$${value.price} USD`}</Td>
                    <Td>
                      <Switch
                        isChecked={value.active}
                        onChange={()=>handleChange(value.id)}
                      />
                    </Td>
                    <Td>
                      <IconButton
                        onClick={()=>{onOpen();setId(value.id)}}
                        flex={1}
                        fontSize={"sm"}
                        rounded={"full"}
                        maxW="10px"
                        bg={"blue.400"}
                        color={"white"}
                        boxShadow={
                          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                          bg: "blue.500",
                        }}
                        _focus={{
                          bg: "blue.500",
                        }}
                        aria-label="Search database"
                        icon={<EditIcon />}
                      />
                    </Td>
                    <Td>
                    <IconButton
                        onClick={()=>handleDelete(value.id)}
                        flex={1}
                        fontSize={"sm"}
                        rounded={"full"}
                        maxW="10px"
                        bg={"blue.400"}
                        color={"white"}
                        boxShadow={
                          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                          bg: "blue.500",
                        }}
                        _focus={{
                          bg: "blue.500",
                        }}
                        aria-label="Search database"
                        icon={<DeleteIcon />}
                        />
                    </Td>
                    
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit the course :</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <FormControl>
              <FormLabel>Course name:</FormLabel>
              <Input 
                id='name'
                ref={initialRef} 
                placeholder='Cuorse name' 
                value={form.name}
                onChange={handleForm} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price :</FormLabel>
              <Input 
                id='price'
                placeholder='Price' 
                value={form.price}
                onChange={handleForm}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>description :</FormLabel>
              <Textarea 
                id='description'
                row={2} 
                placeholder='Descripcion' 
                value={form.description}
                onChange={handleForm}/>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={()=>{handleClick(); onClose()}} 
              colorScheme='blue' 
              mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  );
}
export default CoursesAdmin;
