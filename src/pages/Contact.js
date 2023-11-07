import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton, faCommentDots, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';


const Contact = () => {
    useEffect(() => {
        document.body.classList.add('contact-page');
        return () => {
            document.body.classList.remove('contact-page');
        };
    }, []);


    return (
        <Container>
            <Row>
                <Col>
                    <h1>Contact</h1>
                </Col>
            </Row>
            <Row className='m-5'>
                <Col>
                    <Card className='bg-transparent text-light text-center p-3 m-5' style={{ border: 'none' }}>
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
                <Col>
                    <Card className='bg-transparent text-light text-center p-3 m-5' style={{ border: 'none' }}>
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
                <Col>
                    <Card className='bg-transparent text-light text-center p-3 m-5' style={{ border: 'none' }}>
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
    );
};

export default Contact;