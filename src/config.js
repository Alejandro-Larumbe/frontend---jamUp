module.exports = {
  baseUrl:
    process.env.NODE_ENV === "development"
      ? 'http://localhost:8000/api'
      : "https://jamupjammer.herokuapp.com/api",
  // export const baseUrl = process.env.REACT_APP_BASEURL || 'http://localhost:8000/api';
  imageUrl:
    process.env.NODE_ENV === "development"
      ? process.env.PUBLIC_URL + '/images'
      : 'https://jamup.s3.us-east-2.amazonaws.com'
}
