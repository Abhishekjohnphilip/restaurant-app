// import React from 'react';
// import { Container, Typography, Box, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

// const Contact = () => (
//   <Container>
//     <Typography variant="h4">Contact Us</Typography>
//     <Box component="form">
//       <TextField fullWidth label="Name" margin="normal" />
//       <TextField fullWidth label="Email" margin="normal" />
//       <TextField fullWidth label="Message" multiline rows={4} margin="normal" />
//       <Button variant="contained">Send</Button>
//     </Box>
//   </Container>
// );

// const Guide = () => (
//   <Container>
//     <Typography variant="h4">User Guide</Typography>
//     <List>
//       <ListItem><ListItemText primary="Step 1: Register an account" /></ListItem>
//       <ListItem><ListItemText primary="Step 2: Browse services" /></ListItem>
//       <ListItem><ListItemText primary="Step 3: Make a reservation" /></ListItem>
//     </List>
//   </Container>
// );

// const Services = () => (
//   <Container>
//     <Typography variant="h4">Our Services</Typography>
//     <Typography variant="body1">We provide high-quality food and delivery services.</Typography>
//   </Container>
// );

// const TermsAndConditions = () => (
//   <Container>
//     <Typography variant="h4">Terms and Conditions</Typography>
//     <Typography variant="body2">By using our services, you agree to our terms and policies.</Typography>
//   </Container>
// );

// const Partnership = () => (
//   <Container>
//     <Typography variant="h4">Partnership</Typography>
//     <Typography variant="body1">Partner with us to grow your business.</Typography>
//   </Container>
// );

// export { Contact, Guide, Services, TermsAndConditions, Partnership };

// import React from 'react';
// import { Container, Typography, Box } from '@mui/material';

// const PageLayout = ({ title, content }) => {
//   return (
//     <Container maxWidth="md" sx={{ py: 5 }}>
//       <Box sx={{ textAlign: 'center', my: 3 }}>
//         <Typography variant="h4" fontWeight="bold">
//           {title}
//         </Typography>
//         <Typography variant="body1" sx={{ mt: 2 }}>
//           {content}
//         </Typography>
//       </Box>
//     </Container>
//   );
// };

// export const Contact = () => (
//   <PageLayout title="Contact Us" content="Get in touch with us via email or phone. We're here to help!" />
// );

// export const Guide = () => (
//   <PageLayout title="Guide" content="Explore our guides to learn how to use our services efficiently." />
// );

// export const Services = () => (
//   <PageLayout title="Our Services" content="Discover the range of services we offer to make your experience better." />
// );

// export const TermsAndConditions = () => (
//   <PageLayout title="Terms and Conditions" content="Read our terms and conditions before using our platform." />
// );

// export const Partnership = () => (
//   <PageLayout title="Partnership" content="Interested in partnering with us? Learn how we can collaborate." />
// );

// Example Usage: In App.js or Router Component
// import { Contact, Guide, Services, TermsAndConditions, Partnership } from './Pages';
// <Route path="/contact" element={<Contact />} />
// <Route path="/guide" element={<Guide />} />
// <Route path="/services" element={<Services />} />
// <Route path="/terms" element={<TermsAndConditions />} />
// <Route path="/partnership" element={<Partnership />} />


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Typography, Box, Button, Grid, Accordion, AccordionSummary, AccordionDetails, Card, CardContent} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { WhatsApp } from '@mui/icons-material';

// Reusable Layout Component
const PageLayout = ({ title, children }) => (
  <Container maxWidth="lg" sx={{ py: 5 }}>
    <Typography variant="h3" gutterBottom>{title}</Typography>
    <Box>{children}</Box>
  </Container>
);

// Contact Page
// const Contact = () => (
//   <PageLayout title="Contact Us">
//     <Typography variant="body1">Have questions? Reach out to us via email or phone.</Typography>
//     <Box mt={3}>
//       <Typography>Email: support@example.com</Typography>
//       <Typography>Phone: +123 456 7890</Typography>
//     </Box>
//   </PageLayout>
// );
const ContactContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(5),
  }));
  
  const IconBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    backgroundColor: '#FEF682',
    padding: theme.spacing(2),
    borderRadius: '8px',
    width: '100%',
    maxWidth: '400px',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  }));
  
  const Contact = () => (
    <ContactContainer>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Have questions? Reach out to us via email, phone, or visit us!
      </Typography>
      
      <IconBox onClick={() => window.open('mailto: support@example.com', '_blank')} sx={{ cursor: 'pointer', '&:hover': {transform: 'scale(1.1)',color: '#FFC107'} }}>
        <EmailIcon/>
        <Typography variant="body1">support@example.com</Typography>
      </IconBox>
      
      <IconBox onClick={() => window.open('tel:1234567890', '_blank')} sx={{ cursor: 'pointer', '&:hover': {transform: 'scale(1.1)',color: '#FFC107'} }}>
        <PhoneIcon/>
        <Typography variant="body1" onClick={() => window.open('tel:1234567890', '_blank')} sx={{ cursor: 'pointer','&:hover': { color: '#FFC107'} }}>+123 456 7890</Typography>
      </IconBox>

      <IconBox sx={{ cursor: 'pointer', '&:hover': {transform: 'scale(1.1)',color: '#FFC107'} }} onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
        <WhatsApp/>
        <Typography variant="body1">+123 456 7890</Typography>
      </IconBox>
      
      <IconBox sx={{ cursor: 'pointer', '&:hover': {transform: 'scale(1.1)',color: '#FFC107'} }} onClick={() => window.open('https://www.google.com/maps?q=123+Food+Street,+Gourmet+City', '_blank')}>
        <LocationOnIcon/>
        <Typography variant="body1">123 Food Street, Gourmet City</Typography>
      </IconBox>
    </ContactContainer>
  );

// Guides Page
// const Guides = () => (
//   <PageLayout title="Guides">
//     <Typography variant="body1">Find step-by-step instructions for using our services.</Typography>
//     <Button variant="contained" color="primary" sx={{ mt: 3 }}>Read Guides</Button>
//   </PageLayout>
// );
const Guides = () => {
    const navigate = useNavigate();

    const GuideContainer = styled(Container)(({ theme }) => ({
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        textAlign: 'center',
    }));

    const GuideSection = styled(Box)(({ theme }) => ({
        marginTop: theme.spacing(5),
        textAlign: 'left',
    }));

    return (
        <GuideContainer>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#0F1B4C', mb: 2 }}>
                User Guides
            </Typography>
            <Typography variant="body1" sx={{ color: '#5A6473', mb: 3 }}>
                Explore our step-by-step guides to get the most out of our services.
            </Typography>

            {/* Step-by-Step Guides */}
            <GuideSection>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
                    Step-by-Step Guides
                </Typography>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">How to Place an Order</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            1. Browse the menu and select your favorite dishes. <br />
                            2. Add items to the cart and review your order. <br />
                            3. Proceed to checkout and enter your delivery details. <br />
                            4. Make payment securely and confirm your order. <br />
                            5. Track your order in real-time until delivery.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">How to Partner with Us</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            1. Visit the partnership page and fill out the application form. <br />
                            2. Our team will review your application within 48 hours. <br />
                            3. Once approved, you will receive a welcome package and training. <br />
                            4. Start listing your restaurant and receiving orders!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">How to Contact Customer Support</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            If you need help, reach out to us via:
                            <ul>
                                <li>Email: support@example.com</li>
                                <li>Phone: +123 456 7890</li>
                                <li>Live chat on our website</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </GuideSection>

            {/* Quick Access Buttons */}
            <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Button variant="contained" color="primary" onClick={() => navigate('/order')}>
                    Start an Order
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => navigate('/partnership')}>
                    Become a Partner
                </Button>
                <Button variant="contained" sx={{ backgroundColor: '#FFD700', color: '#000' }} onClick={() => navigate('/contact')}>
                    Contact Support
                </Button>
            </Box>
        </GuideContainer>
    );
};

// Services Page
const Services = () => (
  <PageLayout title="Our Services">
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Typography variant="h5">Service 1</Typography>
        <Typography>High-quality dining experience.</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h5">Service 2</Typography>
        <Typography>Fast delivery service.</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h5">Service 3</Typography>
        <Typography>Customized meal plans.</Typography>
      </Grid>
    </Grid>
  </PageLayout>
);

// Terms & Conditions Page
// const TermsAndConditions = () => (
//   <PageLayout title="Terms & Conditions">
//     <Typography variant="body1">Please read our terms carefully before using our services.</Typography>
//   </PageLayout>
// );
const TermsAndConditions = () => (
    <PageLayout title="Terms & Conditions">
      <Container maxWidth="md">
        <Typography variant="h6" gutterBottom>
          1. Introduction
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to [Restaurant Name]! By using our website, services, or placing an order, you agree to be bound by these terms and conditions.
        </Typography>
  
        <Typography variant="h6" gutterBottom>
          2. Ordering & Payment
        </Typography>
        <Typography variant="body1" paragraph>
          - Orders can be placed via our website or mobile application.
          <br />- Payments must be made online through accepted payment methods (Credit/Debit Cards, UPI, PayPal, etc.).
          <br />- Prices are subject to change without notice, but confirmed orders will not be affected.
        </Typography>
  
        <Typography variant="h6" gutterBottom>
          3. Home Delivery Policy
        </Typography>
        <Typography variant="body1" paragraph>
          - Delivery is available within a [X km] radius of our restaurant.
          <br />- Standard delivery time is [30-45 minutes], subject to location and traffic conditions.
          <br />- Delivery charges may apply based on the distance and order amount.
          <br />- We are not responsible for delays due to weather, traffic, or unforeseen circumstances.
        </Typography>
  
        <Typography variant="h6" gutterBottom>
          4. Cancellation & Refund Policy
        </Typography>
        <Typography variant="body1" paragraph>
          - Orders can be canceled within 5 minutes of placement.
          <br />- Refunds will be processed within 7-10 business days for eligible cancellations.
          <br />- If an incorrect or incomplete order is received, please contact us immediately for a resolution.
        </Typography>
  
        <Typography variant="h6" gutterBottom>
          5. Partnering with Us
        </Typography>
        <Typography variant="body1" paragraph>
          - Restaurants or vendors interested in partnerships must submit an application through our website.
          <br />- Approved partners will be bound by a separate contractual agreement.
          <br />- Commission rates, profit-sharing, and responsibilities will be defined in the agreement.
          <br />- We reserve the right to terminate a partnership for any breach of contract or unethical practices.
        </Typography>
  
        <Typography variant="h6" gutterBottom>
          6. Customer Responsibilities
        </Typography>
        <Typography variant="body1" paragraph>
          - Customers must provide accurate contact and delivery details.
          <br />- Misuse of promo codes, fake orders, or fraudulent activity will result in a permanent ban.
          <br />- Customers must comply with all legal requirements regarding food safety and consumption.
        </Typography>
  
        <Typography variant="h6" gutterBottom>
          7. Liability & Disclaimers
        </Typography>
        <Typography variant="body1" paragraph>
          - We strive to ensure quality and timely service but do not guarantee uninterrupted service.
          <br />- We are not liable for any food allergies, adverse reactions, or damages caused by third-party delivery services.
          <br />- Customers are responsible for verifying ingredients before consuming any food products.
        </Typography>
  
        <Typography variant="h6" gutterBottom>
          8. Amendments & Updates
        </Typography>
        <Typography variant="body1" paragraph>
          - We reserve the right to update these terms at any time.
          <br />- Continued use of our services after updates signifies agreement to the new terms.
        </Typography>
      </Container>
    </PageLayout>
  );

// Partnership Page
// const Partnership = () => (
//   <PageLayout title="Partnership Opportunities">
//     <Typography variant="body1">Partner with us to bring amazing food experiences.</Typography>
//     <Button variant="contained" color="secondary" sx={{ mt: 3 }}>Apply Now</Button>
//   </PageLayout>
// );
const Partnership = () => {
    const navigate = useNavigate();

    const StyledContainer = styled(Container)(({ theme }) => ({
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        textAlign: 'center',
    }));

    const StyledCard = styled(Card)(({ theme }) => ({
        backgroundColor: '#FFF9E5',
        borderRadius: '10px',
        textAlign: 'left',
        padding: theme.spacing(3),
        transition: '0.3s',
        '&:hover': {
            backgroundColor: '#FFEB99',
        },
    }));

    return (
        <StyledContainer>
            {/* Header Section */}
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#0F1B4C', mb: 2 }}>
                Partnership Opportunities
            </Typography>
            <Typography variant="body1" sx={{ color: '#5A6473', mb: 4 }}>
                Join us in delivering exceptional food experiences and growing your business with us.
            </Typography>

            {/* Why Partner With Us Section */}
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1C1C1D' }}>
                                Increased Revenue
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#5A6473', mt: 1 }}>
                                Expand your customer base and increase your sales by partnering with us.
                            </Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1C1C1D' }}>
                                Marketing & Exposure
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#5A6473', mt: 1 }}>
                                Get featured on our platform and reach more potential customers.
                            </Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1C1C1D' }}>
                                Seamless Logistics
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#5A6473', mt: 1 }}>
                                We take care of delivery, payments, and customer service so you can focus on food.
                            </Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
            </Grid>

            {/* Call to Action Section */}
            <Box sx={{ mt: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
                    Ready to Grow with Us?
                </Typography>
                <Typography variant="body2" sx={{ color: '#5A6473', mb: 3 }}>
                    Apply now and become a part of our expanding network of restaurant partners.
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ backgroundColor: '#FFD700', color: '#000', fontWeight: 'bold', px: 4, py: 1.5 }}
                    onClick={() => navigate('/apply')}
                >
                    Apply Now
                </Button>
            </Box>
        </StyledContainer>
    );
};
// Navigation Bar
const Navbar = () => (
  <Box sx={{ py: 2, backgroundColor: '#ffcc00', textAlign: 'center' }}>
    <Button component={Link} to="/" sx={{ mx: 2 }}>Home</Button>
    <Button component={Link} to="/contact" sx={{ mx: 2 }}>Contact</Button>
    <Button component={Link} to="/guides" sx={{ mx: 2 }}>Guides</Button>
    <Button component={Link} to="/services" sx={{ mx: 2 }}>Services</Button>
    <Button component={Link} to="/terms" sx={{ mx: 2 }}>Terms & Conditions</Button>
    <Button component={Link} to="/partnership" sx={{ mx: 2 }}>Partnership</Button>
  </Box>
);

// App Component with Routing
const App = () => (
  <Router>
    <Navbar />
    <Routes>
      {/* <Route path="/" element={<Contact />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/services" element={<Services />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/partnership" element={<Partnership />} />
    </Routes>
  </Router>
);

export default App;
export {Contact, Guides, Services, TermsAndConditions, Partnership };
