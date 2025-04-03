import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { videoAddApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';


function Add({setAddVideoStatus}) {

  const [videoDetails, setvideoDetails] = useState({
    caption: "",
    image: "",
    embedLink: ""
  })

  //console.log(videoDetails)

  const handleReset = () => {
    setvideoDetails({
      caption: "",
      image: "",
      embedLink: ""
    })
  }

  const handleUpload = async () => {
    const { caption, image, embedLink } = videoDetails//destructrue of states 
    if (!caption || !image || !embedLink) {
      alert('Please fill the field completely')
    }
    else {
      //api
      //https://youtu.be/HZrYlXuecRg?si=aOq3NcYKuUoxiarT

      if (embedLink.startsWith('https://youtu.be')) {
        let link = `https://www.youtube.com/embed/${embedLink.slice(17, 28)}`
        console.log(link)

        const result = await videoAddApi({ caption, image, embedLink: link })//api fun videoAddApi called with argument reqbody.go to allApi file 
        console.log(result)
          if(result.status>=200 && result.status<300)
          {
            toast.success("Video added sucessfully")
            handleClose()
            setAddVideoStatus(result.data)
          }
          else{
            toast.error("Something went wrong")
            handleReset()
          }

      }
      //https://www.youtube.com/watch?v=HZrYlXuecRg
      else {
        let link = `https://www.youtube.com/embed/${embedLink.slice(-11)}`
        console.log(link)

        const result = await videoAddApi({ caption, image, embedLink: link })//api fun videoAddApi called with argument reqbody.go to allApi file 
        console.log(result)

        if(result.status>=200 && result.status<300)
          {
            toast.success("Video added sucessfully")
            handleClose()
            setAddVideoStatus(result.data)
          }
          else{
            toast.error("Something went wrong")
            handleReset()
          }
      }



    }
  }

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    handleReset()
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <h5 className='d-flex justify-content-center align-items-center'>
        <span className='fs-5 d-none d-md-flex me-2'>Upload New Video </span><FontAwesomeIcon icon={faCloudArrowUp} className='ms-3' onClick={handleShow} /></h5>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFileArrowUp} className='me-3 ' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <Form className='border rounded p-3'>
            <Form.Group controlId="exampleForm.ControlInput1" className='50'>
              {/* Input and Button in the Same Line */}
              <InputGroup className='m-1 p-2'>
                <Form.Control type="text" value={videoDetails.caption} placeholder="Video caption" className='rounded w-10' onChange={(e) => setvideoDetails({ ...videoDetails, caption: e.target.value })} />
              </InputGroup>
              <InputGroup className='m-1 p-2'>
                <Form.Control type="text" value={videoDetails.image} placeholder="Video Image" className='rounded ' onChange={(e) => setvideoDetails({ ...videoDetails, image: e.target.value })} />
              </InputGroup>
              <InputGroup className='m-1 p-2'>
                <Form.Control type="text" value={videoDetails.embedLink} placeholder="Video url" className='rounded ' onChange={(e) => setvideoDetails({ ...videoDetails, embedLink: e.target.value })} />
              </InputGroup>
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="primary" onClick={handleUpload} className='bg-warning'>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme="colored" autoClose={2000} />
    </>
  )
}

export default Add