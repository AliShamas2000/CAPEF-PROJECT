import axios from "axios";

export function login(username, password) {
  const data = {
    username: username,
    password: password
  };
  // const token = localStorage.getItem("token"); 
  // const headers = {
  //    Authorization: `Bearer ${token}`,
  //   'Content-Type': 'application/json',
  // };
  return axios.post('http://capefserver.myeasycards.com/Account/LoginUser', data,
  // {headers}
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
