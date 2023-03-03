import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Card.css';

export const CardItem = ({item,width,height,children}) => {
  
  return (
    <div>
     <Card sx={{ maxWidth: {width}}}  className="cardContainer" >
        <CardActionArea>
          <CardMedia
            component="img"
            height= {height}
            image={item.thumbnail}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {item.last_price} ETH
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stock: {item.stock}
            </Typography>
            {item.quantity == undefined ? '' :   <Typography variant="body2" color="text.secondary">
              quantity: {item.quantity} 
            </Typography>}
          </CardContent>
        </CardActionArea>
        {children}
      </Card>
    </div>
  )
}
