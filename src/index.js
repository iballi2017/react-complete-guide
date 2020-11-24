import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


// Lesson 173 - step 1: Using base URL
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// Lesson 173 - step 1: Using default header
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';



// Lesson 171 - step 1: Handling requests
axios.interceptors.request.use(request => {
    console.log(request);
    // NOTE: You can edit the request to your taste before you return it. For example, you can add some header configuration
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

// Lesson 171 - step 2:  Handling responses
axios.interceptors.response.use(response => {
    console.log(response);
    // NOTE: You can edit the response to your taste before you return it. For example, you can add some header configuration
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();