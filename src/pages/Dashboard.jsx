import React, { useState, useEffect } from 'react';
import Header from '../Header';
import TinderCards from '../TinderCards';
import SwipeButtons from '../SwipeButtons';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [cookies] = useCookies(['user']);
  
  const userId = cookies.UserId;

  // Fetch user data
  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:8000/user', {
        params: { userId }
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    if (userId) {
      getUser();
    } else {
      console.error('User ID not found in cookies');
    }
  }, [userId]);

  return (
    <>
      {user ? (
        <div>
          <Header />
          <TinderCards />
          <SwipeButtons />
        </div>
      ) : (
        <div>Loading...</div> // Or a more sophisticated loading state
      )}
    </>
  );
};

export default Dashboard;
