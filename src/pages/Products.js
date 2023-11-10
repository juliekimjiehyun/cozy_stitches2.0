import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Product from '../components/Products/Product/Product';
import './pagesStyles.css';

const Products = ({products, onAddToCart}) => {
    return (
        <div className="productPage">
            <Container>
                <h1>Amigurumi</h1>
                <Row className="mb-5">{
                    products.map(product => {
                        return (
                            <Col sm="6" md="4">
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
        </div>
    );
}

export default Products;