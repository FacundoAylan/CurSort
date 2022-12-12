// este componente contintiene la barra de busqueda y llama al componente filter
import React,{useState} from "react";
import {
  Input,
  Container,
  IconButton,
  InputGroup,
  InputRightElement,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { getCourses } from "../../../Redux/actions";
import {useDispatch} from 'react-redux'
import Filter from "../filter/filter";

function Search ({setPagina}) {
  
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const onChange = (e) => {
    setName(e.target.value)
  }
  const onClick = () =>{
    setPagina(1);
    dispatch(getCourses(name));
  }
  return(
    <Grid 
    templateRows='50px 50px'
    >
      <GridItem>
        <InputGroup size='md'>
          <Input
            pr='8rem'
            placeholder='Buscando'
            value={name}
            onChange={onChange}
          />
          <InputRightElement >
            <IconButton
                colorScheme="blue"
                aria-label="Search database"
                icon={<SearchIcon />}
                onClick={onClick}
              />
          </InputRightElement>
        </InputGroup>
      </GridItem>
      <GridItem h='100%'>
        <Filter/>
      </GridItem>

    </Grid>
  )
};

export default Search;