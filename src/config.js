module.exports = {
  baseUrl:
  process.env.NODE_ENV === "development"
    ? 'http://localhost:8000/api'
    : "https://jamupjammer.herokuapp.com/api",
  imageUrl: process.env.PUBLIC_URL + '/images',
  // export const baseUrl = process.env.REACT_APP_BASEURL || 'http://localhost:8000/api';
}
