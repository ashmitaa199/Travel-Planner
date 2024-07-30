import React from 'react'
import travelicon from "../assets/travelicon.png";
import blackTravel from "../assets/blackTravel.png";
import { useNavigate } from 'react-router-dom';

const Nav = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  }

      // minimal=true;
  return (
    <nav className='w-full '>

  <div className='flex items-center justify-between'>
    <div className='flex'>
    <div className='w-[70px] h-[40px] p-2 '>
     
     <img  className="w-full rounded" src={travelicon }/>  
   
   </div>
   <span className='w-[200px] h-[40px] p-2 mt-3 font-bold text-xl'>travelMate!!!</span>
    </div>
  
  <div className='p-2'>
  <button  onClick={handleLoginClick} className='rounded-xl w-20 h-7 bg-white font-bold '>Login</button>
  </div>

  </div>
   
   {/* {!authToken &&  <button className=''>Login</button>} */}
    </nav>
  )
}

export default Nav;
