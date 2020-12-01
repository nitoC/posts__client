import apiData from "../api/api";

 const post=(createData)=>async (dispatch,getState)=>{
     console.log('about to')
    try{
        console.log(createData)
        const {data}=await apiData.postData(createData);
        console.log(data)
        dispatch({type:"POST",payload:createData})
           }catch(err){console.log(err.message)}
}

const like=()=>{
    return{
        type:"LIKE"
    }
}
const actions= {

    like,
    post
}
export default actions