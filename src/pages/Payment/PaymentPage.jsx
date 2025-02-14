import React, { useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import qrcode from '../../assets/Bypass Bistro.webp';
import CustomButton from '../../componenets/CustomButton/CustomButton';


const PaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const { cart, totalPrice, location: deliveryLocation } = location.state || { cart: [], totalPrice: '0.00', location: '' };

    const handleCompleteOrder = () => {
        setOrderPlaced(true);
        setTimeout(() => {
            navigate('/');
        }, 3000); 
    };

    return (
        <Container sx={{ pt: 5, pb: 5, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#DAA520', mb: 3 }}>
                Payment Page 💳
            </Typography>

            {orderPlaced ? (
                <Box sx={{ mt: 5 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#28A745' }}>
                        🎉 Order Placed Successfully!
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#5A6473', mt: 2 }}>
                        Your delicious food is on the way 🚀
                    </Typography>
                </Box>
            ) : (
                <>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
                        Total Amount: ${totalPrice}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#5A6473', mb: 3 }}>
                        Delivery Location: {deliveryLocation}
                    </Typography>

                    <img src={qrcode} alt="UPI QR Code" style={{ width: '200px', borderRadius: '10px' }} />
                    <Typography variant="body2" sx={{ color: '#5A6473', mt: 2 }}>
                        Scan the QR code using your UPI app to complete payment.
                    </Typography>

                    {/* <Button 
                        variant="contained" 
                        sx={{ backgroundColor: '#28A745', color: '#fff', mt: 3 }}
                        onClick={handleCompleteOrder}
                    >
                        Complete Order
                    </Button> */}
                    <Box sx={{justifyItems:'center', mt:3}}><CustomButton buttonText="Complete Order" onClick={handleCompleteOrder} backgroundColor={'#28A745'} color={'#fff'}/></Box>
                </>
            )}
        </Container>
    );
};

export default PaymentPage;
