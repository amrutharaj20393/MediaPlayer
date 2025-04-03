import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Videocard from './Videocard';
import { addCategoryApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';

function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setcategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addCategoryStatus, setAddCategoryStatus] = useState({})
  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState({})

  const handleClose = () => {
    setShow(false)
    handleReset()
  };
  const handleShow = () => setShow(true);


  //console.log(categoryName)

  const handleReset = () => {
    setcategoryName("")
  }

  const addNewCategory = async () => {
    if (categoryName) {
      const reqBody = {
        category: categoryName,
        allvideos: []
      }

      const result = await addCategoryApi(reqBody)
      // console.log(result)
      if (result.status >= 200 && result.status < 300) {
        toast.success("Category added successfully")
        handleClose()
        setAddCategoryStatus(result.data)
      }
      else {
        toast.error("Something went wrong")
        handleReset()
      }
    }
    else {
      toast.info("Please add category")
    }
  }

  const getAllCategory = async () => {
    const result = await getAllCategoryApi()
    //console.log(result)
    if (result.status >= 200 && result.status < 300) {
      setAllCategory(result.data)
    }
  }
  //console.log(allCategory)

  const deleteCategory = async (id) => {
    const response = await deleteCategoryApi(id)
    console.log(response)
    if (response.status >= 200 && response.status < 300) {
      setDeleteCategoryStatus(response.data)
    }
  }
  console.log(deleteCategoryStatus)

  const videoOver = (e) => {
    //prevent the reload-to prevent data lose
    e.preventDefault()
  }

  const videoDrop=(e,categoryDetails)=>{
    console.log(e)
    console.log(categoryDetails)
   const videoDetails=JSON.parse(e.dataTransfer.getData("videoDetails")) 
   console.log(videoDetails)

   if(categoryDetails.allvideos.find((item)=>item.id==videoDetails.id)){
    alert("Video already in this category")
   }
   else{
    categoryDetails.allvideos.push(videoDetails)
   }

  }

  useEffect(() => {
    getAllCategory()
  }, [addCategoryStatus, deleteCategoryStatus])


  return (
    <div>
      <h5 className='text-center'>Category</h5>
      <div>
        <Button variant="warning" className='rounded w-100 mt-3' onClick={handleShow}>Add Category</Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='text-warning'>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form className='border rounded p-3'>
              <Form.Group controlId="exampleForm.ControlInput1" className='50'>
                {/* Input and Button in the Same Line */}
                <InputGroup className='m-1 p-2'>
                  <Form.Control value={categoryName} type="text" placeholder="Video caption" className='rounded w-10 ' onChange={(e) => setcategoryName(e.target.value)} />
                </InputGroup>

              </Form.Group>
            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="primary" onClick={addNewCategory} className='bg-warning'>
              Add
            </Button>
          </Modal.Footer>

        </Modal>
        <ToastContainer position='top-center' theme="colored" autoClose={2000} />
      </div>


      {
        allCategory?.length > 0 ?
          allCategory?.map((item, index) => (
            <Form className='border rounded p-2 mt-3' key={index} droppable="true" onDragOver={(e) => videoOver(e)} onDrop={(e)=>videoDrop(e,item)}>
              <div className="container d-flex justify-content-between mt-2">
                <p>{item.category}</p>
                <button onClick={() => deleteCategory(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>

              </div>
              <div>
                 {/* <Videocard />  */}
              </div>
            </Form>)) :
          <p className='text-danger mt-4 text-center'>No Category yet Added</p>
      }


    </div>
  )
}

export default Category