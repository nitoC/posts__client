import axios from "axios";

const url ="http://localhost:5000/Posts";
const fetchData=()=>axios.get(url);
const postData=(data)=>axios.post(url,data)
const updateData=(data,id)=>axios.patch(`${url}/${id}`,data)
const deleteData=(id)=>axios.delete(`${url}/${id}`)
const likePost=(id)=>axios.patch(`${url}/${id}`)
const apiData={fetchData,postData,updateData,deleteData,likePost};
export default apiData;
 