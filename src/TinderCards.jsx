import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import TinderCard from 'react-tinder-card';
import axios from 'axios';

function TinderCards({ genderedUsers, user }) {
  const [lastDirection, setLastDirection] = useState(null);
  const [cookies] = useCookies(['user']);
  const userId = cookies.UserId;

  const updateMatches = async (matchedUserId) => {
    try {
      await axios.put('http://localhost:8000/addmatch', {
        userId,
        matchedUserId
      });
    } catch (error) {
      console.log(error);
    }
  };

  const swiped = (direction, swipedUserId) => {
    if (direction === 'right') {
      updateMatches(swipedUserId);
    }
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  const matchedUserIds = user?.matches.map(({ user_id }) => user_id).concat(userId) || [];

  const filteredGenderedUsers = genderedUsers?.filter(
    genderedUser => !matchedUserIds.includes(genderedUser.user_id)
  );

  return (
    <>{user && 
    <div className='-mt-4'>
      <div className='card-container flex justify-center mt-[5vh] h-[500px]'>
        {filteredGenderedUsers?.map((genderedUser) => (
          <TinderCard
            className='swipe absolute'
            key={genderedUser.user_id}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
            onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}
          >
            <div
              style={{ backgroundImage: 'url(' + genderedUser.url + ')' }}
              className='card'
            >
              <h3 className='absolute bottom-5 text-black'>{genderedUser.first_name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='swipe-info mt-4'>
        {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
      </div>
    </div>
    }
    </>
  );
}

export default TinderCards;
