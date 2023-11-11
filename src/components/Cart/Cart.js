import React from 'react';
import {Container, Button, Row, Col} from 'reactstrap';
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom';
import './styles.css'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  
  const EmptyCart = () => (
    <p>You have no items in your shopping cart, 
        <Link to="/">start adding some!</Link>
        </p>
  );

  const FilledCart = () => (
    <>
        <div>
          <Container>
              <Row className="cartItems">
                {cart.line_items.map((lineItem) => (
                  <Col md="6" lg="4" xl="3" className="m-2"  key={lineItem.id}>
                    <CartItem item={lineItem} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                  </Col>
                ))}
              </Row>
          </Container>
              
        </div>
        <div>
            <h4>
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </h4>
            <Button className="checkoutButtons" onClick={handleEmptyCart}>
                Empty Cart
            </Button>
            <Button className="checkoutButtons">
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