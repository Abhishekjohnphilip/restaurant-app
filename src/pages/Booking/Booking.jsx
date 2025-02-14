import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { margin, styled, width } from '@mui/system'
import { useNavigate } from 'react-router-dom'

import buyIcon from '../../assets/buy_icon.png'
import sellIcon from '../../assets/sell_icon.png'
import rentIcon from '../../assets/sell_icon.png'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CustomButton from '../../componenets/CustomButton/CustomButton'


const Booking = () => {
    const navigate = useNavigate ();
    const CustomBox = styled(Box)(({theme})=>({
       width:'30%',
       [theme.breakpoints.down('md')]:{
        width:'85%',
       }
    }))

    const GuidesBox = styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'space-between',
        width:'70%',
        marginTop:theme.spacing(5),
        marginBottom:theme.spacing(5),
        [theme.breakpoints.down('md')]:{
            width:'100%',
        },
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            marginBottom:"0",
        }
    }))

    const GuideBox = styled(Box)(({theme})=>({
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("sm")]:{
            margin: theme.spacing(2,0,2,0),
        }
    }))

    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', padding:'40px'}}>

          {/* <div style={{width:"5%", height:"5px", backgroundColor:"#000339", margin:"0 auto",}}></div> */}

          <Typography variant='h3' sx={{fontSize:'35px', fontWeight:'bold', color:'#000339', my:3}}>How to Book?</Typography>
          <div style={{width:"5rem", height:"5px", backgroundColor:"#000339", margin:"0 auto", marginBottom:40}}></div>
          <CustomBox>
            <Typography variant='body2' sx={{color:'#5A6473', fontWeight:'500', fontSize:'16px', textAlign:'center',}}>
                Everything you need to know when you book for advance slot
            </Typography>
          </CustomBox>

          <GuidesBox>
            <GuideBox>
                <img src={buyIcon} alt="buy"/>
                <Typography variant='body2' sx={{color:'#3B3c45', fontWeight:'500', fontSize:'20px', my:1,}}>
                    Order Guides
                </Typography>
                <Box sx={{display:'flex', alignItems:'center',justifyContent:'space-between',cursor:'pointer'}}>
                    <Typography variant='body2' sx={{color:'#0689FF', fontWeight:'bold', fontSize:'14px',}} onClick={() => navigate("/*")}>
                        How to Order
                    </Typography>
                    <ArrowRightAltIcon sx={{color:'#0689FF'}}/>
                </Box>
            </GuideBox>

            <GuideBox>
                <img src={rentIcon} alt="buy"/>
                <Typography variant='body2' sx={{color:'#3B3c45', fontWeight:'500', fontSize:'20px', my:1,}}>
                    Booking Guides
                </Typography>
                <Box sx={{display:'flex', alignItems:'center',justifyContent:'space-between',cursor:'pointer'}}>
                    <Typography variant='body2' sx={{color:'#0689FF', fontWeight:'bold', fontSize:'14px',}}  onClick={() => navigate("/*")}>
                        How to Book
                    </Typography>
                    <ArrowRightAltIcon sx={{color:'#0689FF'}}/>
                </Box>
            </GuideBox>

            <GuideBox>
                <img src={sellIcon} alt="buy"/>
                <Typography variant='body2' sx={{color:'#3B3c45', fontWeight:'500', fontSize:'20px', my:1,}}>
                    Payment Guides
                </Typography>
                <Box sx={{display:'flex', alignItems:'center',justifyContent:'space-between',cursor:'pointer'}}>
                    <Typography variant='body2' sx={{color:'#0689FF', fontWeight:'bold', fontSize:'14px',}} onClick={() => navigate("/*")}>
                        Payment Methods
                    </Typography>
                    <ArrowRightAltIcon sx={{color:'#0689FF'}}/>
                </Box>
            </GuideBox>

          </GuidesBox>
          <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="See Full Guide" guideBtn={true} onClick={() => navigate("/guides")}/>
        </Box>
    );
};

export default Booking