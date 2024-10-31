import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import "./DetallePage.css";

const CharCard = ({ name, images }) => {
  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            component="img"
            image={images[0]}
            alt="green iguana"
          />
          <CardContent sx={{ flex: '1 0 auto' }} colors='red'>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default CharCard;