import React, { useState, useEffect } from 'react';
import Header from '../Header';
import TinderCards from '../TinderCards';
import SwipeButtons from '../SwipeButtons';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState([]);
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

  const getGenderedUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/gendered-users', {
        params: { gender: user?.gender_interest === 'everyone' ? null : user?.gender_interest }
      });
      setGenderedUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      getGenderedUsers();
    }
  }, [user]);

  console.log('user', user);
  console.log('gendered users', genderedUsers);
  
  return (
    <>
      {user ? (
        <div>
          <Header />
          <TinderCards genderedUsers={genderedUsers} user={user} />
          <SwipeButtons />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Dashboard;
