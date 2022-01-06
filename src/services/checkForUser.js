import api from "./api";

const checkForUser = async (username) => {
  let statusCode = 0;
  await api
    .get(`users/${username}`)
    .then((response) => {
      console.log(response.data.login);
      statusCode = 200;
    })
    .catch(function (error) {
      statusCode = error.request.status;
      console.log(error.request.status);
    });

  return statusCode;
};

export { checkForUser };
