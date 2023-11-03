import React from 'react';
import {Container, Button} from 'reactstrap';
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  
  const EmptyCart = () => (
    <p>You have no items in your shopping cart, 
        <Link to="/">start adding some!</Link>
        </p>
  );

  const FilledCart = () => (
    <>
        <Container>
            {cart.line_items.map((lineItem) => (
                <Container key={lineItem.id}>
                    <CartItem item={lineItem} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                </Container>
            ))}
        </Container>
        <div>
            <p>
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </p>
            <Button onClick={handleEmptyCart}>
                Empty Cart
            </Button>
            <Button>
                Checkout
            </Button>
        </div>
    </>
  )
  
if(!cart.line_items) return "Loading...";

  return (
    <Container>
        <h1>Your Shopping Cart</h1>
       {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart;