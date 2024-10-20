// App.js

import Slider from 'react-slick';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const cardData = [
    { id: 1, title: 'Task Management', image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
        description: 'Bring tasks together' },
    { id: 2, title: 'Barinstroming', image: 'https://images.pexels.com/photos/7491155/pexels-photo-7491155.jpeg',
        description: 'Unleash the team productivity' },
    { id: 3, title: 'Onboarding', image: 'https://images.pexels.com/photos/7213504/pexels-photo-7213504.jpeg',
        description: `Snap with Crystask visual layout of to-do's` },
    { id: 4, title: 'Meetings', image: "https://images.pexels.com/photos/6476186/pexels-photo-6476186.jpeg",
        description: 'Empower your team meetings' },
];

function CardSlider() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        gap: 40,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box sx={{  margin: '50px', padding: '20px'}}>
            <Slider {...sliderSettings} >
                {cardData.map((card) => (
                    <Box key={card.id} px={2}>
                        <Card>
                            <CardMedia component="img" height="140" image={card.image} alt={card.title} />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default CardSlider;
