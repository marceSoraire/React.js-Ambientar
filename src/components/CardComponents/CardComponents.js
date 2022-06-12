import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MediaCard = ({ precio, producto, modelo, img, agregar, sacar, contador}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" image={img} alt="green iguana"/>
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
      <CardActions>
        <Button onClick={agregar}>Agregar</Button>
        <Typography variant="body2" color="text.secondary">
          {contador}
        </Typography>
        <Button onClick={sacar}>Quitar</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
