import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardDetail= ( {data} ) => {
  return (
    <Card sx={{ height: 300,}}>
      <CardContent>
      <Typography gutterBottom variant="h3" component="div">
            {data.categoria}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
            {data.modelo}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
            {`$${data.precio}`}
        </Typography>
        <Typography gutterBottom variant="body1" color="text.secondary">
            {`Fabricado: ${data.fabricado}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {`Stock disponible: ${data.stock}`}
        </Typography>
      </CardContent>
    </Card>
  );
}
 export default CardDetail;