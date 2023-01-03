// este componente contintiene la barra de busqueda y llama al componente filter
import React,{useState} from "react";
import { Link } from "react-router-dom";
import {
  Input,
  // Container,
  IconButton,
  InputGroup,
  InputRightElement,
  Grid,
  GridItem,
  Button,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { getCourses } from "../../../Redux/actions";
import {useDispatch} from 'react-redux'
import Filter from "../filter/filter";
import FilterCategory from "../../InputFilter/FilterCategory";

function Search ({setPagina, setOrder}) {
  
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const onChange = (e) => {
    setName(e.target.value)
  }
  const onClick = () =>{
    setPagina(1);
    dispatch(getCourses(name));
  }

  function handleOrderByName(e) {
    e.preventDefault();
    setPagina(1);
    dispatch(getCourses(e.target.value));
    setPagina(1)
    setOrder("order" + e.target.value);
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
            background='white'
            border='2px'
            borderColor='black'
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
        <Button>
          <Link to='homefilter'>Filter</Link>
        </Button>

        {/* boton de filtrado */}
        <Menu>
        <MenuButton>
          <Button background='black' color='white' border='2px' borderColor='white' borderRadius='12px'>
            Category  
          </Button>
        </MenuButton>
        <MenuList>
          <FilterCategory handleOrderByName={handleOrderByName} booleano={false}/>
        </MenuList>
      </Menu>
      
      </GridItem>

    </Grid>
  )
};

export default Search;