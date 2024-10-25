import { Paper, Typography, Container, Box } from '@mui/material';
import logo from '../../../public/logo_crystask.png';
import Stack from '@mui/material/Stack';
const Jumbotron = () => {
    return (
        <Paper
            elevation={3}
            sx={{
                padding: '50px 20px',
                background: 'linear-gradient(135deg, #2196F3 30%, #21CBF3 90%)',
                textAlign: 'center',
                color: '#fff',
            }}
        >
            <Container>
                <Stack
                    sx={{
                        justifyContent: 'center',
                        marginBottom: '20px',
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        style={{ width: '150px', height: 'auto' }}
                    />
                </Stack>

                {/* Main content */}
                <Box>
                    <Typography variant="h2" component="h1" gutterBottom>
                        Welcome to Crystask!
                    </Typography>
                    <Typography variant="h5" component="p" gutterBottom>
                        Project management tool for organizing and
                        Where tasks done clearly.
                    </Typography>
                </Box>
            </Container>
        </Paper>
    );
};

export default Jumbotron;
