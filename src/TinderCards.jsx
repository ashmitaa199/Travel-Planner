import React, { useEffect, useState } from 'react';
import './App.css';

import TinderCard from "react-tinder-card";



function TinderCards() {

  const characters = [
    {
      name: 'Richard Hendricks',
      url: 'https://i.imgur.com/oPj4A8u.jpeg'
    },
    {
      name: 'Erlich Bachman',
      url: 'https://i.imgur.com/oPj4A8u.jpeg'
    },
    {
      name: 'Monica Hall',
      url: 'https://i.imgur.com/oPj4A8u.jpeg'
    },
    {
      name: 'Jared Dunn',
      url: 'https://i.imgur.com/oPj4A8u.jpeg'
    },
    {
      name: 'Dinesh Chugtai',
      url: 'https://i.imgur.com/oPj4A8u.jpeg'
    }
  ]


     //new
   const [LastDirection,setLastDirection]=useState()
   const swiped = (direction, nameToDelete) => {
    console.log('removing:' + nameToDelete)
    setLastDirection(direction)
   
   
}

const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
}
   const [genderedUsers, setGenderedUsers] = useState(null)
    
   
  

  
   

   //new
   const [LastDirection,setLastDirection]=useState()
   

  return (
    <div className=''>
   
      <div className='card-container flex justify-center mt-[5vh]  h-[500px]'>

      
      {characters.map((character) =>(
        <TinderCard
         className="swipe absolute"
         key={character.name}
         preventSwipe={["up","down"]}
         onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div 
            style={{backgroundImage:'url(' + character.url + ')'}}
            className='card bg-cover relative w-[600px] p-[20px] max-w-[75vw] h-[60vh] rounded-[20px]'>
                <h3 className='absolute bottom-5 text-#000000'>{character.name}</h3>

            </div>
            <div className='swipe-info mt-4'> {LastDirection ? <p>You swiped {LastDirection}</p> : <p/>}
      </div>
        </TinderCard>
        
      ))}
      
      </div>
      
    </div>
  );
}

export default TinderCards;
