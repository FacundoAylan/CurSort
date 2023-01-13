import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Center, Grid, GridItem } from '@chakra-ui/react';
import CreateCategory from '../admin/CreateCategory/CreateCategory';
import { Link , useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { getUserEmail } from '../../Redux/actions';


const Profile = () => {
	// const { user, isAuthenticated } = useAuth0();
	//console.log('isAuthenticated', isAuthenticated)
	//LocalStore
  const user = JSON.parse(window.localStorage.getItem("user"));
  const loguin = JSON.parse(window.localStorage.getItem("loguin"));
  const dispatch = useDispatch()
  const history = useHistory()
  
  const handleOnClick = async(e)=>{
    e.preventDefault()
    await dispatch(getUserEmail(user.email)) 
    history.push('/editprofile')
  }

	return (
		<Grid templateRows='25px repeat(2,45px)'>
			<Center>
				<GridItem>{loguin && <h2>{user.name}</h2>}</GridItem>
			</Center>

			
      <Link to='/editprofile'>
        <Button
          onClick={handleOnClick}
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
      </Link>

			<Link to='/mycourses'>
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

// email: "swistoniukpablo@gmail.com";
// email_verified: true;
// family_name: "Swistoniuk";
// given_name: "Pablo";
// locale: "es-419";
// name: "Pablo Swistoniuk";
// nickname: "swistoniukpablo";
// picture: "https://lh3.googleusercontent.com/a/ALm5wu1EQf9HP_lTr6NHAURcqeMzf57iOkBcKFmwjDYS=s96-c";
// sub: "google-oauth2|105952523446250351908";
// updated_at: "2022-12-04T19:16:00.216Z";
