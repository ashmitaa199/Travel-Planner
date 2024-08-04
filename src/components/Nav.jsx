import React from 'react'
import travelicon from "../assets/travelicon.png";
import blackTravel from "../assets/blackTravel.png";
import { useNavigate } from 'react-router-dom';

const Nav = ({ authToken,setShowModal,showModal,  setIsSignUp}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
    // navigate('/login'); // Navigate to the login page
  };
      // minimal=true;
  return (
    <nav className='w-full h-10 '>

  <div className='flex items-center justify-between'>
    <div className='flex'>
    <div className='w-[70px] h-[40px] p-2 '>
     
     <img  className="w-full rounded" src={travelicon }/>  
   
   </div>
   <span className=' p-2 mt-2 font-bold text-xl'>travelMate!!!</span>
    </div>

      
  
  {/* <div className='p-2'>
  <button  onClick={handleLoginClick} className='rounded-xl w-20 h-7 bg-white font-bold '>Loginn</button>
  </div> */}

{!authToken && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
   

  </div>

  

    </nav>
  )
}

export default Nav;
