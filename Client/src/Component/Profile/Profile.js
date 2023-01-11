import React from 'react';
import { Button, Center, Grid, GridItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Profile = () => {
	//LocalStore
	  const user = JSON.parse(window.localStorage.getItem("user"));
	  const loguin = JSON.parse(window.localStorage.getItem("loguin"));

	return (
		<Grid templateRows='25px repeat(2,45px)'>
			<Center>
				<GridItem>{loguin && <h2>{user.name}</h2>}</GridItem>
			</Center>

			<Button
				background='black'
				color='white'
				border='2px'
				borderColor='white'
				borderRadius='12px'
				ml='10px'
				width='90%'
			>
				Settings
			</Button>

			<Link to='/cursos'>
				<Button
					background='black'
					color='white'
					border='2px'
					borderColor='white'
					borderRadius='12px'
					ml='10px'
					width='90%'
				>
					My courses
				</Button>
			</Link>
		</Grid>
	);
};

export default Profile;
