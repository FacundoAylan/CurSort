import React from 'react';
import { Box, Flex, IconButton, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import SearchAdmin from './searchAdmin/searchAdmin';
import CoursesAdmin from './coursesAdmin/coursesAdmin'
import ListUsers from './listUsers/listusers'
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import CreateCategory from './CreateCategory/CreateCategory';
import CreateCourse from './CreateCourse/CreateCourse';
import Estadistica from './estadistica/estadistica';


function Admin () {
  

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
      <Tabs isFitted variant='enclosed'>
        <TabList color="white">
          <Tab>Users</Tab>
          <Tab>Courses</Tab>
          <Tab>Statistics</Tab>
          <Tab>New course</Tab>
          <Tab>New category</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
          <SearchAdmin />
            <ListUsers />
          </TabPanel>

          <TabPanel>
            <CoursesAdmin />
          </TabPanel>

          <TabPanel>
            <Estadistica/>
          </TabPanel>

          <TabPanel>
            <CreateCourse />
          </TabPanel>

          <TabPanel>
            <CreateCategory />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Admin;