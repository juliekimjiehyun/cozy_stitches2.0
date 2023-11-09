import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import handmadeLogo from '../../assets/handmadeLogo.png';
import cottonLogo from '../../assets/cottonLogo.png';

import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                        <h5>LINKS</h5>
                        <ul className='list-unstyled text-start'>
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
                    <Col className='text-start'>
                        <h5>SOCIAL</h5>
                        <ul className='list-unstyled'>
                            <li>
                             <a href="https://facebook.com">FACEBOOK</a>
                            </li>
                            <li>
                                <a href="https://instagram.com">INSTAGRAM</a>
                            </li>
                            <li>
                                <a href="https://pinterest.com">PINTEREST</a>
                            </li>
                            <li>
                                <a href="https://twitter.com">TWITTER</a>
                            </li>
                        </ul>
                        
                    </Col>
                    <Col className='text-start'>
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
                <hr/>
                <Row>
                    <Col className="footerLogos">
                        <img src={handmadeLogo} alt="handmade logo" height="80"/>
                        <img src={cottonLogo} alt="cotton logo" height="80"/>
                    </Col>
                </Row>
                <Row className="footerText">
                    <Col>
                        <a>Privacy Policy   |   </a>
                        <a>     Terms of Use</a>
                    </Col>
                </Row>
                <Row className="footerText">
                    <Col>
                    © COZYSTITCHES | All Rights Reserved
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}
export default Footer;