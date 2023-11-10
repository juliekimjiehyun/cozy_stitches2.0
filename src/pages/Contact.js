import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton, faCommentDots, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import './pagesStyles.css';

const Contact = () => {
    useEffect(() => {
        document.body.classList.add('contact-page');
        return () => {
            document.body.classList.remove('contact-page');
        };
    }, []);


    return (
        <div className="contactPage">
        <Container>
            <Row>
                <Col>
                    <h1>Contact</h1>
                </Col>
            </Row>
            <Row className='m-5 contactCards'>
                <Col md="4" className="mb-5">
                    <Card className='bg-transparent text-light text-center' style={{ border: 'none' }}>
                        <FontAwesomeIcon icon={faMobileScreenButton} className='fa-5x icons-with-shadow' />
                        <CardBody>
                            <CardTitle>
                                PHONE
                            </CardTitle>
                            <Button className='bg-light border-light text-dark' role='button'
                                href='tel:+13101234567'>
                                1.310.123.4567
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" className="mb-5">
                    <Card className='bg-transparent text-light text-center' style={{ border: 'none' }}>
                        <FontAwesomeIcon icon={faCommentDots} className='fa-5x icons-with-shadow' />
                        <CardBody>
                            <CardTitle>
                                LIVE CHAT
                            </CardTitle>
                            <Button className='bg-light border-light text-dark'>
                                Start Chat
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" className="mb-5">
                    <Card className='bg-transparent text-light text-center' style={{ border: 'none' }}>
                        <FontAwesomeIcon icon={faEnvelope} className='fa-5x icons-with-shadow' />
                        <CardBody>
                            <CardTitle>
                                EMAIL INQUIRY
                            </CardTitle>
                            <Button className='bg-light border-light text-dark' role='button'
                                href='mailto:notreal@notreal.co' >
                                Send email
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>
        </div>
    );
};

export default Contact;