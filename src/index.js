import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById("root"));

serviceWorker.unregister();
