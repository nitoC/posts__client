import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,compose} from "redux";
import {Provider,useDispatch} from "react-redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";




const store=createStore(reducer,compose(applyMiddleware(thunk)));
  
ReactDOM.render(
  <Provider store={store}>
    <App/>
    
    </Provider>,
  document.getElementById('root')
);


