import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  IconButton,
  Select,
  Input,
  FormControl,
  Button,
  Center,
  Grid,
  GridItem,
  Textarea,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { putCourse, getDetail, clearCourseDetail } from "../../../Redux/actions/index";
//import { useHistory } from "react-router-dom";

const EditCourse = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courseDetail);  
  //  const history = useHistory();

  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(clearCourseDetail())
  }, [dispatch, id]);

  const [input, setInput] = useState({
    name: course.name,
    description: course.description,
    instructor: course.instructor,
    duration: course.duration,
    price: course.price,
    image: course.image,
    difficulty: course.difficulty,
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(putCourse(input));
    alert("Course edit successfully!");
    //history.push("/home");
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <Box pt="10px">
        <Link to="/admin">
          <IconButton
            colorScheme="black"
            aria-label="Search database"
            icon={<ArrowLeftIcon />}
          />
        </Link>
      </Box>

      <form onSubmit={(e) => handleSubmit(e)}>
        <Center color="white" fontSize={30}>
          Edit course
        </Center>
        <Grid
          templateColumns="repeat(2,1fr)"
          templateRows="repeat(9,100px)"
          color="white"
          h="390px"
          px='20rem'
          
        >
          <GridItem pl={3} pr={3}>
            <FormControl>
              <Center>Name</Center>
              <Input
                value={input.name}
                color="white"
                className="form-control"
                name="name"
                type="text"
                onChange={handleChange}
              ></Input>
            </FormControl>
          </GridItem>

          <GridItem pl={3} pr={3}>
            <FormControl>
              <Center>Instructor</Center>
              <Input
                value={input.instructor}
                color="white"
                className="form-control"
                name="instructor"
                type="text"
                onChange={handleChange}
              ></Input>
            </FormControl>
          </GridItem>

          <GridItem pl={3} pr={3}>
            <FormControl>
              <Center>Duration (hs)</Center>
              <Input
                value={input.duration}
                color="white"
                className="form-control"
                name="duration"
                type="text"
                onChange={handleChange}
              ></Input>
            </FormControl>
          </GridItem>

          <GridItem pl={3} pr={3}>
            <FormControl>
              <Center>Price (US$)</Center>
              <Input
                value={input.price}
                color="white"
                className="form-control"
                name="price"
                type="text"
                onChange={handleChange}
              ></Input>
            </FormControl>
          </GridItem>

          <GridItem pl={3} pr={3}>
            <FormControl>
              <Center>Image</Center>
              <Input
                value={input.image}
                color="white"
                className="form-control"
                name="image"
                type="text"
                onChange={handleChange}
              ></Input>
            </FormControl>
          </GridItem>

          <GridItem pl={3} pr={3}>
            <FormControl>
              <Center>Difficulty</Center>
              <Select
                id="difficulty"
                onChange={handleChange}
                color='white'
                value={input.difficulty}
                >
                <option style={{backgroundColor: '#191E29'}} value="Beginner">Beginner</option>
                <option style={{backgroundColor: '#191E29'}} value="Middle">Middle</option>
                <option style={{backgroundColor: '#191E29'}} value="Advanced">Advanced</option>
              </Select>
            </FormControl>
          </GridItem>
        
          <GridItem pl={3} pr={3}>
            <FormControl>
              <Center>Description</Center>
              <Textarea
                value={input.description}
                color="white"
                className="form-control"
                name="description"
                type="text"
                onChange={handleChange}
              ></Textarea>
            </FormControl>
          </GridItem>
        
        </Grid>
        <Center pt='30'>
          <Button
            onClick={handleSubmit}
            type="submit"
            p={2}
            color="green"
            w="50px"
          >
            Edit
          </Button>
        </Center>
      </form>
    </>
  );
};
export default EditCourse;
