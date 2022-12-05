
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, ButtonGroup, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../Redux/actions";

function Detalle() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector(state => state.courseDetail)

    useEffect(() => {
        dispatch(getDetail(id));
    }, []);


  return (
    <>
          <Box>
      <Link to="/home" className="backCreate">
        <ButtonGroup variant="outline" spacing="6" p={1}>
          <Button colorScheme="blue">{"<="}</Button>
        </ButtonGroup>
      </Link>
      </Box>
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
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};

export default Detalle;
