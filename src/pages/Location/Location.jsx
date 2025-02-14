import React from 'react';
import { Box, Typography, Container, styled } from '@mui/material';

// Random Restaurant Location (Los Angeles, CA)
const googleMapsURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.9174810195833!2d-118.243683!3d34.052235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b5a60a6f51%3A0x921d3166c7a3c0b1!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

const CustomContainer = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(5),
}));

const StyledMap = styled('iframe')({
  width: '100%',
  height: '400px',
  borderRadius: '10px',
  border: 'none',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
});

const Location = () => {
  return (
    <CustomContainer>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#000066', mb: 3 }}>
        📍 Our Location
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Visit our restaurant or get fast home delivery from our prime location in Los Angeles.
      </Typography>

      {/* Google Maps Embed */}
      <StyledMap src={googleMapsURL} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

      <Box mt={3}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          🍽 Address:
        </Typography>
        <Typography>456 Sunset Blvd, Los Angeles, CA 90028</Typography>

        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
          📞 Contact:
        </Typography>
        <Typography>+1 310 555 1234</Typography>

        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
          ⏰ Opening Hours:
        </Typography>
        <Typography>Mon-Sun: 10 AM - 11 PM</Typography>
      </Box>
    </CustomContainer>
  );
};

export default Location;
