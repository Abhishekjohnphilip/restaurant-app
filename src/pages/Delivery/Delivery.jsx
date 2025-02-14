import React from 'react'
import { Box, Container, Typography, styled } from '@mui/material'
import deliveryImg from '../../assets/DeliveryImg.png'
import CustomButton from '../../componenets/CustomButton/CustomButton'
import { Padding } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
const Delivery = () => {
    const navigate = useNavigate()

    const CustomContainer = styled(Container)(({theme})=>({
        backgroundColor:'#FED801',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        height:"416px",
        borderRadius:'15px',
        [theme.breakpoints.down('md')]:{
            height:'auto',
            flexDirection:'column',
            // textAlign:'center',
            alignItems:'center',
            padding:theme.spacing(3,3,0,3),
            width:'90%',
        },
    }))

    const CustomBox = styled(Box)(({theme})=>({
        padding:theme.spacing(10,0,10,0),
        margin:theme.spacing(0,2,0,2),
        [theme.breakpoints.down('md')]:{
            padding:"0",
        }
    }))
  return (
    <CustomBox>
    <CustomContainer>
        <Box>
        
            <Typography sx={{color:'white', fontSize:'35px', fontWeight:'700',fontFamily:'monospace'}}>
                Super Fast Home Delivery
            </Typography>
            <Typography sx={{color:'#000', fontSize:'16px', fontWeight:'800',fontFamily:'monospace',my:3}}>
                Door to Door Delivery!
            </Typography>
            <CustomButton buttonText={"Order Now!!"} color={"#17275F"} backgroundColor={"#fff"} onClick={() => navigate('/order') }/>
        </Box>
        <img src={deliveryImg} alt="delivery" style={{maxWidth:'100%'}}/>    
    </CustomContainer>
    </CustomBox>
  )
}

export default Delivery