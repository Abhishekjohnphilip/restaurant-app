import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/system'
import logoImg from '../../assets/logo.png'
import starsImg from '../../assets/Star.png'
import logosImg from '../../assets/logos.png'

const Partner = () => {
    const CustomContainer = styled(Container)(({theme})=>({
        display:'flex',
        justifyContent:'space-between',
        // alignItems:'center',
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
            textAlign:'center',
            alignItems:'center',
            marginBottom:theme.spacing(4),
        },
    }))

    const CustomBox = styled(Box)(({theme})=>({
        [theme.breakpoints.down('md')]:{
            marginBottom:theme.spacing(4),
        }
    }))
    

        return (
            <Box sx={{mt:10}}>
                <CustomContainer>
                    <CustomBox>
                        <img src={logoImg} alt="logo" style={{maxwidth:'100%'}}/>
                        <Typography variant='body2' sx={{color:'#7D8589', fontWeight:'bold', fontSize:'16px', mt:2,}}>More than 45,000 trust Techflix</Typography>
                    </CustomBox>
                    <Box>
                        <img src={starsImg} alt="stars" style={{maxwidth:'100%'}}/>
                        <Typography variant='body2' sx={{color:'#7D8589', fontWeight:'bold', fontSize:'16px', mt:2,}}>5-Star Rating (2k+ Reviews)</Typography>
                    </Box>
                </CustomContainer>
                <Container sx={{display:'flex', flexDirection:'column'}}>
                    <img src={logosImg} alt="logos" />
                </Container>
            </Box>
        )
}

export default Partner