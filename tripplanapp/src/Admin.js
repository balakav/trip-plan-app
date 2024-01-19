import './Admin.css'
import { AppBar, Avatar, IconButton,Box,Tooltip,Menu,TextField, InputBase,Button, MenuList,MenuItem,Divider,ListItemIcon,Grid,Container, Toolbar} from '@mui/material'
import './Home.css'
import React, { useState } from 'react'
import 'swiper/css/pagination';
import HotelIcon from '@mui/icons-material/Hotel';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import {Logout,Settings,PersonAdd, Instagram} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PlaceIcon from '@mui/icons-material/Place';
import { Link } from 'react-router-dom';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

export default function Admin() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
     
      const handleClose = () => {
        setAnchorEl(null);
      };
  return (
    <>
     <AppBar className='appbar1' sx={{ bgcolor: "#FEA889" }}>
        <ol>
            <ul>
           
   <Link to="/Admin"><HomeIcon sx={{ fontSize: 35,color:"black",title:'Home'}}className='just'></HomeIcon></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to="/Adminhotel"><HotelIcon  sx={{ fontSize:  35 ,color:"black"  }} className='just'></HotelIcon></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to="/Admincat"><CategoryIcon  sx={{ fontSize: 35 ,color:"black" }} className='just'></CategoryIcon></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to="/Admintrvel"><TimeToLeaveIcon sx={{ fontSize: 35,color:"black"  }} className='just'></TimeToLeaveIcon></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to ="/Adminfeedback">< HelpCenterIcon sx={{ fontSize: 35,color:"black"  }} className='just'></HelpCenterIcon></Link>

   <div className='jhk'>
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       <Tooltip title="Account">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 ,bgcolor : "black"  }}>B</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <FavoriteIcon>
            <Settings fontSize="small" />
          </FavoriteIcon>
          &nbsp;&nbsp;&nbsp;Favorites
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <BookmarkBorderIcon>
            <Settings fontSize="small" />
          </BookmarkBorderIcon>
          &nbsp;&nbsp;&nbsp;Save
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
     <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" color='black' />
          </ListItemIcon>
      
          <Link to="/" className="logout1">Logout</Link> 
        </MenuItem>
      
      </Menu>
      </div>
            </ul> 

        </ol>      
   
    </AppBar><br></br><br></br>
   
    </>
  )
}
