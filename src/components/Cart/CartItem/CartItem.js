import React from 'react';
import {
    Button, 
    Card, 
    CardBody, 
    CardText, 
    CardTitle, 
    CardSubtitle,
} from 'reactstrap';


const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
  return (
    <Card >
        <img
            alt={item.name}
            src={item.image.url}
        />
        <CardBody>
            <div >
                <CardTitle>
                    {item.name}
                </CardTitle>
                <CardSubtitle>
                    {item.line_total.formatted_with_symbol}
                </CardSubtitle>
                <Button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                <CardText>{item.quantity}</CardText>
                <Button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                <Button onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
            </div>
        </CardBody>
    </Card>
  )
}

export default CartItem;