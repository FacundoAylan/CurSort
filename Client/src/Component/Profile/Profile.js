import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
//import { editUsers } from "../../Redux/actions";
import './profile.css'


function validate(input){
  let errors={};
 
  if(!input.name){
      errors.name = 'El nombre es requerido'
  }
  if(!input.lastname){        
      errors.lastname = 'El apellido es requerido'
  }
  if(!input.password){        
      errors.password = 'Elegir una contraseña valida'

  }      
  if(!input.birthday){        
      errors.birthday = 'Elije una fecha valida'
  }
   
  return errors;   
}


const Profile = () => {
   const {user} = useAuth0()
   const [errors, setErrors] = useState({});
   //const dispatch = useDispatch()
   const history = useHistory()
   //const users = useSelector((state)=> state.users)
   const [input, setInput] = useState({
    name: "", 
    lastname:"",      
    password:"",
    birthday: "",
    
})

/* function handleSubmit(e){
  e.preventDefault()
  dispatch(editUsers(input))
  alert("Usuario actualizado con Exito🚀🙌")
  setInput({
      name: "",
      lastname: "",
      password:"",
      birthday: "",     
  })
  history.push('/home')
} */





function handleChange(e){
  setInput({
      ...input,
      [e.target.name] : e.target.value
  })
  setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
  }))

}


  
  
   return (
    <div className="formEdit">
        <div>
          <Link to="/home">
            <button className="home">Home</button>
          </Link>
        </div>
        <h1 className="title">Editar Datos</h1>
        <form /* onSubmit={(e) => handleSubmit(e)} className='formularioTotal' */>
        <div>
            <label className="titleform">Name:</label>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={handleChange}
              required
            />
            <strong className="err">{errors.name}</strong>
        </div>
        <div>
            <label className="titleform">Last Name:</label>
            <input
              type="text"
              value={input.name}
              name="lastname"
              onChange={handleChange}
              required
            />
            <strong className="err">{errors.lastname}</strong>
        </div>
        <div>
            <label className="titleform">Password:</label>
            <input
              type="number"
              value={input.name}
              name="password"
              onChange={handleChange}
              required
            />
            <strong className="err">{errors.password}</strong>
        </div>
        <div>
            <label className="titleform">Birthday:</label>
            <input
              type="date"
              value={input.name}
              name="birthday"
              onChange={handleChange}
              required
            />
            <strong className="err">{errors.birthday}</strong>
        </div>
        <button
            disabled={
              errors.name ||
              errors.lastname ||
              errors.password ||
              errors.birthday               
            }
            className="boton"
            type="submit"
          >
            Enviar
          </button>
        




        </form>
  </div>
       
  );
};





export default Profile







