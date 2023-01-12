import React, { useEffect} from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  IconButton, 
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
import { putUser, } from "../../Redux/actions/index";



const ProfileEdit = () => {
const dispatch = useDispatch();

const newUser = useSelector((state) => state.userEmail)

// console.log('new user :', newUser)

const [input, setInput] = useState({
      email: newUser.email,
      name: newUser.name,
      lastname: newUser.lastname,
      phone: newUser.phone,
      country: newUser.country,
      city: newUser.city,
      adress: newUser.adress,
      codePostal: newUser.codePostal,
      gender:newUser.gender? newUser.gender: '',
      birthday: newUser.birthday,
      imagen:newUser.imagen
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
              value={input.name}
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
              <Center>Lastname</Center>
              <Input
              value={input.lastname}
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
                value={input.phone}
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
              value={input.country}
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
              value={input.city}
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
              value={input.adress}
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
              value={input.postalCode}
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
              value={input.gender}
                placeholder="Gender"
                style={{ backgroundColor: "#191E29" }}
                onChange={handleChange}
                name="gender"
              >
                <option value="F" style={{ backgroundColor: "#191E29" }}>
                Female
                </option>
                <option value="M" style={{ backgroundColor: "#191E29" }}>
                Male
                </option>
              </Select>
            </FormControl>
          </GridItem>
        </Grid>
        <Center>
          <Button onClick={handleSubmit} type="submit" p={2} color="green" w='50px'>
            Edit
          </Button>
        </Center>

      </form>
    </>
  );
}
export default ProfileEdit
