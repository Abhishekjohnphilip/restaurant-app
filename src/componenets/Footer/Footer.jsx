// import { Box, boxClasses } from '@mui/material';
// import { useState, useRef } from 'react'
// import { useClickOutside } from "react-haiku"

// export const Footer = () => {
//     const [count, setCount] = useState(0);
//     const ref = useRef(null)

//     const handleClickOutside = () => setCount(count + 1);

//     useClickOutside(ref, handleClickOutside);

//     return (
//         <>
//             <b>Clicked Outside {count} Times!</b>
//             <button ref={ref}>Click Outside Of Me!</button>
//         </>
//     );
// }
// export default Footer
import React from 'react'
import { Typography } from '@mui/material'
import { styled, Box, Container } from '@mui/system'

import fbIcon from '../../assets/facebook.png'
import igIcon from '../../assets/instagram.png'
import twIcon from '../../assets/twitter.png'
import { useNavigate } from 'react-router-dom'
import { Facebook, Instagram, Twitter,WhatsApp, X } from '@mui/icons-material'
// import linkedinIcon from '../../assets/linkedin.png'

const Footer = () => {
    const navigate = useNavigate();

    const CustomContainer = styled(Container)(({theme})=>({
        display:'flex',
        justifyContent:'space-between',
        gap:theme.spacing(5),
        alignItems:'center',
        
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            textAlign:'center',
        },
    }))

    const IconBox = styled(Box)(({theme})=>({
        display:'flex',
        alignItems:'center',
        gap:"1rem",
        [theme.breakpoints.down('sm')]:{
            justifyContent:'center',
        }
    }))

    const FooterLink = styled(Typography)(({theme})=>({
        fontSize:'16px',
        fontWeight:'300',
        color:'#000066',
        cursor:'pointer',
        // mb:2,
        "&:hover":{
            color:'#6682FF'
        }
    }))

    

    // const CustomBox = styled(Box)(({theme})=>({
    //     display:'flex',
    //     justifyContent:'space-between',
    //     alignItems:'center',
    //     [theme.breakpoints.down('md')]:{
    //         flexDirection:'column',
    //         textAlign:'center',
    //     },
    // }))
  return (
    <Box sx={{backgroundColor:"#FEF682", py:10,}} >
        <CustomContainer>
            <Box>
                <Typography sx={{fontSize:'20px', fontWeight:'700', color:'#1C1C1D', mb:2,}}>Featured</Typography>
                <FooterLink onClick={()=>navigate('/guides')}>Guides</FooterLink>
                <FooterLink onClick={()=>navigate('/services')}>Services</FooterLink>
                <FooterLink onClick={()=>navigate('/contact')}>Contact Us</FooterLink>
            </Box>
            <Box>
                <Typography sx={{fontSize:'20px', fontWeight:'700', color:'#1C1C1D', mb:2,}}>Overview</Typography>
                <FooterLink onClick={()=>navigate('/location')}>Location</FooterLink>
                <FooterLink onClick={()=>navigate('/partnership')}>Partnership</FooterLink>
                <FooterLink onClick={()=>navigate('/terms')}>Terms & Conditions</FooterLink>
            </Box>
            <Box>
                <Typography sx={{fontSize:'20px', fontWeight:'700', color:'#1C1C1D', mb:2,}}>Get In Touch</Typography>
                <Typography sx={{fontSize:'16px', fontWeight:'500', color:'#7A7A7E', mb:2,}}>Keep in touch with our social media pages.</Typography>
                <IconBox>
                    {/* <img src={fbIcon} alt="Facebook Icon" style={{cursor:'pointer'}}/>
                    <img src={igIcon} alt="Instagram Icon" style={{cursor:'pointer'}}/>
                    <img src={twIcon} alt="Twitter Icon" style={{cursor:'pointer'}}/> */}
                    <IconBox>
                        <Facebook sx={{cursor:'pointer',color:'#1877F2','&:hover':{color:'#FFC107'}}}/>
                        <Instagram sx={{cursor:'pointer',color:'#E1306C','&:hover':{color:'#FFC107'}}}/>
                        <Twitter sx={{cursor:'pointer',color:'#1DA1F2','&:hover':{color:'#FFC107'}}}/>
                        <WhatsApp sx={{cursor:'pointer',color:'#25D366','&:hover':{color:'#FFC107'}}}/>
                        {/* <X sx={{cursor:'pointer',color:'#FF0000','&:hover':{color:'#FFC107'}}}/> */}
                    </IconBox>
                </IconBox>
            </Box>

        </CustomContainer>
        <Box sx={{textAlign:'center', mt:5, mb:-5}}>
            <Typography sx={{fontSize:'14px', fontWeight:'500', color:'#7A7A7E', mt:2,}}>© 2025 Bypass Bistro. All rights reserved.</Typography>
        </Box>
    </Box>
  )
}

export default Footer