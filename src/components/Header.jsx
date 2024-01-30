import React from 'react'
import nlogo from "../utils/netflix-logo.png";
import userLogo from "../utils/working.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={nlogo} alt='logo-netflix' />
      <div className='flex'>
        <img className='w-12' src={userLogo} alt="user icon" />
        <button onClick={handleSignOut} className='text-white font-bold'>(Sign Out)</button>
      </div>
    </div>
  )
}

export default Header