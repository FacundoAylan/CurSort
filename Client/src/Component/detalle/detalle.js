
import React, { useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Box, IconButton, Center } from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../Redux/actions";
import { ArrowLeftIcon } from '@chakra-ui/icons'

function Detalle() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector(state => state.courseDetail)
  const users = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch]);


  return (
    <>
      <Box p='6px'>
        <Link to="/" className="backCreate">
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<ArrowLeftIcon />}
          />
        </Link>
      </Box>
      <Center mt='5%'>

        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}

            src={course.image}

            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>

              <Heading size="md">{course.name}</Heading>

              <Text py="2">
                {course.description}

              </Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">

                {`BUY ${course.price} usd`}

              </Button>

              { /* users.admin && *///seteado hasta generar admin
              <Button variant="solid" colorScheme="yellow">
                    <Link to='/cursodetail'>
                        Edit Course
                    </Link>
              </Button>

              }
            </CardFooter>
          </Stack>
        </Card>
      </Center>
    </>
  );
};

export default Detalle;
