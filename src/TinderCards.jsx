import React, { useEffect, useState } from 'react';
import './App.css';
import database from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] =useState([]);
   
   useEffect(()=>{
    const unsubscribe = onSnapshot(collection(database, 'people'), (snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    } );
    return () => unsubscribe();

   },[]);

   //new
   const [LastDirection,setLastDirection]=useState()
   

  return (
    <div className=''>
   
      <div className='tinderCards__container flex justify-center mt-[5vh]'>

      
      {people.map((person) =>(
        <TinderCard
         className="swipe absolute"
         key={person.name}
         preventSwipe={["up","down"]}
        >
            <div 
            style={{backgroundImage:`url(${person.url})`}}
            className='card relative w-[600px] p-[20px] max-w-[75vw] h-[60vh] rounded-[20px] bg-center'>
                <h3 className='absolute bottom-5 text-white'>{person.name}</h3>

            </div>
        </TinderCard>
      ))}
      </div>
    </div>
  );
}

export default TinderCards;
