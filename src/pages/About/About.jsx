import React from 'react'
import {Box, styled, Typography} from '@mui/material'
const About =() => {
    const CustomBox = styled(Box)(({theme})=>({
        width:"30%",
        [theme.breakpoints.down('md')]:{
            width:"85%",
        }
    }))
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',padding:'40px', mt:'65px', mb:'100px'}}>
        <div style={{width:"5%",height:"5px", backgroundColor:"#000339",margin:"0 auto"}}></div>
        <Typography variant='h3' sx={{color:'#000339', fontWeight:'bold', fontSize:'35px', my:3,}}>
            About Us
        </Typography>
        <CustomBox>
            <Typography variant='body2' sx={{color:'#5A6473', fontWeight:'500', fontSize:'16px', textAlign:'center'}}>            
                Welcome to our restaurant, where culinary excellence meets warm hospitality. 
            </Typography>
        </CustomBox>
    </Box>
  )
}

export default About