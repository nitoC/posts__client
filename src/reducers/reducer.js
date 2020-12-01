
const posts=[];


const Reducer= (state=posts,action)=>{
    switch(action.type){
        case "POST":return [...state,action.payload];
        case "LIKE":return  [...state,"like"];
        default:return state;
    }

}
export default Reducer;