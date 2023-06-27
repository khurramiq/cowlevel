import axios from 'axios';
console.log(process.env.REACT_APP_BASE_URL);
// export const fbaseUrl = "http://localhost:3000";
export const fbaseUrl = 'https://lmss.netlify.app';
export const baseUrl = process.env.REACT_APP_BASE_URL;
// export const baseUrl = "https://customer-repo.herokuapp.com";
export default axios.create({
  baseURL: `${baseUrl}/api`,
});
