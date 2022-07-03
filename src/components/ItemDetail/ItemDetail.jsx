import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const ItemDetail= ( {data} ) => {

  const [carrito, setCarrito, addItem] = useContext(CartContext);
  let {id, img, precio, modelo, stock} = data;

  const onAdd =(counter)=> {
    addItem(data, counter)
  }
  return (
    <Card sx={{ height: 470}}>
      <CardContent>
      <Typography gutterBottom variant="h3" component="div">
            {data.categoria}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
            {modelo}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
            {`$${precio}`}
        </Typography>
        <Typography gutterBottom variant="body1" color="text.secondary">
            {`Fabricado: ${data.fabricado}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {`Stock disponible: ${stock}`}
        </Typography>
        <ItemCount data={data} onAdd={onAdd}/>
      </CardContent>
    </Card>
  );
}
 export default ItemDetail;