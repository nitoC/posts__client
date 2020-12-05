
const posts=[];
const update=(data,action)=>{
data.map(p=> p._id===action.payload._id?action.payload:p)
}
const like=(data,action)=>{
    return data.map(p=> {
       return p._id===action.payload._id?action.payload:p
    })
    }
    const deleteData=(data,action)=>{
         return data.filter(p=>p._id!==action.payload._id)
    }
const Reducer= (state=posts,action)=>{
    switch(action.type){
        case "POST":return [...state,action.payload];
        case "LIKE":return  like(state,action);
        case "UPDATE":return update(state,action);
        case "DELETE":return deleteData(state,action)
        default:return state;
    }

}
export default Reducer;