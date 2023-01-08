import { Avatar, AvatarBadge, Box, Button, Center, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Nosotros () {
  return (
    <a name="footer" href="">
      <Center>
        <Stack direction="row" spacing={3} color="white">
          <Box
            border="2px"
            borderColor="white"
            bg="#132D46"
            h="250px"
            w="200px"
            pt={4}
            pl={3}
            borderRadius={12}
          >
           <Link to='/project'>
            <Avatar ml="22%" src="https://i.ibb.co/r0K0587/1672945991052.jpg" size="xl">
              <AvatarBadge
                bg="green"
                boxSize="0.6em"
                border="2px"
                borderColor="black"
                mr="8px"
              />
            </Avatar>
            </Link>
            <Text fontSize="22" pl="5px">
              Pablo swistoniuk
            </Text>
            <Text fontSize="15" ml="25%">
              @Front-end
            </Text>
            <Text fontSize="10" ml="25%">
              <Button bg="#3E4AB8">
                <a
                  href="https://www.linkedin.com/in/pablo-swistoniuk-0b15a6247/"
                  target="_blank"
                >
                  linkedin
                </a>
              </Button>
            </Text>
          </Box>

          <Box
            border="2px"
            borderColor="white"
            bg="#132D46"
            h="250px"
            w="200px"
            pt={4}
            pl={3}
            borderRadius={12}
          >
           <Link to='/project'>
            <Avatar ml="22%" src="https://i.ibb.co/C6WcBY3/1665866084193.jpg" size="xl">
              <AvatarBadge
                bg="green"
                boxSize="0.6em"
                border="2px"
                borderColor="black"
                mr="8px"
              />
            </Avatar>
            </Link>
            <Text fontSize="22" pl="14px">
              Mailen Benitez
            </Text>
            <Text fontSize="15" ml="25%">
              @Front-end
            </Text>
            <Text fontSize="10" ml="25%">
              <Button bg="#3E4AB8">
                <a
                  href="https://www.linkedin.com/in/maibenitez/"
                  target="_blank"
                >
                  linkedin
                </a>
              </Button>
            </Text>
          </Box>

          <Box
            border="2px"
            borderColor="white"
            bg="#132D46"
            h="250px"
            w="200px"
            pt={4}
            pl={3}
            borderRadius={12}
          >
           <Link to='/project'>
            <Avatar ml="22%" src="" size="xl">
              <AvatarBadge
                bg="green"
                boxSize="0.6em"
                border="2px"
                borderColor="black"
                mr="8px"
              />
            </Avatar>
            </Link>
            <Text fontSize="22" pl="1px">
              Jonathan Lozano
            </Text>
            <Text fontSize="15" ml="25%">
              @Front-end
            </Text>
            <Text fontSize="10" ml="25%">
              <Button bg="#3E4AB8">
                <a
                  href="https://www.linkedin.com/in/facundo-aylan-582b52257/"
                  target="_blank"
                >
                  linkedin
                </a>
              </Button>
            </Text>
          </Box>

          <Box
            border="2px"
            borderColor="white"
            bg="#132D46"
            h="250px"
            w="200px"
            pt={4}
            pl={3}
            borderRadius={12}
          >
           <Link to='/project'>
            <Avatar ml="22%" src="https://i.ibb.co/4gTs31w/1658595578806.jpg" size="xl">
              <AvatarBadge
                bg="green"
                boxSize="0.6em"
                border="2px"
                borderColor="black"
                mr="8px"
              />
            </Avatar>
            </Link>
            <Text fontSize="22">Federico Ciociano</Text>
            <Text fontSize="15" ml="25%">
              @Front-end
            </Text>
            <Text fontSize="10" ml="25%">
              <Button bg="#3E4AB8">
                <a
                  href="https://www.linkedin.com/in/federico-ciociano-b0a6801a2/"
                  target="_blank"
                >
                  linkedin
                </a>
              </Button>
            </Text>
          </Box>

          <Box
            border="2px"
            borderColor="white"
            bg="#132D46"
            h="250px"
            w="200px"
            pt={4}
            pl={3}
            borderRadius={12}
          >
           <Link to='/project'>
            <Avatar
              ml="22%"
              src="https://i.ibb.co/YypTWsd/profile-pic.png"
              size="xl"
            >
              <AvatarBadge
                bg="green"
                boxSize="0.6em"
                border="2px"
                borderColor="black"
                mr="8px"
              />
            </Avatar>
            </Link>
            <Text fontSize="22" pl="24px">
              Juan Gómez A.{" "}
            </Text>
            <Text fontSize="15" ml="25%">
              @Front-end
            </Text>
            <Text fontSize="10" ml="25%">
              <Button bg="#3E4AB8">
                <a
                  href="https://www.linkedin.com/in/juan-enrique-gomez-agüero-17bb01129/"
                  target="_blank"
                >
                  linkedin
                </a>
              </Button>
            </Text>
          </Box>

          <Box
            border="2px"
            borderColor="white"
            bg="#132D46"
            h="250px"
            w="200px"
            pt={4}
            pl={3}
            borderRadius={12}
          >
           <Link to='/project'>
            <Avatar ml="22%" src="https://i.ibb.co/m8CsBFc/link.jpg" size="xl">
              <AvatarBadge
                bg="green"
                boxSize="0.6em"
                border="2px"
                borderColor="black"
                mr="8px"
              />
            </Avatar>
            </Link>
            <Text fontSize="22" pl="15px">
              Facundo Aylan
            </Text>
            <Text fontSize="15" ml="25%">
              @Front-end
            </Text>
            <Text fontSize="10" ml="25%">
              <Button bg="#3E4AB8">
                <a
                  href="https://www.linkedin.com/in/facundo-aylan-582b52257/"
                  target="_blank"
                >
                  linkedin
                </a>
              </Button>
            </Text>
          </Box>
        </Stack>
      </Center>
    </a>
  );
}

export default Nosotros;