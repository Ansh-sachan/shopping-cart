import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './style.css';
import rootReducer from './store/store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
let store = createStore(rootReducer);
let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
