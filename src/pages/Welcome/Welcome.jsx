import React from 'react'
import{Box, Button, Typography} from '@mui/material'
import {styled, Container} from '@mui/system'
import CustomButton from '../../componenets/CustomButton/CustomButton'
import welcome from '../../assets/welcome.png'
import { useNavigate } from 'react-router-dom'
const Welcome = () => {
    const navigate = useNavigate();
    const CustomBox = styled(Box)(({theme})=>({
        // height:'100vh',
        display:'flex',
        justifyContent:'center',
        // alignItems:'center',
        gap: theme.spacing(5),
        marginTop:theme.spacing(3),
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
            textAlign:'center',
            alignItems:'center',
        },
    }))
//     const CustomContainer = styled(Container)(({theme})=>({
// }
const Title = styled(Typography)(({theme})=>({
    fontSize:'64px',
    fontWeight:'bold',
    color:'#fff',
    margin:theme.spacing(4,0,4,0),
    [theme.breakpoints.down('sm')]:{
        fontSize:'40px',
        // textAlign:'center',
    },
}))
  return (
    <Box sx={{backgroundColor:"#FED801", minHeight:'80vh'}}>
        <Container>
            <CustomBox>
                <Box sx={{flex:1}}>
                    <Typography variant='body2' sx={{fontSize:'18px', fontWeight:500, mt:10, mb:4, color:'#687690'}}>
                        Welcome to Bypass Bistro Restaurant 
                    </Typography>
                    <Title variant='h1'>
                        Discover a place where you'll love to Eat. 
                    </Title>
                    <Typography variant='body2' sx={{fontSize:'18px', mb:4, color:'#5A6473'}}>
                        Immerse yourself in the elegant ambiance as you savor each bite, accompanied by our extensive selection of hand-picked wines and carefully curated cocktails.
                    </Typography>
                    <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="More About Us" welcomeBtn={true} onClick={() => navigate('/aboutus')}/>
                </Box>
                <Box sx={{flex:1.25}}>
                    <img src={welcome} alt="welcome" style={{width:'100%', marginBottom:'2rem'}}/>
                </Box>
            </CustomBox>
        </Container>
    </Box>
  );
};



export default Welcome;