import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <>
            <Container className='mt-5 d-flex justify-content-center align-items-center '>
                <Row className='mt-4 w-100'>
                    <Col md={6} ><h6 style={{ fontSize: '25px' }}>Welocme to <span className='text-warning'>media player</span></h6>

                        <p className='mt-4' style={{ fontSize: '15px', textAlign: 'justify' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, possimus atque est, sunt aliquid labore tempore deleniti reiciendis voluptatibus accusantium eos distinctio sed numquam. Porro dignissimos quo nulla molestiae fugit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, possimus atque est, sunt aliquid labore tempore deleniti reiciendis voluptatibus accusantium eos distinctio sed numquam. Porro dignissimos quo nulla molestiae fugit.</p>
                        <Link to='/home'><button className='btn btn-warning mt-4'>Get Started</button></Link>
                    </Col>

                    <Col md={6} className='d-flex justify-content-center'>
                        <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" className='w-50 mt-5' /></Col>

                </Row>
            </Container>

            <Container className='mt-5 d-flex justify-content-center align-items-center ' >

                <Row className='w-100'>
                    <Col md={1}></Col>
                    <Col md={10} className='d-flex justify-content-center align-items-center flex-column p-md-5 p-3'>
                        <h4 className='mt-5'>Features</h4>
                        <Row className='mt-5'>
                            <Col md={4} className='p-2'>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src="https://i.gifer.com/Up2T.gif" height={'300px'} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} className='p-2'>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src="https://i.gifer.com/Up2T.gif" height={'300px'} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} className='p-2'>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src="https://i.gifer.com/Up2T.gif" height={'300px'} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>


                    <Col md={1}></Col>
                </Row>
            </Container>

            <Container className='p-md-5 p-4' >
                <Row className='mt-5 p-md-5 p-3 d-flex justify-content-center align-items-center border border-secondary rounded'>
                    <Col md={6}>
                        <h3 className='text-warning'>Simple fast and Powerful</h3>
                        <p className='mt-4' style={{ textAlign: 'justify', fontSize: '15px' }}><span className='fs-4' >Play Everything</span>:Presenting the melodious video song "Hey Minnale" from 'Amaran' starring Sivakarthikeyan, Sai Pallavi and others. Directed by Rajkumar Periasamy. A G V Prakash Musical!</p>
                        <p className='mt-4' style={{ textAlign: 'justify', fontSize: '15px' }}><span className='fs-4'>Play Everything</span>:Presenting the melodious video song "Hey Minnale" from 'Amaran' starring Sivakarthikeyan, Sai Pallavi and others. Directed by Rajkumar Periasamy. A G V Prakash Musical!</p>
                        <p className='mt-4' style={{ textAlign: 'justify', fontSize: '15px' }}><span className='fs-4'>Play Everything</span>:Presenting the melodious video song "Hey Minnale" from 'Amaran' starring Sivakarthikeyan, Sai Pallavi and others. Directed by Rajkumar Periasamy. A G V Prakash Musical!</p>
                    </Col>

                    <Col md={6}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Rn0omo-x9uw?si=k65ARypZlNUDwkGS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </Col>
                </Row>
            </Container>

            

        </>
    )
}

export default Landing
