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
                  <Col key={lineItem.id} sm="6" md="4">
                    <CartItem item={lineItem} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                  </Col>
                ))}
              </Row>
          </Container>
              
        </div>
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