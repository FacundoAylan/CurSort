import React, { useEffect} from "react";
import axios from "axios";
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
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { getUsers } from "../../../Redux/actions/index";
import {DeleteIcon} from '@chakra-ui/icons';

function ListUsers() {
  let users = useSelector(state => state.users);

  const dispatch = useDispatch();


  const handleAdmin = async (email)=>{
    try {
      await axios.put(`http://localhost:3001/users/disableAdmin?email=${email}`);
      dispatch(getUsers());
    } catch(error){
      console.log(error);
    }
  }
 
  const handle = async (email)=>{
  try {
    await axios.put(`http://localhost:3001/users/disable?mail=${email}`);
    dispatch(getUsers());
  } catch(error){
    console.log(error);
  }
  }

  const handleClick = async email=>{
    try {
      await axios.delete(`http://localhost:3001/users/delete?email=${email}`);
      dispatch(getUsers());
    } catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    dispatch(getUsers());
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
            {users &&
              users.map((el) => {
                return (
                  <Tr>
                    {/* email*/}
                    <Td>{el.email}</Td>
                    {/* nombre*/}
                    <Td>{el.name}</Td>
                    {/* apellido */}
                    <Td>{el.lastname}</Td>
                    {/* Telefono */}
                    <Td>{el.phone}</Td>
                    {/* admin*/}
                    <Td>
                      <Box>             
                          <Switch
                            isChecked={el.admin}
                            onChange={()=>handleAdmin(el.email)}
                          />
                      </Box>
                    </Td>
                    <Td>
                      {/* boton para convertir en admin */}
                      <Box>             
                          <Switch 
                            isChecked={el.enabled}
                            onChange={()=>handle(el.email)}
                          />
                      </Box>
                    </Td>

                    <Td>
                        {/* boton para eliminar */}
                        <IconButton
                        onClick={()=>handleClick(el.email)}
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
export default ListUsers;
