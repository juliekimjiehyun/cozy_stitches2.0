import React from 'react'
import {Card, CardColumns, CardBody, CardText, CardTitle, CardSubtitle, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBagShopping } from '@fortawesome/free-solid-svg-icons'


const Product = ({product, onAddToCart}) => {
  
  console.log(product);

    return (
    <Card >
        <img
            alt={product.is.name}
            src={product.image.url}
        />
        <CardBody>
            <div >
                <CardTitle>
                    {product.name}
                </CardTitle>
                <CardSubtitle>
                    {product.price.formatted_with_symbol}
                </CardSubtitle>
                <CardText dangerouslySetInnerHTML={{ __html: product.description }}>
                </CardText>
                <Button onClick={() => onAddToCart(product.id, 1)}>
                    <FontAwesomeIcon icon={faBagShopping}/>
                </Button>
            </div>
        </CardBody>
    </Card>
  )
}

export default Product