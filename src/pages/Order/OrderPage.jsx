import React, { useState } from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import food1 from '../../assets/Food1.jpg';
import food2 from '../../assets/Food2.jpg';
import food3 from '../../assets/Food5.jpg';
import CustomButton from '../../componenets/CustomButton/CustomButton';
import { Data } from '../../StaticData/Data';

const OrderPage = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');
    const [cart, setCart] = useState([]);

    const foodItems = [
        { id: 1, img: food1, name: 'Combo Dishes', price: 250.00 },
        { id: 2, img: food2, name: 'London Popcon', price: 50.00 },
        { id: 3, img: food3, name: 'Shawarma Pro', price: 150.00 }
    ];
    // const foodItems = Data;

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 40).toFixed(2);

    const FoodCard = styled(Card)(({ theme }) => ({
        backgroundColor: '#FFF3B0',
        borderRadius: '10px',
        textAlign: 'center',
        padding: theme.spacing(2),
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        '&:hover': {
            backgroundColor: '#FFD700',
        },
    }));

    return (
        // <Container sx={{ pt: 5, pb: 5 }}>
        //     <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#DAA520', textAlign: 'center', mb: 3 }}>
        //         Order Your Favorite Food 🍽️
        //     </Typography>

        //     <Grid container spacing={4} justifyContent="center">
        //         {foodItems.map((item) => (
        //             <Grid item xs={12} sm={6} md={4} key={item.id}>
        //                 <FoodCard>
        //                     <img src={item.img} alt={item.name} style={{ width: '100px', marginBottom: '10px' }} />
        //                     <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>{item.name}</Typography>
        //                     <Typography variant="body2" sx={{ color: '#5A6473', mb: 2 }}>₹{item.price}</Typography>
        //                     <Button 
        //                         variant="contained" 
        //                         sx={{ backgroundColor: '#FFD700', color: '#000' }}
        //                         onClick={() => addToCart(item)}
        //                     >
        //                         Add to Cart
        //                     </Button>
        //                     <Box sx={{ mt: 2, justifyItems: 'center' }}><CustomButton buttonText="Add to Cart" getStartedBtn={true} backgroundColor="#0F1B4C" color="#fff" onClick={() => addToCart(item)}/></Box>
        //                 </FoodCard>
        //             </Grid>
        //         ))}
        //     </Grid>

        //     {cart.length > 0 && (
        //         <Box sx={{ mt: 5, textAlign: 'center', backgroundColor: '#FFF8DC', padding: 3, borderRadius: '10px' }}>
        //             <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
        //                 🛒 Your Cart
        //                 <Typography variant="body1" sx={{ color: '#5A6473' }}>Fixed Delivery Charge:-₹40</Typography>
        //             </Typography>
        //             {cart.map((item, index) => (
        //                 <Typography key={index} variant="body1" sx={{ color: '#5A6473' }}>
        //                     {item.name} - ₹{item.price.toFixed(2)}
        //                 </Typography>
        //             ))}
        //             <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mt: 2 }}>
        //                 Total: ₹{totalPrice}
        //             </Typography>
        //         </Box>
        <Container sx={{ pt: 5, pb: 5 }}>
    <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#DAA520', textAlign: 'center', mb: 3 }}>
        Order Your Favorite Food 🍽️
    </Typography>

    <Grid container spacing={4} justifyContent="center">
        {foodItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
                <FoodCard>
                    <img src={item.img} alt={item.name} style={{ width: '100px', marginBottom: '10px' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>{item.name}</Typography>
                    <Typography variant="body2" sx={{ color: '#5A6473', mb: 2 }}>₹{item.price}</Typography>
                    
                    <Box sx={{ mt: 2, justifyItems: 'center' }}>
                        <CustomButton 
                            buttonText="Add to Cart" 
                            getStartedBtn={true} 
                            backgroundColor="#0F1B4C" 
                            color="#fff" 
                            onClick={() => addToCart(item)}
                        />
                    </Box>
                </FoodCard>
            </Grid>
        ))}
    </Grid>

    {cart.length > 0 && (
        <Box sx={{ mt: 5, textAlign: 'center', backgroundColor: '#FFF8DC', padding: 3, borderRadius: '10px' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
                🛒 Your Cart
                <Typography variant="body1" sx={{ color: '#5A6473' }}>Fixed Delivery Charge: ₹40</Typography>
            </Typography>

            {cart.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, px: 2 }}>
                    <Typography variant="body1" sx={{ color: '#5A6473' }}>
                        {item.name} - ₹{item.price.toFixed(2)}
                    </Typography>
                    <CustomButton 
                        buttonText="Remove" 
                        backgroundColor="#D32F2F" 
                        color="#fff" 
                        onClick={() => removeFromCart(index)} 
                    />
                </Box>
            ))}

            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mt: 2 }}>
                Total: ₹{totalPrice}
            </Typography>
        </Box>
            )}

            <Box sx={{ mt: 5, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
                    Enter Your Delivery Address 📍
                </Typography>
                <TextField
                    label="Your Address"
                    variant="outlined"
                    fullWidth
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    sx={{ maxWidth: '500px', backgroundColor: '#FFFDE7', borderRadius: '5px' }}
                />
            </Box>

            {cart.length > 0 && location && (
                <Box sx={{ mt: 5, textAlign: 'center',justifyItems: 'center' }}>
                    {/* <Button 
                        variant="contained" 
                        sx={{ backgroundColor: '#DAA520', color: '#000', mt: 3 }}
                        onClick={() => navigate('/payment', { state: { cart, totalPrice, location } })}
                    >
                        Proceed to Payment
                    </Button> */}
                    <CustomButton 
                        buttonText="Proceed to Payment" 
                        getStartedBtn={true} 
                        backgroundColor="#DAA520" 
                        color="#fff" 
                        onClick={() => navigate('/payment', { state: { cart, totalPrice, location } })}
                    />
                </Box>
            )}
        </Container>
    );
};

export default OrderPage;
