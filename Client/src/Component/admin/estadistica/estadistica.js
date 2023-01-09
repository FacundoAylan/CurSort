import React from "react";
import {
  Center,
  Flex,
  Image,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

function Estadistica() {
  return (
    <>
    <Center>
    <Flex >
      <Flex color="white">
        <StatGroup>
          <Stat>
            <StatLabel>Student</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>

          <Stat ml='55px'>
            <StatLabel>Courses</StatLabel>
            <StatNumber>1545</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              9.05%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Flex>

      <Flex color="white" ml={10}>
        <StatGroup>
        <Stat>
            <StatLabel>Sales</StatLabel>
            <StatNumber>34670</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>

          <Stat ml='55px'>
            <StatLabel>Intructor</StatLabel>
            <StatNumber>560</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              2.05%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Flex>
    </Flex>
    </Center>
    <Image src = 'https://i.ibb.co/GvfSGvj/Captura-de-pantalla-de-2022-12-28-02-06-48.png' w='100%' p={0}/>
    </>
  );
}
export default Estadistica;
