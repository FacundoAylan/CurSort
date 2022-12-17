import React from 'react';
import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Usuarios from '../usuarios/usuarios';

function Admin () {
  const usuario = [1,2,3,4,5,6];

  return (
    <Tabs>
      <TabList>
        <Tab>Usuarios</Tab>
        <Tab>Cursos</Tab>
        <Tab>etsdisticas</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
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
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Admin;