import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { getAllVideoHistory, deleteVideoHistory } from '../services/allApi'

function Watchhistory() {
  const [videoHistory, setVideoHistory] = useState([])
  const [deleteStatus,setDeleteStatus]=useState({})

  const getAllHistory = async () => {
    const result = await getAllVideoHistory()
    console.log(result)
    if (result.status >= 200 && result.status < 300) {
      setVideoHistory(result.data)
    }
  }

  //console.log(videoHistory)

  const deleteVideo = async (id) => {
    const result = await deleteVideoHistory(id)
   //console.log(result)
   if(result.status>=200 &&result.status<300 )
   {
    setDeleteStatus(result.data)
   }
  }

  useEffect(() => {
    getAllHistory()
  }, [deleteStatus])
  return (
    <>
      <div className='container d-flex justify-content-between align-items-center mt-5'>
        <h5>Watch history</h5>
        <Link to={'/home'} style={{ textDecoration: 'none' }}><h5 className='d-flex justify-content-between align-items-center '> <span className='d-none d-md-flex fs-5 me-3'>Back home</span> <FontAwesomeIcon icon={faHouse} /></h5></Link>

      </div>
      <div className='container mt-5 table-responsive'>
        {
          videoHistory?.length > 0 ? <table className='table table-bordered'>

            <thead>
              <tr>
                <th className='p-2 text-center'>Sl.No</th>
                <th className='p-2 text-center'>Caption</th>
                <th className='p-2 text-center'>URL</th>
                <th className='p-2 text-center'>Timestamp</th>
                <th className='p-2 text-center'>Action</th>
              </tr>

            </thead>
            <tbody>
              {
                videoHistory?.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item?.caption}</td>
                    <td><Link to={`${item?.url}`} target='_blank' >{item?.url}</Link></td>
                    <td>{item.time}</td>
                    <td><button className='btn btn-danger' onClick={() => deleteVideo(item?.id)}>Delete</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table> :
            <h4 className='text-danger text-center'>History cleared</h4>
        }
      </div>

    </>
  )
}

export default Watchhistory