import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import handmadeLogo from '../../assets/handmadeLogo.png';
import cottonLogo from '../../assets/cottonLogo.png';

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>LINKS</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>HOME</Link>
                            </li>
                            <li>
                                <Link to='/about'>ABOUT</Link>
                            </li>
                            <li>
                                <Link to='/products'>PRODUCTS</Link>
                            </li>
                            <li>
                                <Link to='/contact'>CONTACT</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                        <h5>SOCIAL</h5>
                       <p>FACEBOOK</p>
                       <p>INSTAGRAM</p>
                       <p>PINTEREST</p>
                       <p>TWITTER</p>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+13101234567'
                        >
                            <i className='fa fa-phone' /> 1.310.123.4567
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> COZYSTITCHES@GMAIL.COM
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <img src={handmadeLogo} alt="handmade logo"/>
                    </Col>
                    <Col>
                    <img src={cottonLogo} alt="cotton logo"/>
                    </Col>
                </Row>
                <Row>
                    <Col>Privacy Policy</Col>
                    <Col>Terms of Use</Col>
                </Row>
                <Row>
                    <Col>
                    © COZYSTITCHES | All Rights Reserved
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}

export default Footer;