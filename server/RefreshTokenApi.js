import axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export function refreshToken() {
  const token = getCookie("jwt");
  const refreshToken = getCookie("refreshToken");
  console.log(refreshToken);

  const headers = {
    Authorization: `Bearer ${token}`,
    // 'Content-Type': 'application/json',
    // "lang":"en"
  };

  const data = {
    refreshToken: refreshToken,
    jwt:token
  };

  const config = {
    headers,
    withCredentials:true
  };

  return axios.post('http://capefserver.myeasycards.com/Account/RefreshToken',config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

function getCookie(name) {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`));

  return cookieValue ? cookieValue.split('=')[1] : null;
}
