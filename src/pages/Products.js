import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Product from '../components/Products/Product/Product';


const Products = ({products, onAddToCart}) => {
        return (
<Container>
    <h1>Amigurumi</h1>
    <Row className="ms-auto">{
        products.map(product => {
            return (
                <Col md='5' lg='3' xl='2'>
                    <Product 
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    />
                </Col>
            )
        })}
    </Row>
</Container>

    );
}

export default Products;