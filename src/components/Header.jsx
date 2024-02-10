import React, { useEffect } from 'react'
import nlogo from "../utils/netflix-logo.png";
import userLogo from "../utils/working.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice.js";
import { useDispatch } from 'react-redux';
import { toggleGptSearchView } from "../utils/gptSlice.js";
import { SUPPORTED_LANG } from "../utils/constants.js";
import { changeLanguage } from '../utils/configSlice.js';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // toggle gpt search button
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={nlogo} alt='logo-netflix' />
      { user && (
        <div className='flex p-2'>
          {showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white rounded-md shadow-md" onChange={ handleLanguageChange }>
            {
              SUPPORTED_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>)
            }
          </select>}
          <button className='py-2 px-4 mx-4 bg-purple-800 rounded-lg bg-opacity-70 hover:bg-opacity-100 hover:opacity-100 text-white' onClick={handleGptSearchClick}>
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          {/* <img className='w-12' src={userLogo} alt="user icon" /> */}
          <div className='text-white font-bold'>
            <p>{user?.displayName}</p>
            <button onClick={handleSignOut}>(Sign Out)</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header