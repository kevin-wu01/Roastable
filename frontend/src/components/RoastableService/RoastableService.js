const axios = require('axios');

export function loginUser(credentials) {
    return axios.post("http://localhost:4321/users/login", credentials)
    .then(data => {return data})
    .catch(err => console.log(err));
}

export function createUser(firstName, lastName, username, password) {
    return axios.post("http://localhost:4321/users", {firstName, lastName, username, password})
    .then(res => {return {status: res.status, message: res.data.message}})
    .catch(err => console.log(err));
}

export function validateToken(token) {
    axios.post("http://localhost:4321/users/validate", null, { headers: {"Authorization" : `Bearer ${token}`} })
    .then((validation) => {
        console.log(validation);
        console.log(validation.data.code === 1);
        return validation.data.code === 1;
    })
}
