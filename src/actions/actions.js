import { CardContent } from "@material-ui/core";
import apiData from "../api/api";

 const post=(createData)=>async (dispatch,getState)=>{
     console.log('about to')
    try{
        console.log(createData)
        const {data}=await apiData.postData(createData);
        console.log(data._id)
        dispatch({type:"POST",payload:data})
           }catch(err){console.log(err.message)}
}
const update=(updateData,id)=> async(dispatch,getState)=>{
    try{
    const {data}=await apiData.updateData(updateData,id)
    console.log(data)
    dispatch({type:"UPDATE",payload:data})
    }catch(err){
        console.log(err)
    }
}

const deleteAction=(deleteData,id)=> async(dispatch,getState)=>{
    try{
    const {data}= await apiData.deleteData(deleteData,id)
    dispatch({type:"DELETE",payload:data})
    }catch(err){
        CardContent.log(err)
    }

}
const like=(likeData,id)=>async(dispatch,getState)=>{
    try{
        console.log("in like")
        console.log(id)
        const {data}=await apiData.likePost(likeData,id)
        console.log("dispatchinglike")
        dispatch({type:"LIKE",payload:data})
        console.log(data.like)
    }catch(err){
        console.log(err)
    }
}
const actions= {

    like,
    post,
    update,
    deleteAction
}
export default actions