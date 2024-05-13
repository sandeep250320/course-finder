import axios from "axios";
import dummydata from './Sdata.jsx'

const instance = axios.create({
  baseURL: dummydata,
});

export default instance;
