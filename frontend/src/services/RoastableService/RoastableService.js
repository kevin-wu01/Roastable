// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');

const authObject = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

export function loginUser(credentials) {
  return axios
    .post('http://localhost:4321/users/login', credentials)
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
}

export function createUser(firstName, lastName, username, password) {
  return axios
    .post('http://localhost:4321/users', { firstName, lastName, username, password })
    .then((res) => {
      return { status: res.status, message: res.data.message };
    })
    .catch((err) => console.log(err));
}

export function validateToken(token) {
  axios.post('http://localhost:4321/users/validate', null, authObject(token)).then((validation) => {
    console.log(validation);
    console.log(validation.data.code === 1);
    return validation.data.code === 1;
  });
}

export function getUserData(token) {
  return axios
    .get('http://localhost:4321/users/get', authObject(token))
    .then((userData) => {
      return userData.data;
    })
    .catch((err) => console.log(err));
}

export function getUserConversations(token) {
  return axios
    .get('http://localhost:4321/conversation/get', authObject(token))
    .then((userData) => {
      return userData.data;
    })
    .catch((err) => console.log(err));
}
