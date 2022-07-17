import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../CartContext/CartContext';

const ItemDetail= ( {data} ) => {

  const  { addItem } = useContext(CartContext);
  const {id, img, precio, modelo,categoria, fabricado, stock} = data;

  const onAdd =(cant)=> addItem( data, cant )
  
  return (
    <Card sx={{ height: 465}}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
            {categoria}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
            {modelo}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
            {`$${precio}`}
        </Typography>
        <Typography gutterBottom variant="body1" color="text.secondary">
            {`Fabricado: ${fabricado}`}
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