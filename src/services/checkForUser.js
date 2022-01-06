import api from "./api";

const checkForUser = async (username) => {
  let statusCode = 0;
  await api
    .get(`users/${username}`)
    .then(() => {
      statusCode = 200;
    })
    .catch(function (error) {
      statusCode = error.request.status;
    });

  return statusCode;
};

export { checkForUser };
