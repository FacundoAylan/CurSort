import React from "react";
import { Box, Button, Center, Flex, IconButton, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Tr } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@chakra-ui/icons";

function MyCourses() {
  const newUser = useSelector((state) => state.userEmail)
  // console.log(newUser.email)
  // console.log(newUser)

  const coursesUser = newUser && newUser.courses
console.log('curso user :' , coursesUser)
  // const courses = [1,2,3,4,5,6]
  return (
    <>
      <Box pt="2px">
        <Link to="/home">
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<ArrowLeftIcon />}
            position="fixed"
            my="3"
            ml="1"
          />
        </Link>
      </Box>
      <Box pt='25px'>
        <Center color="white" fontSize={30}>
          My Courses
        </Center>
        <TableContainer color="white">
          <Table variant="striped" colorScheme="#191E29" whiteSpace={2}>
            <TableCaption>Cursort</TableCaption>
            {coursesUser &&
              coursesUser.map((c) => {
                return (
                  <Flex
                    flexDirection="row"
                    w="98.7vw"
                    h="53px"
                    bg="none"
                    m={2}
                    p={1}
                    borderRadius={12}
                    border="2px"
                    borderColor="white"
                  >
                    <Text pt={2} pl={2}>
                      {c.name}
                    </Text>
                    <Link to="/course">
                      <Button
                        bg="red"
                        _hover={{ background: "#3E4AB8" }}
                        ml="76vw"
                      >
                        watch
                      </Button>
                    </Link>
                  </Flex>
                );
              })}
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default MyCourses;
