import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <Container fluid>
        <Row  className='mt-5 p-md-5 p-3 d-flex justify-content-center align-items-center'>
          <Col md={4} className='text-warning mb-3'>
          <FontAwesomeIcon icon={faVideo} beat className='me-3 ms-2 fs-4 '  /><span className='fs-4  '>Media Player</span>

          <p className='p-2 text-white'  style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut repudiandae voluptatum officiis ex eveniet at enim odit distinctio voluptas, tempora sapiente molestias totam. Laboriosam ab nihil cupiditate molestiae, nisi harum!

          </p>
          </Col>
          <Col md={2} className="p-3 ">
          <h3 className="fs-4">Links</h3>
          <Link to={'/'}><p className='fs-6 mt-2 mb-3'>Landing page</p></Link>
          <Link to={'/home'}><p className='fs-6 mt-2 mb-3 '>Home Page</p></Link>
          <Link to={'/watchhistory'}><p className='fs-6 mt-2 mb-3'>Watch History</p></Link>
          </Col>
          <Col md={2} className="p-3">
         <h3 className='fs-4 '>Guides</h3>
          <h5 className='fs-6 mt-2 mb-3'>React</h5>
          <h5 className='fs-6 mt-2 mb-3'>React Bootstrap</h5>
          <h5 className='fs-6 mt-2 mb-3'>Bootswatch</h5>
          </Col>
          <Col  md={4} className="p-3">
          <h3 className=' fs-4'>Contact Us</h3>
          <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                {/* Input and Button in the Same Line */}
                <InputGroup className='gap-2 m-2'>
                  <Form.Control type="email" placeholder="name@example.com" className='rounded'/>
                  <Button variant="warning" className='rounded'>Subscribe</Button>
                </InputGroup>
              </Form.Group>
            </Form>
            <FontAwesomeIcon icon={faCamera} className='p-3 fs-5' />
            <FontAwesomeIcon icon={faFacebook}  className='p-3 fs-5' />
            <FontAwesomeIcon icon={faSquareInstagram} className='p-3 fs-5'  />
            <FontAwesomeIcon icon={faLinkedin} className='p-3 fs-5' />
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Footer