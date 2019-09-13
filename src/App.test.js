import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from './App';
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});