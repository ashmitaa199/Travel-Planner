import React, { useEffect, useState } from 'react';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link, useNavigate } from 'react-router-dom';
import Sidenav from './Sidenav'; // Ensure this import is correct
import Chat from './Chat';

import icon from "./assets/icon.png"

const Header = ({ backButton }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {

  }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(backButton);
  };

  return (
    <div>
    <div className='flex justify-between items-center h-14 border-b-2 border-gray-200 px-4'>
      {backButton ? (
        <IconButton onClick={handleBack}>
          <ArrowBackIosNewIcon fontSize='large' className='header__icon' />
        </IconButton>
      ) : (
        <div className='flex items-center space-x-4'>
          <Sidenav />
          <div className='flex items-center space-x-2'>
            <IconButton>
              <PersonRoundedIcon fontSize='large' />
            </IconButton>
            <span className='text-xs'>{userName}</span>
          </div>
        </div>
      )}

     
      <img className=" w-12 h-12 rounded-full" src={icon}/>
        
      

      <Link to='/chat'>
        <IconButton>
          <ForumIcon fontSize='large' />
        </IconButton>
      </Link>
    </div>
   
    
    </div>
  );
};

export default Header;
