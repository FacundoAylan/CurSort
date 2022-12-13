import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Button,
  Input,
  InputRightElement,
  ButtonGroup,
  InputGroup,
  MenuList,
  Menu,
  MenuButton,
  Center,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import { createNewCategory ,getCategory } from "../../Redux/actions/index";

function CreateCategory() {
  const initialState = { name: "" };
  let [category, setCategory] = React.useState(initialState);

  //   const [name, setName] = useState("")
  const [alerta, setAlert] = useState(false);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setCategory({ ...category, name: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewCategory(category));
    setCategory(initialState);
    setAlert(true);
    getCategory()
  };

  return (
    <>
      <Menu>
          <ButtonGroup variant="outline" spacing="6" ml={2}>
            <MenuButton >
              <Button background='black' color='white' border='2px' borderColor='white' borderRadius='12px'>
                New category
              </Button>
            </MenuButton>
          </ButtonGroup>
          
        <MenuList>
          <InputGroup size="md">
            <Input
              id="categoryname"
              type="text"
              name="categoryname"
              value={category.name}
              pr="4.5rem"
              placeholder="Name..."
              onChange={(e) => onChange(e)}
            />
            <InputRightElement width="4.5rem">
              <Button
                colorScheme="blue"
                size="sm"
                onClick={(e) => handleOnSubmit(e)}
                type="submit"
              >
                Create
              </Button>
            </InputRightElement>
          </InputGroup>
        </MenuList>
      </Menu>
      {alerta && (
        <Alert status="success">
          <AlertIcon />
          Category created successfully!
        </Alert>
      )}
    </>
  );
}

export default CreateCategory;
