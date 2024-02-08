import React, { useContext, useState } from 'react'

import classes from './signup.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Utility/firebase';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,} from 'firebase/auth'; 
import { DataContext } from './../../components/DataProvider/DataProvider';
import { ClipLoader } from 'react-spinners';
import { Type } from '../../Utility/action.type';

const Auth = () => {

  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState({signin:false,
  signup:false})
  // console.log(password,email);

 const [{user},dispatch] = useContext(DataContext);
 const navigate = useNavigate();
 console.log(user)

  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if (e.target.name == "signin") {
      // firebase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate( "/");
        })
        .catch((err) => {
          // console.log(err)
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUP: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUP: false });
          navigate("/");
        })
        .catch((err) => {
          // console.log(err)
          setError(err.message);
          setLoading({ ...loading, signUP: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to={'/'}>
        <img src='https://pngimg.com/uploads/amazon/amazon_PNG2.png'/>
      </Link>
      {/* form */}
       <div className={classes.login__container}>
         <h1>Sign In</h1>
         <form action=''>
             <div>
                <label htmlFor='email'>Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' id='email'/>
             </div>

             <div>
                <label htmlFor='password'>Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' id='password'/>
             </div>

             <button 
             type='submit' 
             onClick={authHandler} 
             name='signin'
             className={classes.login__signInButton}>
                 {
                 loading.signin? <ClipLoader color='#000>' size={15}></ClipLoader>:('Sign In')
                  }
                  </button>

         </form>
            {/* agreement */}
            <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.</p>

          {/* create account btn */}
          <button 
          type='submit' 
          onClick={authHandler}
          name='signup' 
          className={classes.login__registerButton}>
            {
                 loading.signup? <ClipLoader color='#000>' size={15}></ClipLoader>:('Create Your Amazon Account')
                  }
            
            </button>

          {
            error && <small style={{paddingTop: '5px', color: 'red'}}>{error}</small>
          }
 

       </div>
    </section>
   
  )
}

export default Auth