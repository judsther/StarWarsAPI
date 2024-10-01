/*import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup' 
import { signInWithEmailAndPassword } from 'firebase/auth';
//import { json, useNavigate } from 'react-router-dom';
//import { useContext } from 'react';
import { auth } from '../../../firebase/firebaseConfig';
//import { UserContext } from '../../../contexts/UserDataContext';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
    email: yup.string().required("El correo es un campo obligatorio").email("Correo invalido. Ejemplo: asd@dominio.com"),
    password: yup.string().required("La contrasenia es obligatoria.").min(8,"La contrasenia debe tener al menos 8 caracteres")
})

export const LoginForm = () => {
    const {register,handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const {setData} = useContext(UserContext)
    const navigate = useNavigate();    

    const onSubmitForm = (data) => {
        console.log(data);

        signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    //Utilizamos el contexto para guardar el usuario
    setData(user)
    //Guardamos en el localStorage el Usuario PARSEADO A STRING
    saveLocal("user", JSON.stringify(user) )

    navigate('/') //Si el usuario se logea con exito, redireccionamos al home
  })
  .catch((error) => {
    //const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage);
  });
    }

    
      saveLocal Es una funcion para lograr guardar datos dentro de el LocalStorage
      @param nombreLocal es un String el cual sera el nombre de la key dentro del LocalStorage
      @param data es la informacion a guardar en esa key como value. Esta se parseara a STRING
    
   
    const saveLocal = (nombreLocal,data) => {
        localStorage.setItem(nombreLocal,data);
    }

  return (
    <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
            <section>
                <label>Email</label>
                <input type="email" id="email" placeholder="Email for register" {...register('email')}   />
                <p style={{color:"red"}}>{errors.email && errors.email.message}</p>
            </section>

            <section>
                <label>Password</label>
                <input type="password" id="password" placeholder="Password for register" {...register('password')} />
                <p style={{color:"red"}}>{errors.password && errors.password.message}</p>
            </section>
            <button type='submit'>Login</button>
        </form>

    </div>
  )
}
*/