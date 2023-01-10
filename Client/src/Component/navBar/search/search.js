// este componente contintiene la barra de busqueda y llama al componente filter
import React, { useState } from "react";
import {
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { getCourses } from "../../../Redux/actions";
import { useDispatch } from "react-redux";
import {  Form, Formik } from "formik";

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
    <Formik initialValues={{ name: "" }} onSubmit={onClick}>
      {(props) => (
        <Form>
          <InputGroup size="md">
            <Input
              pr="8rem"
              placeholder="Search your next course..."
              value={name}
              onChange={onChange}
              background="white"
              border="2px"
              borderColor="black"
            />
            <InputRightElement>
              <Button  type="submit">
                <IconButton
                  colorScheme="blue"
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
  );
}

export default Search;
