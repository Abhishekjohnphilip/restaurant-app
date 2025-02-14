import { Box, Typography } from '@mui/material'
import { color, display, styled } from '@mui/system';
import React , { useState } from 'react'
import CustomButton from '../CustomButton/CustomButton';
import logoImg from '../../assets/bistro.png'

import MenuIcon from '@mui/icons-material/Menu';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import ContactIcon from '@mui/icons-material/ContactPage';
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from '@mui/material';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {

const [mobileMenu, setMobileMenu] = useState({left:false});

const navigate = useNavigate();

const toogleDrawer = (anchor,open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMobileMenu({...mobileMenu, [anchor]:open})
}
const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"    
      onClick={toogleDrawer(anchor, false)}
      onKeyDown={toogleDrawer(anchor, false)}
    >
      <List>
        {nav_titles.map((item, index) => (
           <ListItem key={index} disablePadding onClick={() => navigate(item.path)}>
           <ListItemButton>
             <ListItemIcon>
               {index  === 0 && <HomeIcon />}
               {index  === 1 && <FeaturedPlayListIcon />}
               {index  === 2 && <MiscellaneousServicesIcon />}
               {index  === 3 && <ContactIcon />}
             </ListItemIcon>
             <ListItemText primary={item.display} />
           </ListItemButton>
         </ListItem> 
        ))}
        
      </List>
    </Box>
)
    const nav_titles =[{
        path:'/',
        display:'Home'
    },
    {
        path:'/dishes',
        display:'Dishes'
    },
    {
        path:'/services',
        display:'Services'
    },
    {
        path:'/aboutus',
        display:'About Us'
    }]

const NavBarLinksBox = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:theme.spacing(3),
    [theme.breakpoints.down("md")]:{
        display:'none'
    }

}));
const NavBarLink = styled(Typography)(()=>({
    fontSize:"15px",
    color:'#4F5361',
    fontWeight:'bold',
    cursor:'pointer',
    '&:hover':{color:'#fff'}
}));
const NavBarLogo = styled('img')(({theme})=>({
    cursor:'pointer',
    width:'50px',
    height:'30px',
    [theme.breakpoints.down('md')]:{
        // width:'40px',
        // height:'30px',
        display:'none'
    }
}));
const CustomMenuIcon = styled(MenuIcon)(({theme})=>({
    cursor:'pointer',
    display:'none',
    marginRight:theme.spacing(2),
    // color:'#0F1B4C',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));

  return (
    <Box 
    sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'40px',
        maxWidth:'auto',
        backgroundColor:'#FED801',
        marginLeft:'0px',
        marginBottom:'-24px'
    }}
    >
        <Box
        sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            gap:'2.5rem'
        }}
        >
            <Box
            sx={{
                display:'flex',
                alignItems:'center',
            }}
            >
            <CustomMenuIcon onClick={toogleDrawer("left",true)}/>
            <Drawer
            anchor='left'
            open={mobileMenu.left}
            onClose={toogleDrawer("left",false)}            
            >
            {list("left")}  
            </Drawer>

            <NavBarLogo src={logoImg} alt='logo' onClick={() => navigate('/')}/>  
            </Box> 
            <NavBarLinksBox>
                {
                    nav_titles.map((item,index)=>(
                    <NavBarLink variant='body2' onClick={() => navigate(item.path)}>{item.display}</NavBarLink>
                    ))
                }
            </NavBarLinksBox>
        </Box>
        <Box
        sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            gap:'2.5rem'
        }}
        >
        <NavBarLink variant='body2'onClick={() => navigate('/underCtn')}>Sign Up</NavBarLink>
        {/* <NavBarLink variant='body2'>Register</NavBarLink> */}
        <CustomButton backgroundColor='#0F1B4C' color='#fff' buttonText='Register'onClick={() => navigate('/underCtn')}/>
        </Box>
    </Box>

    )
}

export default Header