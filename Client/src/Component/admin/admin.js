import React from 'react';
import { Box, Flex, IconButton, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Usuarios from './usuarios/usuarios';
import SearchAdmin from './searchAdmin/searchAdmin';
import CoursesAdmin from './coursesAdmin/coursesAdmin'
import ListCourses from './listUsers/listusers'
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@chakra-ui/icons';


function Admin () {
  const usuario = [1,2,3,4,5,6];

  return (
    <>
      <Box pt="10px">
        <Link to="/">
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<ArrowLeftIcon />}
          />
        </Link>
      </Box>
      <Tabs>
        <TabList color="white">
          <Tab>Users</Tab>
          <Tab>ListUsers</Tab>
          <Tab>Courses</Tab>
          <Tab>statistics</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SearchAdmin />
            <Flex
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-around"
              maxW="90%"
              pl="120px"
            >
              {usuario.map((value) => {
                return <Usuarios />;
              })}
            </Flex>
          </TabPanel>
          <TabPanel>
            <ListCourses />
          </TabPanel>

          <TabPanel>
            <CoursesAdmin />
          </TabPanel>

          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Admin;