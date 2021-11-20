import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SearchContextProvider } from './components/searchContext';
import {Provider} from "react-redux"
import store from "./store";


ReactDOM.render(
    <SearchContextProvider>
      <Provider store={store}>
      <App />
      </Provider>
    </SearchContextProvider>,
  document.getElementById('root')
);
