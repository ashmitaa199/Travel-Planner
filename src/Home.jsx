import React, { useEffect,useState } from 'react'
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    

    
  return (
    <div>
            <Header/>
           <TinderCards />
           <SwipeButtons />
        
    </div>
  )
}

export default Home
