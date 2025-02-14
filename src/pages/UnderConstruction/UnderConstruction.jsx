import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import CustomButton from '../../componenets/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
const UnderConstruction = () => {
    const navigate = useNavigate();
    return (
        <Container sx={{ textAlign: 'center', mt: 10 }}>
            <Box>
                <img 
                    src="https://img.freepik.com/free-vector/under-construction-concept-illustration_114360-1142.jpg" 
                    alt="Under Construction" 
                    style={{ width: '300px', marginBottom: '20px' }} 
                />
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#DAA520', mb: 2 }}>
                    🚧 Page Under Construction 🚧
                </Typography>
                <Typography variant="body1" sx={{ color: '#5A6473', fontSize: '18px' }}>
                    We're working hard to bring you something amazing! Stay tuned for updates.
                </Typography>
                <Typography variant="body1" sx={{ color: '#5A6473', fontSize: '18px', mt: 2 }}>
                    Thank you for your patience.
                </Typography>

                <Box sx={{ mt: 4 , mb: 4, display: 'flex', justifyContent: 'center'}}><CustomButton buttonText="Back to Home" onClick={() => navigate('/')} backgroundColor={'#DAA520'} color={'#fff'}/></Box>
            </Box>
        </Container>
    );
};

export default UnderConstruction;
