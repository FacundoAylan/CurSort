import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  IconButton,
  Switch,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { getCourses } from "../../../Redux/actions/index";
import {DeleteIcon, EditIcon} from '@chakra-ui/icons';
import SearchAdmin from "./searchAdmin/searchAdmin";
import axios from "axios";
import Swal from "sweetalert2";

function CoursesAdmin() {
  let info = useSelector(
    (state) => state.admin,
    () => false
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses(""));
  }, [dispatch]);

  const handleDisable = async (id) => {
    try {
      await axios.put(`http://localhost:3001/courses/disable/${id}`);
      dispatch(getCourses(""));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.put(`http://localhost:3001/courses/delete/${id}`);
      dispatch(getCourses(""));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Course Deleted',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      console.log(error);
    }
  };

  console.log(info)
  return (
    <>
      <SearchAdmin/>
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
              <Th></Th>
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
                     {/* admin*/}
                     <Td>
                      <Box>             
                          <Switch
                            isChecked={value.enabled}
                            onChange={()=>handleDisable(value.id)}
                          />
                      </Box>
                    </Td>
                    <Td>
                      <IconButton
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
                        {/* boton para eliminar */}
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
    </>
  );
}
export default CoursesAdmin;
