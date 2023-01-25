const authToken = () => {
  return localStorage.getItem("boilerplate_authtoken") || "";
};

export default authToken;
