import React from 'react';
import {
    Button, 
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle,
} from 'reactstrap';
import './styles.css'

const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
  return (
    <Card className="cartCard">
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
                <Button className="cartItemButton m-3" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                {item.quantity}
                <Button className="cartItemButton m-3" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                <Button className="cartItemButton m-2" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
            </div>
        </CardBody>
    </Card>
  )
}

export default CartItem;