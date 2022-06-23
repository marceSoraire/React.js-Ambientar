import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MediaCard = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345, margin:4}}>
      <CardMedia component="img" image={data.img} alt="green iguana"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.producto}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.precio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.modelo}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MediaCard;

// stock={8} min={0}