import React, { useEffect,useState } from 'react'
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import AuthModal from './components/AuthModal';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [showModal, setShowModal]=useState(false)
  const [isSignUp, setIsSignUp] = useState(true)
  const navigate = useNavigate();

  const authToken = false;

  const handleClick =()=>{
    
    setShowModal(true);
    setIsSignUp(true)
    // navigate('/Signup');

  }
    

    
  return (
    <div className='overlay'>
    <Nav 
    authToken={authToken}
    setShowModal={setShowModal} 
    showModal={showModal}
    setIsSignUp={setIsSignUp}
    />
  
    <div className='Home '>

      <button className='primary-button border' onClick={handleClick}>
        {authToken ? 'Signout':'Create Account'}
      </button>

      {showModal &&
       (
         <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>
      )}
      {/* <Signup/> */}
            {/* <Header/>
           <TinderCards />
           <SwipeButtons /> */}
        
    </div>
    </div>
  )
}

export default Home
