import React from 'react';
import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Usuarios from './usuarios/usuarios';
import SearchAdmin from './searchAdmin/searchAdmin';
import CoursesAdmin from './coursesAdmin/coursesAdmin'
import ListCourses from './listUsers/listusers'


function Admin () {
  const usuario = [1,2,3,4,5,6];

  return (
    <>
    <Tabs>
      <TabList color='white'>
        <Tab>Users</Tab>
        <Tab>ListUsers</Tab>
        <Tab>Courses</Tab>
        <Tab>statistics</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <SearchAdmin/>  
          <Flex flexDirection='row' flexWrap='wrap' justifyContent='space-around' maxW='90%' pl='120px'>
            {
            usuario.map(value =>{
              return (
                <Usuarios/>
              )
            })
            }
          </Flex>
        </TabPanel>
        <TabPanel>
          <ListCourses/>
        </TabPanel>

        <TabPanel>
          <CoursesAdmin/>
        </TabPanel>

        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
    </>
  )
}

export default Admin;