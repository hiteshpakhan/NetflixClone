import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import netflixbg from "../utils/netflixbackground.jpg";
import { useDispatch } from 'react-redux';
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {

    const messageGot =  checkValidData(email.current.value, password.current.value);
    setErrorMessage(messageGot);

    if(messageGot) return;

    if(!isSignInForm){

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: ""
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message);
        });
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMMessage = error.message;
        setErrorMessage("erroe code: "+errorCode+", and errorMessage: "+ errorMMessage);
      });

    }else{
      
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMMessage = error.message;
        setErrorMessage("erroe code: "+errorCode+", and errorMessage: "+ errorMMessage)
      });

    }
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={netflixbg} alt='background-netflix-img' />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 '>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg' /> }
        <input ref={email} type="text" placeholder='Email address' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
        <input ref={password} type="password" placeholder='password' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
        <p className='text-red-500 font-bold text-lg p-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already register? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login