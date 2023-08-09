import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store/store";
import axios from 'axios';
// import './index.css';
import App from './App';

// axios.defaults.baseURL = 'http://localhost:3001'

axios.defaults.baseURL = 'https://backendvideogames.up.railway.app'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
     <BrowserRouter>
       <App />
     </BrowserRouter>
 </Provider>
);


