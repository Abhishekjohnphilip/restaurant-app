import React from 'react'
import{ styled, Typography} from '@mui/material'
import{Box, Container,} from '@mui/system'
import ambienceImg from '../../assets/ambience.jpg'
const Ambience=()=> {
    const CustomBox=styled(Box)(({theme})=>({
        display:'flex',
        alignItems:'center',
        gap:theme.spacing(10),
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
            textAlign:'center',
            // alignItems:'center',
        },
    }))

    const ImgContainer=styled(Box)(({theme})=>({
        width:'100%',
        [theme.breakpoints.down('md')]:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
        },
    }))

    const LargeText = styled(Typography)(({theme})=>({
        fontSize:'64px',
        fontWeight:'700',
        color:'#000',
        // margin:theme.spacing(4,0,4,0),
        [theme.breakpoints.down('md')]:{
            fontSize:'32px',
            // textAlign:'center',
        },
    }))

    const SmallText = styled(Typography)(({theme})=>({
        fontSize:'18px',
        fontWeight:'500',
        color:'#7B8087',
        // margin:theme.spacing(4,0,4,0),
        [theme.breakpoints.down('md')]:{
            fontSize:'14px',
            // textAlign:'center',
        },
    }))
    
    const TextFlexbox = styled(Box)(({theme})=>({
        display:'flex',
        marginTop:theme.spacing(7),
        justifyContent:'space-between',
        padding:theme.spacing(0,5,0,5),
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
            gap:theme.spacing(5),
        },
    }))

    const Divider = styled("div")(({theme})=>({
        width:'13%',
        height:'5px',
        backgroundColor:'#000339',
        [theme.breakpoints.down('md')]:{
            marginLeft:'auto',
            marginRight:'auto',
        },
    }))

  return (
    <Box sx={{py:10}}>
        <Container>
            <CustomBox>
                <ImgContainer>
                    <img src={ambienceImg} alt="img" style={{maxWidth:'100%'}}/>
                </ImgContainer>
                <Box>
                    <Divider/>
                    <Typography sx={{color:'#000339', fontSize:'35px', fontWeight:'700', my:3}}>
                        You've found a ambience you love.
                    </Typography>
                    <Typography sx={{color:'#5A6473', fontSize:'16px', fontWeight:'400',lineHeight:"27px"}}>
                        Discover the epitome of culinary excellence at Savoria, where every visit is an enchanting rendezvous with the art of dining.
                    </Typography>
                </Box>
            </CustomBox>
            <TextFlexbox>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <LargeText>250+</LargeText>
                    <SmallText>Dishes</SmallText>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <LargeText>300+</LargeText>
                    <SmallText>Trusted Clients</SmallText>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <LargeText>350+</LargeText>
                    <SmallText>Delivery Per Day</SmallText>
                </Box>
            </TextFlexbox>
        </Container>
    </Box>
  )
}

export default Ambience