import React, {useState} from 'react'
import {
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter
    } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import './styles.css'


const Product = ({product, onAddToCart, args}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    console.log(product);

    return (
<div>
            <Card className="productCard mt-4">
            <img
                alt={product.is.name}
                src={product.image.url}
                onClick={toggle}
            />
            <CardBody>
                <div >
                    <CardTitle>
                        {product.name}
                    </CardTitle>
                    <CardSubtitle>
                        {product.price.formatted_with_symbol}
                    </CardSubtitle>
                    <Button onClick={() => onAddToCart(product.id, 1)} className="cartButton">
                        <FontAwesomeIcon icon={faBagShopping}/>
                    </Button>
                </div>
            </CardBody>
            </Card>
    <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader className="modalTitle" toggle={toggle}></ModalHeader>
        <ModalBody className="modalImage">
            <img
                alt={product.is.name}
                src={product.image.url}
            />
        </ModalBody>
        <ModalBody className="modalBody" dangerouslySetInnerHTML={{ __html: product.description }}>
        </ModalBody>
        <ModalFooter className="modalPrice">
            {product.price.formatted_with_symbol}
        </ModalFooter>
        <ModalFooter className="modalButtons">
          <Button color="warning" onClick={toggle}>
            Add to Cart
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
</div>
    
  )
}

export default Product