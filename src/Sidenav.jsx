import * as React from 'react';
import { Link } from 'react-router-dom'; 
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const icons = {
    Post: <PostAddIcon className="text-white" />,
    Login: <LoginIcon className="text-white" />,
    Signup: <PersonAddIcon className="text-white" />,
    Logout: <LogoutIcon className="text-white" />,
    
  };

  const DrawerList = (
    <Box
      className="w-64 h-full bg-gradient-to-b from-blue-500 to-purple-700 text-white"
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {[
          { text: 'Post', path: '/post' },
          { text: 'Login', path: '/login' },
          { text: 'Signup', path: '/signup' },
          { text: 'Logout', path: '/logout' }
        ].map(({ text, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={path} className="hover:bg-blue-600">
              <ListItemIcon>
              {icons[text]}
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ className: 'text-white' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider className="bg-white" />
      
    </Box>
  );

  return (
    <div>
     
      <MenuIcon
        onClick={toggleDrawer(true)}
        className="text-3xl cursor-pointer"
      />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
