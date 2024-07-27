import React from 'react';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import Sidenav from './Sidenav';

const Header = ({ backButton }) => {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleBack = () => {
    navigate(backButton); // Navigate to backButton route
  };

  return (
    <div className='flex justify-between items-center h-14 border-b-2 border-gray-200'>
      {backButton ? (
        <IconButton onClick={handleBack}>
          <ArrowBackIosNewIcon fontSize='large' className='header__icon' />
        </IconButton>
      ) : (
        <div className="flex">
          <div className=''>
          <Sidenav/>
          </div>

        
        <IconButton>
         
          <PersonRoundedIcon fontSize='large' />
         
        </IconButton>
        
       
        </div>
        

      )}

      <Link to='/'>
        <svg className='w-10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M18 23H16V22H8 V23H6V22H5C3.89543 22 3 21.1046 3 20V7C3 5.89543 3.89543 5 5 5H8V3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V5H19C20.1046 5 21 5.89543 21 7V20C21 21.1046 20.1046 22 19 22H18V23ZM10 9H8V18H10V9ZM16 9H14V18H16V9ZM14 4H10V5H14V4Z' />
        </svg>
      </Link>

      <Link to='/chat'>
        <IconButton>
          <ForumIcon fontSize='large' />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
