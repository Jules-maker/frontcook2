import axios from "axios";

const API_URI = "http://51.75.161.94:5000/api";

export async function login(username, password) {
  axios
    .post(API_URI + "/login_check", {
      username: username,
      password: password,
    })
    .then((response) => {
      if (response.status == 200) {
        localStorage.setItem("auth_token", json.parse(response.data).token);
      }
    });
}

export async function register(
  email,
  firstname,
  lastname,
  agreeTerms,
  plainPassword
) {
  axios.post(API_URI + "/user/register", {
    email: email,
    firstname: firstname,
    lastname: lastname,
    agreeTerms: agreeTerms,
    plainPassword: plainPassword,
  });
}
