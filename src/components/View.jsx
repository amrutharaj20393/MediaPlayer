import React, { useEffect, useState } from 'react'
import Videocard from '../components/Videocard'
import { allVideosApi } from '../services/allApi'

function View({addVideoStatus}) {

  const [allVideo, setAllVideo] = useState([])

  const [videoDeleted,setvideoDeleted]=useState([{}])

  const getAllVideo = async () => {
    const result = await allVideosApi()
    //console.log(result)

    if (result.status >= 200 && result.status < 300) {
      setAllVideo(result.data)
    }
  }//it is a side effect((side effect means when a fun  that is aganist the pure function(a fun call depend on arguments) eg:Api calls) so handled by useeffect

  //console.log(allVideo)

  useEffect(() => {
    getAllVideo()
  }, [addVideoStatus,videoDeleted])//will be called when page loaded and state value changes

  return (
    <>
      <h5>All Videos</h5>
      <div className="container-fluid mt-5">
        <div className="row">
          {
            allVideo?.length > 0 ?

             allVideo?.map((item,index)=>(<div className="col-md-3 p-2" key={index}>
              <Videocard  video={item} setvideoDeleted={setvideoDeleted}/>
            </div>))  :

              <div className='d-flex justify-content-center align-items-center flex-column'>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png" alt="" />
                <h5 className='text-danger'>No video to show</h5>
              </div>
          }


        </div>
      </div>
    </>
  )
}

export default View