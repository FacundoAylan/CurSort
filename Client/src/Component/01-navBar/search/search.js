// este componente contintiene la barra de busqueda y llama al componente filter
import React, { useState } from "react";
import {
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  Button,
  Center,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { getCourses } from "../../../Redux/actions";
import { useDispatch } from "react-redux";
import {  Form, Formik } from "formik";
import './search.css'

function Search({ setPagina, setHome }) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const onChange = (e) => {
    setName(e.target.value);
  };
  const onClick = () => {
    setPagina(1);
    setHome(false);
    dispatch(getCourses(name));
  };

  return (
    <Center>
    <Formik initialValues={{ name: "" }} onSubmit={onClick}>
      {(props) => (
        <Form className="container">
          <InputGroup>
            <Input
              className="search"
              placeholder="Search your next course..."
              value={name}
              onChange={onChange}
            />
            <InputRightElement>
              <Button  type="submit">
                <IconButton
                  colorScheme="white"
                  aria-label="Search database"
                  icon={<SearchIcon />}
                  onClick={onClick}
                />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Form>
      )}
    </Formik>
    </Center>
  );
}

export default Search;
