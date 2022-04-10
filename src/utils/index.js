import decode from 'jwt-decode';

export const isLoggedIn = () => {
  return localStorage.getItem("token") ? true : false;
};

export const checkIfTokenHasExpired = () => {
  let hasExpired = false;
  const token = localStorage.getItem("token");

  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      hasExpired = true;
    }
  }
  return hasExpired;
};
