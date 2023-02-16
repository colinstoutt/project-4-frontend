// // GETS TOKEN FROM LOCAL STORAGE
// function getToken() {
//   let token = localStorage.getItem("csrftoken");
//   if (token) {
//     // Check if expired, remove if it is
//     let expired = isTokenExpired(token);
//     if (expired) {
//       localStorage.removeItem("token");
//       token = null;
//     }
//   }
//   return token;
// }
// // EXTRACT LOGGED IN USER DATA FROM TOKEN
// function getUserFromToken() {
//   const token = getToken();
//   const user = token ? JSON.parse(atob(token.split(".")[1])).user : null;
//   console.log(user);
//   return user;
// }
// // CHECK IF CURRENT TOKEN IS EXPIRED
// function isTokenExpired(token) {
//   const payload = JSON.parse(atob(token.split(".")[1]));
//   // JWT's expiration is expressed in seconds, not milliseconds, so convert
//   return payload.exp < Date.now() / 1000;
// }
// // REMOVES TOKEN IN LOCAL STORAGE
// function removeToken() {
//   localStorage.removeItem("token");
// }

// export { getToken, removeToken, getUserFromToken, isTokenExpired };
