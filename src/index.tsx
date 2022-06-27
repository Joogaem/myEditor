import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './modules';
import './index.css';
import App from './App';


const store = createStore(rootReducer, 
  //composeWithDevTools(applyMiddleware(ReduxThunk, logger)) 
);

const mainElement = document.createElement('div');
mainElement.className = "main";
document.body.appendChild(mainElement);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
mainElement
); 