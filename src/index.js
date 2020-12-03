import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,compose} from "redux";
import {Provider,useDispatch} from "react-redux";
import reducer from "./reducers/reducer";
import actions from "./actions/actions";
import thunk from "redux-thunk";
import {useEffect} from "react";
import {useSelector} from "react-redux"


const middleware=store=>next=>action=>{
  console.log(action)
  next(action)
}
const store=createStore(reducer,compose(applyMiddleware(thunk,middleware)));

console.log(reducer)
function Npp() {
  const dispatch=useDispatch();
  useSelector(state=>console.log(state))
  return(
    <>
    <h1 onClick={()=>dispatch(actions.post())}></h1>
    {store.subscribe(()=>console.log(store.getState()))}
    </>
  )
}

  
ReactDOM.render(
  <Provider store={store}>
    <App/>
    
    </Provider>,
  document.getElementById('root')
);


