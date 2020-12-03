import axios from "axios";

const url ="http://localhost:5000/Posts";
const fetchData=()=>axios.get(url);
const postData=(data)=>axios.post(url,data)
const updateData=(data,id)=>axios.patch(url,{...data,id})
const deleteData=(data,id)=>axios.delete(url,{...data,id})
const likePost=(data,id)=>axios.patch(url,{...data,id})
const apiData={fetchData,postData,updateData,deleteData,likePost};
export default apiData;
 