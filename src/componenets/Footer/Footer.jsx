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
// import linkedinIcon from '../../assets/linkedin.png'

const Footer = () => {
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

    const FooterLink = styled(Typography)(({spna})=>({
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
                <FooterLink>Guides</FooterLink>
                <FooterLink>Services</FooterLink>
                <FooterLink>Contact Us</FooterLink>
            </Box>
            <Box>
                <Typography sx={{fontSize:'20px', fontWeight:'700', color:'#1C1C1D', mb:2,}}>Overview</Typography>
                <FooterLink>Location</FooterLink>
                <FooterLink>Partnership</FooterLink>
                <FooterLink>Terms & Conditions</FooterLink>
            </Box>
            <Box>
                <Typography sx={{fontSize:'20px', fontWeight:'700', color:'#1C1C1D', mb:2,}}>Get In Touch</Typography>
                <Typography sx={{fontSize:'16px', fontWeight:'500', color:'#7A7A7E', mb:2,}}>Keep in touch with our social media pages.</Typography>
                <IconBox>
                    <img src={fbIcon} alt="Facebook Icon" style={{cursor:'pointer'}}/>
                    <img src={igIcon} alt="Instagram Icon" style={{cursor:'pointer'}}/>
                    <img src={twIcon} alt="Twitter Icon" style={{cursor:'pointer'}}/>
                </IconBox>
            </Box>

        </CustomContainer>
    </Box>
  )
}

export default Footer