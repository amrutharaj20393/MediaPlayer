import axios from "axios";

//axios configuration part

export const commonApi=async(httpMethod,url,reqBody)=>{

   const reqConfig ={
        method: httpMethod,
        url,//key and value are same url:url
        data:reqBody,
        headers:{"Content-Type":"application/json"}/*there is no uploaded content from the system(type of data)*/
       
        }
        return await axios(reqConfig).then((res)=>{
            return res
        }).catch((err)=>{
            return err
        })//request to the url.it is  promise based.it will send request to server using axios api method and done the logical operation(post) and send response back to front end
}