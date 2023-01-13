import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IconButton,
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
import { getCourses, getDetail } from "../../../Redux/actions/index";
import {EditIcon} from '@chakra-ui/icons';
import SearchAdmin from "./searchAdmin/searchAdmin";
import { useHistory, Link} from 'react-router-dom';

function CoursesAdmin() {
  let info = useSelector(
    (state) => state.admin,
    () => false
  );

  const history = useHistory()

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses(""));
  }, [dispatch]);

  const handleOnClick = (e, id)=>{
    e.preventDefault()
    dispatch(getDetail(id)) 
    history.push(`/editcourse/${id}`)
  }

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
              <Th>Rating</Th>
              <Th>Categories</Th>
              <Th>Price</Th>
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
                    <Td>{value.category}</Td>
                    {/* precio */}
                    <Td>{`$${value.price} USD`}</Td>

                    <Td>
                    {/* <Link to={`/editcourse/${value.id}`}> */}

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
                          onClick={(e) => handleOnClick(e, value.id)}
                        />

                      {/* </Link> */}

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
