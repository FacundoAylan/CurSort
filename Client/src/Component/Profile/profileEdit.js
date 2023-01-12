import React, { useEffect} from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  IconButton,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,  
  FormLabel,
  Select,
  Input,
  FormControl,
  Button,
  RadioGroup,
  HStack,
  Radio,
  Stack,
  ButtonGroup
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { EditIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { getUsers, putUser, getOrders } from "../../Redux/actions";


const ProfileEdit = () => {
const users = useSelector((state) => state.users);
const dispatch = useDispatch();
const order = useSelector((state) => state.orders )
console.log(users)
console.log(order)
const [input, setInput] = useState({
       email: "",
        name: "",
        lastname: "",
        phone: "",
        country: "",
        city: "",
        adress: "",
        codePostal: "",
        gender:"",
        birthday:""
      });

  function handleSubmit(e){
        e.preventDefault()
        dispatch(putUser(input))        
        setInput({
          email: "",
          name: "",
          lastname: "",
          phone: "",
          country: "",
          city: "",
          adress: "",
          codePostal: "",
          gender:"",
          birthday:""
        })
       
    }


function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })      
    }

    useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]);

  return (
    
   <>
    <Box pt="10px">
        <Link to="/home">
          <IconButton
            colorScheme="black"
            aria-label="Search database"
            icon={<ArrowLeftIcon />}
          />
        </Link>
                           
        
    </Box>
              <br></br>
              <br></br> 
<TableContainer color="white">
      <Table>
        <Thead><Tr><Th>Courses</Th></Tr>
        </Thead>
        <Tbody>
          {order&& order.map((e) =>{
            return(<Tr><Td>{e.courses.name}</Td></Tr>
            )
          })}
        </Tbody>
      </Table>    
        <Table >          
          <Thead>
            <Tr>
              <Th>Email</Th>
              <Th>Name</Th>
              <Th>Lastname</Th>
              <Th>Phone</Th>
              <Th>Country</Th>
              <Th>City</Th>
              <Th>Adress</Th>
              <Th>Code P.</Th>
              <Th>Gender</Th>
              <Th>Birthday</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users &&
              users.map((el) => {
                return (
                  <Tr>                    
                    <Td>{el.email}</Td>                 
                    <Td>{el.name}</Td>
                    <Td>{el.lastname}</Td>
                    <Td>{el.phone}</Td>
                    <Td>{el.country}</Td>
                    <Td>{el.city}</Td>
                    <Td>{el.adress}</Td>
                    <Td>{el.postalCode}</Td>
                    <Td>{el.gender}</Td>  
                    <Td>{el.birthday}</Td>      

                  </Tr>
                  
                );
              })}
          </Tbody>
          
        </Table>

</TableContainer>
     

    <form onSubmit={(e) => handleSubmit(e)} >

            <div>
                <h3>
                  Editar Perfil
                </h3>                        
            </div>       Juuj
       
              <FormControl>
              <FormLabel>Name</FormLabel>
                <Input 
                color="white"
                className="form-control"
                name="name"
                type="text"
                onChange={handleChange}
                placeholder="Name..."
                >
                </Input>              
              </FormControl>

              <FormControl>
              <FormLabel>Last Name</FormLabel>
                <Input 
                color="white"
                className="form-control"
                name="lastname"
                type="text"
                onChange={handleChange}
                placeholder="Lastname..."
                >
                </Input>              
              </FormControl>

              <FormControl>
              <FormLabel>Phone</FormLabel>
                <Input 
                color="white"
                className="form-control"
                name="phone"
                type="number"
                onChange={handleChange}
                placeholder="Phone..."
                >
                </Input>              
              </FormControl>


              <FormControl>
              <FormLabel>Country </FormLabel>
                <Input 
                color="white"
                className="form-control"
                name="country"
                type="text"
                onChange={handleChange}
                placeholder="Country..."
                >
                </Input>             
              </FormControl>

              <FormControl>
              <FormLabel>City</FormLabel>
                <Input 
                color="white"
                className="form-control"
                name="city"
                type="text"
                onChange={handleChange}
                placeholder="City..."
                >
                </Input>              
              </FormControl>


              <FormControl>
              <FormLabel>Adress</FormLabel>
                <Input 
                color="white"
                className="form-control"
                name="adress"
                type="text"
                onChange={handleChange}
                placeholder="Adress..."
                >
                </Input>              
              </FormControl>


              <FormControl>
              <FormLabel>Postal Code</FormLabel>
                <Input 
                color="white"
                className="form-control"
                name="postalCode"
                type="number"
                onChange={handleChange}
                placeholder="Postal Code..."
                >
                </Input>              
              </FormControl>

              <FormControl>
                <Input>
                
                </Input>
              <Select placeholder='Gender'>
              <option value='Female'>F</option>
              <option value='Male'>M</option>
              </Select>
              
              </FormControl>

              <Button 
              type="submit"
              p={2}color="green"> Editar </Button>

    </form>
      


   
    </>     
    
  )
}
export default ProfileEdit
