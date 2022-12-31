import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Center,
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
} from "@chakra-ui/react";
import { getCourses } from "../../../Redux/actions/index";
import {DeleteIcon} from '@chakra-ui/icons';

function ListCourses() {
  let info = useSelector(
    (state) => state.courses,
    () => false
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses(""));
  }, [dispatch]);

  return (
    <>
      <TableContainer color="white">
        <Table variant="simple">
          <TableCaption>Property Cursort</TableCaption>
          <Thead>
            <Tr>
              <Th>Email</Th>
              <Th>Name</Th>
              <Th pl="2%">Surname</Th>
              <Th pl="3%">Phone</Th>
              <Th pl="1%">Admin</Th>
              <Th>Enable</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {info &&
              info.map((value) => {
                return (
                  <Tr>
                    {/* email*/}
                    <Td>buscoempleo@gmail.com</Td>
                    {/* nombre*/}
                    <Td>franco</Td>
                    {/* apellido */}
                    <Td>Escamilla</Td>
                    {/* Telefono */}
                    <Td>1134759401</Td>
                    {/* admin*/}
                    <Td>No</Td>
                    <Td>
                      {/* boton para convertir en admin */}
                      <Box>
                        <p htmlFor="isChecked">On/Off:</p>
                          <Switch
                            id="isChecked"
                            p={0}
                            colorScheme="blue"
                            bg="black"
                            w="15.7%"
                            borderRadius="30px"
                            border="2px"
                            borderColor="black"
                          />
                      </Box>
                    </Td>

                    <Td>
                        {/* boton para eliminar */}
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
export default ListCourses;
