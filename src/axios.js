// Lesson 174 - step 1: (CREATING AND USING AXIOS INSTANCES): Using different api URL in an app
// This file is created to test when we have different URL, instead of sticking with the baseURL in the index.js file
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN'; //NOTE: This can be left alone as configuired in the index.js file

export default instance;

/* This axios instance had been tested in the Blog.jsx file to fetch data.
You can test that by commenting out the "import axios from "axios";" and comment on "import axios from '../../axios'"
*/