import React, { useEffect } from "react";
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
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { putUser } from "../../Redux/actions/index";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const newUser = useSelector((state) => state.userEmail);
  const history = useHistory();

 

  const [input, setInput] = useState({
    name: newUser.name,
    lastname: newUser.lastname,
    email: newUser.email,
    birthday: newUser.birthday,
    phone: newUser.phone,
    address: newUser.address,
    city: newUser.city,
    country: newUser.country,
    postalCode: newUser.postalCode,
    gender: newUser.gender,
    
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(putUser(input));
    setInput({
    name: '',
    lastname: '',
    email: '',
    birthday:'',
    phone: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    gender: '',
    });
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: `successfully modified Profile`,
      fontSize: '5px',
      showConfirmButton: false,
      timer: 1500
    })
    history.push("/home");
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
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
          h="390px"
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
                type="text"
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
              <Center>Address</Center>
              <Input
                value={input.address}
                color="white"
                className="form-control"
                name="address"
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
          <Button
            onClick={handleSubmit}
            type="submit"
            p={2}
            color="green"
            w="50px"
          >
            Edit
          </Button>
        </Center>
      </form>
    </>
  );
};
export default ProfileEdit;
