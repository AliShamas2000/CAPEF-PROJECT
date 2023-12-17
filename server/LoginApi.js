import axios from "axios";

export function login(username, password) {
  const data = {
    username: username,
    password: password
  };

  return axios.post('http://capefserver.myeasycards.com/Account/LoginUser', data
  )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Login failed:", error);
      throw error;
    });
}
