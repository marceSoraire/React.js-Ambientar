import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardComponents = ({ precio, producto, modelo, img }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={img} alt="Celulares"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {precio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {modelo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponents;