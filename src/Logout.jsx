import React from 'react';
import { auth } from '../firebase'; // Make sure this path is correct
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect user to login page or home page after logging out
      navigate('/login'); // Adjust the route as needed
    } catch (error) {
      console.error('Logout error:', error);
      // Optionally, handle error feedback to user here
    }
  };

  return (
    <div className=' flex mt-5 items-center justify-center '>
      <span>Are you sure want to logout!!!</span>
      <button className='border w-14 ml-4 bg-purple-300 rounded' onClick={handleLogout}>Yes</button>
    </div>
  );
};

export default Logout;
