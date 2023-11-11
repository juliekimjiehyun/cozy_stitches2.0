import { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductCarousel from '../components/Products/Carousel/Carousel';
import customOrderLogo from '../assets/customOrderLogo.png';
import flashSaleLogo from '../assets/flashSaleLogo.png';
import {Link} from 'react-router-dom';
import './pagesStyles.css';

const HomePage = () => {
    useEffect(() => {
        document.body.classList.add('home-page');
        return () => {
            document.body.classList.remove('home-page');
        };
    }, []);

    return (
        <div className='homePage'>
                    <Container>
                    <h1 className='homeTitle'>Cozy Stitches</h1>
                    <ProductCarousel className='carousel'/>
                        <Row>
                            <Col sm="6">
                                <Link to="/products">
                                    <img src={flashSaleLogo} width='90%' className='my-5 logo' />
                                </Link>
                            </Col>
                            <Col sm="6">
                                <Link to="/contact">
                                    <img src={customOrderLogo} width='90%' className='my-5 logo' />
                                </Link>
                            </Col>
                        </Row>
                    </Container>
        </div>
    )
};

export default HomePage;