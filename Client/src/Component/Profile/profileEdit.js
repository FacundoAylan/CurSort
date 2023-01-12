import React, { useEffect} from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,  
  Select,
  Input,
  FormControl,
  Button,
  Center,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { getUsers, putUser, getOrders } from "../../Redux/actions/index";


const ProfileEdit = () => {
const users = useSelector((state) => state.users);
const dispatch = useDispatch();
const order = useSelector((state) => state.orders )

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
      <TableContainer color="white">
        <Table>
          <Tbody>
            {order &&
              order.map((e) => {
                return (
                  <Tr>
                    <Td>{e.courses.name}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
        <Table>
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
      
      <form onSubmit={(e) => handleSubmit(e)}>
        <Center color="white" fontSize={30}>
          Edit Profile
        </Center>
        <Grid
          templateColumns="repeat(2,1fr)"
          templateRows="repeat(9,100px)"
          color="white"
          h='390px'
        >
          <GridItem pl={3} pr={3}>
            <FormControl>
              <Center>Name</Center>
              <Input
                color="white"
                className="form-control"
                name="name"
                type="text"
                onChange={handleChange}
                placeholder="Name..."
              ></Input>
            </FormControl>
          </GridItem>

          <GridItem pl={3} pr={3}>
            <FormControl>
              <Center>Last Name</Center>
              <Input
                color="white"
                className="form-control"
                name="lastname"
                type="text"
                onChange={handleChange}
                placeholder="Lastname..."
              ></Input>
            </FormControl>
          </GridItem>

          <GridItem pl={3} pr={3}>
            <FormControl>
              <Center>Phone</Center>
              <Input
                color="white"
                className="form-control"
                name="phone"
                type="number"
                onChange={handleChange}
                placeholder="Phone..."
              ></Input>
            </FormControl>
          </GridItem>

          <GridItem pl={3} pr={3}>
            <FormControl>
              <Center>Country </Center>
              <Input
                color="white"
                className="form-control"
                name="country"
                type="text"
                onChange={handleChange}
                placeholder="Country..."
              ></Input>
            </FormControl>
          </GridItem>

          <GridItem pl={3} pr={3}>
            <FormControl>
              <Center>City</Center>
              <Input
                color="white"
                className="form-control"
                name="city"
                type="text"
                onChange={handleChange}
                placeholder="City..."
              ></Input>
            </FormControl>
          </GridItem>

          <GridItem pl={3} pr={3}>
            <FormControl>
              <Center>Adress</Center>
              <Input
                color="white"
                className="form-control"
                name="adress"
                type="text"
                onChange={handleChange}
                placeholder="Adress..."
              ></Input>
            </FormControl>
          </GridItem>
          <GridItem pl={3} pr={3}>
            <FormControl>
              <Center>Postal Code</Center>
              <Input
                color="white"
                className="form-control"
                name="postalCode"
                type="number"
                onChange={handleChange}
                placeholder="Postal Code..."
              ></Input>
            </FormControl>
          </GridItem>

          <GridItem pl={3} pr={3}>
            <FormControl>
              <Center>Gender</Center>
              <Select
                placeholder="Gender"
                style={{ backgroundColor: "#191E29" }}
                onChange={handleChange}
                name="gender"
              >
                <option value="Female" style={{ backgroundColor: "#191E29" }}>
                  F
                </option>
                <option value="Male" style={{ backgroundColor: "#191E29" }}>
                  M
                </option>
              </Select>
            </FormControl>
          </GridItem>
        </Grid>
        <Center>
          <Button type="submit" p={2} color="green" w='50px'>
            Edit
          </Button>
        </Center>

      </form>
    </>
  );
}
export default ProfileEdit
