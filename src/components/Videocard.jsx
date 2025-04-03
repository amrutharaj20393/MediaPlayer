import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { deleteVideoApi } from '../services/allApi';

import { addVideoHistoryApi } from '../services/allApi';

function Videocard({ video, setvideoDeleted }) {

  //console.log(video) object destructuring 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const addVideoHistory = async () => {
    let caption = video?.caption
    let url = video?.embedLink
    const time = new Date()
    const result = new Intl.DateTimeFormat("en-GB", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: 'numeric', second: '2-digit' }).format(time)

    console.log(result)

    const response = await addVideoHistoryApi({ caption, url, time: result })
    console.log(response)


  }
  const handleShow = () => {
    setShow(true);
    addVideoHistory()
  }



  const deleteVideo = async (id) => {
    const result = await deleteVideoApi(id)
    console.log(result)

    if (result.status >= 200 && result.status < 300) {
      setvideoDeleted(result.data)
    }
  }

  const videoDrag = (e, video) => {
    console.log(e)
    console.log(video)
//dataTransfer()method is used to transfer data to a component.setData()has 2 argument both should be string.
    e.dataTransfer.setData("videoDetails", JSON.stringify(video))//data send to category
  }

  return (
    <>
      <Card style={{ width: '100%' }} className='mt-3' draggable onDragStart={(e) => videoDrag(e, video)}>
        <Card.Img variant="top" src={video?.image} style={{ height: '300px' }} onClick={handleShow} />
        <Card.Body className='d-flex justify-content-between align-items-center'>
          <Card.Text className='mt-3'>{video?.caption}</Card.Text>
          <Button variant="danger" onClick={() => deleteVideo(video?.id)}><FontAwesomeIcon icon={faTrash} /></Button>

        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="487" src={`${video?.embedLink}?autoplay=1`} title="Vazhithunaiye Video Song | Dragon | Pradeep Ranganathan, Kayadu | Ashwath Marimuthu | Leon James" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default Videocard