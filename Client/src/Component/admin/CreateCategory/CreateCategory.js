import React from 'react';
import { useDispatch } from 'react-redux';

import {
	Button,
	Input,
	Center,
	FormControl,
	FormLabel,
	FormHelperText,
	FormErrorMessage,
	useToast,
	Box,
	Container,
} from '@chakra-ui/react';

import { createNewCategory } from '../../../Redux/actions/index';

function CreateCategory() {
	const initialState = { name: '' };
	let [category, setCategory] = React.useState(initialState);
	
	const toast = useToast();

	const dispatch = useDispatch();

	const onChange = (e) => {
		setCategory({ ...category, name: e.target.value });
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		dispatch(createNewCategory(category));
		setCategory(initialState);
	};

	const isError = {
    categoryError: category.name ? false : true,
  };

	return (
		<Center>
			<Container>
  	    <Box mt='10%' >
					<FormControl mr="5%" isInvalid={isError.categoryError} isRequired>
	          <FormLabel htmlFor="first-name" fontWeight={"normal"} color='white'>
	            Category name:
	          </FormLabel>
	          <Input
	            id="category"
							onChange={(e) => onChange(e)}
	            color='white'
							width='30rem'
							value={category.name}
	          />
	          {!isError.categoryError ? (
	            <FormHelperText color={"green"}>✓</FormHelperText>
	          ) : (
	            <FormErrorMessage>Obligatory field</FormErrorMessage>
	          )}
	        </FormControl>
					<Center>
						<Button
	            width="7rem"
	            colorScheme="red"
	            variant="solid"
	            mt='10%'
	            onClick={(e) => {
	              handleOnSubmit(e)
	              toast({
	                title: `Category ${category.name} created succesfully!`,
	                status: "success",
	                duration: 3000,
	                isClosable: true,
	              });
	            }}
							type='submit'
							isDisabled={!category.name}>
	            Submit
	        	</Button>
					</Center>		
			</Box>
			</Container>
		</Center>
	);
}

export default CreateCategory;
