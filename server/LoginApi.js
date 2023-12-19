import axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export function login(username, password) {
  const data = {
    username: username,
    password: password
  };
  // const token = localStorage.getItem("token"); 
  const headers = {
    'Content-Type': 'application/json',
    'lang':"en"
  };
  const config = {
    headers,
    withCredentials:true
  };
  return axios.post('http://capefserver.myeasycards.com/Account/LoginUser', data,)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}


