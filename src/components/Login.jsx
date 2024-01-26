import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from "../utils/validate"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {

    const messageGot =  checkValidData(email.current.value, password.current.value);
    setErrorMessage(messageGot);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background-netflix-img' />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 '>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg' /> }
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