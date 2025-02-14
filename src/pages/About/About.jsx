import React from 'react';
import { Box, styled, Typography, Grid } from '@mui/material';

const About = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        maxWidth: "auto",
        [theme.breakpoints.down('md')]: {
            maxWidth: "100%",
            textAlign: "center"
        }
    }));

    return (
        <Box sx={{ padding: '40px', mt: '65px', mb: '100px'}}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                {/* Text Section */}
                <Grid item xs={12} md={6}>
                    <CustomBox>
                        <Typography variant='h3' sx={{ color: '#000339', fontWeight: 'bold', fontSize: { xs: '28px', md: '35px' }, textAlign: { xs: 'center', md: 'center' }, mb: 3 }}>
                            About Bypass Bistro
                        </Typography>
                        <div style={{ width: "5rem", height: "5px", backgroundColor: "#000339", margin: "0 auto", marginBottom: 20 }}></div>
                        <Typography variant='body2' sx={{ color: '#5A6473', fontWeight: '500', fontSize: '16px', textAlign: 'justify' }}>
                            <strong>Bypass Bistro</strong> is a cozy and vibrant restaurant located in the heart of <strong>Adoor Bypass</strong>. Founded in <strong>2015</strong>, our journey began with a vision to create a space where flavors meet passion, and every meal is a delightful experience.  
                            <br /><br />
                            We specialize in a fusion of <strong>traditional Kerala flavors</strong> with an international twist. From aromatic biryanis and fresh seafood to mouthwatering grilled delicacies, every dish is crafted with love and precision.
                            <br /><br />
                            Our restaurant’s ambiance is a perfect blend of <strong>rustic charm</strong> and <strong>modern elegance</strong>—a place where families, friends, and food lovers can gather and make memories.
                            <br /><br />
                            We also offer <strong>home delivery</strong> services so you can enjoy your favorite dishes from the comfort of your home.
                            <br /><br />
                            Visit <strong>Bypass Bistro</strong> and embark on a culinary adventure like never before! 🍽️✨
                        </Typography>
                    </CustomBox>
                </Grid>

                {/* Image Section */}
                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                    <Box
                        component="img"
                        src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                        alt="Bypass Bistro"
                        sx={{ width: '100%', maxWidth: '500px', borderRadius: '10px', boxShadow: 3 }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;
