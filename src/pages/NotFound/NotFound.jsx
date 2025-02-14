import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../componenets/CustomButton/CustomButton';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Container sx={{ textAlign: 'center', mt: 10 }}>
            <Box>
                <img 
                    src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7893.jpg" 
                    alt="404 Not Found" 
                    style={{ width: '350px', marginBottom: '20px' }} 
                />
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#DAA520', mb: 2 }}>
                    404 Error: Page Not Found
                </Typography>
                <Typography variant="body1" sx={{ color: '#5A6473', fontSize: '18px', mb: 3 }}>
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </Typography>
                {/* <Button 
                    variant="contained" 
                    sx={{ backgroundColor: '#000339', color: '#fff' }} 
                    onClick={() => navigate('/')}
                >
                    Back to Home
                </Button> */}
                <Box sx={{ mt: 4 , mb: 4, display: 'flex', justifyContent: 'center'}}><CustomButton buttonText="Back to Home" onClick={() => navigate('/')} backgroundColor={'#DAA520'} color={'#fff'}/></Box>
            </Box>
        </Container>
    );
};

export default NotFound;
