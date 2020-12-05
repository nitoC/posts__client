import { CardContent } from "@material-ui/core";
import apiData from "../api/api";

 const post=(createData)=>async (dispatch,getState)=>{
    try{
        const {data}=await apiData.postData(createData);
        dispatch({type:"POST",payload:data})
           }catch(err){console.log(err.message)}
}
const update=(data,id)=> async(dispatch,getState)=>{
    try{
    const {data}=await apiData.updateData(data,id)
    dispatch({type:"UPDATE",payload:data})
    }catch(err){
        console.log(err)
    }
}

const deleteAction=(id)=> async(dispatch,getState)=>{
    try{
    const {data}= await apiData.deleteData(id)
    dispatch({type:"DELETE",payload:data})
    }catch(err){
        CardContent.log(err)
    }

}
const like=(id)=>async(dispatch,getState)=>{
    try{
        const {data}=await apiData.likePost(id)
        dispatch({type:"LIKE",payload:data})
        
    }catch(err){
        console.log(err)
    };
}
const actions= {

    like,
    post,
    update,
    deleteAction
}
export default actions