
// import {Grid} from '@mui/material/Grid2';
import { Box, Typography, Container, Link, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const HomeFooter = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#265DB6',
                color: 'white',
                padding: '40px 0',  //top-bottom left-right
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>

                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            CrysTask
                        </Typography>
                        <Typography variant="body2">
                            Where good ideas go through
                        </Typography>
                    </Grid>


                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                Home
                            </Link>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                About Us
                            </Link>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                Services
                            </Link>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                Contact
                            </Link>
                        </Box>
                    </Grid>


                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            <IconButton aria-label="facebook" href="https://facebook.com" target="_blank" sx={{ color: 'white' }}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton aria-label="twitter" href="https://twitter.com" target="_blank" sx={{ color: 'white' }}>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton aria-label="linkedin" href="https://linkedin.com" target="_blank" sx={{ color: 'white' }}>
                                <LinkedInIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>


                <Box textAlign="center" marginTop={4}>
                    <Typography variant="body2" color="failure">
                        &copy; {new Date().getFullYear()} CrysTask. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default HomeFooter;
