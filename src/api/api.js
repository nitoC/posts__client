import axios from "axios";

const url ="http://localhost:5000/Posts";
const fetchData=()=>axios.get(url);
const postData=(data)=>axios.post(url,data)
const apiData={fetchData,postData};
export default apiData;
 