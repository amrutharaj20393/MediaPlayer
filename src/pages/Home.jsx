import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'


function Home() {

const [addVideoStatus,setAddVideoStatus]=useState([{}])

  return (
    <>
    <div className="container d-flex justify-content-between mt-4">
    <Add setAddVideoStatus={setAddVideoStatus}/>
    <Link to={'/watchhistory'} style={{textDecoration:'none'}}>
    <h5 className='d-flex justify-content-center align-items-center'><span className='fs-5 d-none d-md-flex me-2'>Watch History </span><FontAwesomeIcon icon={faClockRotateLeft} /></h5></Link>
    
    </div>
    <div className="container-fluid p-3 mt-5">

      <div className="row">
        <div className="col-md-9">
          <View addVideoStatus={addVideoStatus}/>
        </div>
        <div className="col-md-3">
          <Category/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home