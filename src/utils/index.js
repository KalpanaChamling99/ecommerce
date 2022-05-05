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

export const getTrimmedString = (data, maxLength = 250) => {
  let trimmedString = data?.substr(0, maxLength);

  trimmedString =
    trimmedString?.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
    ) + "...";

  return trimmedString;
};
