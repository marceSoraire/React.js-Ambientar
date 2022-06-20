import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ApiComponent = ({ tool }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 4 }}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height='300'
                    image={tool.avatar_url}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {tool.login}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {tool.id}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ApiComponent;