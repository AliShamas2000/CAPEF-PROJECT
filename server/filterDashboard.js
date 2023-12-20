import axios from "axios";


export function filterDashboard(membertypeid,fromdate,todate,statusid) {
  const data = {
    membertypeid: membertypeid,
    fromdate:fromdate,
    todate:todate,
    statusid: statusid
  };
  const token = getCookie("jwt")

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  const config = {
    headers: headers,
  };

  return axios.post('http://capefserver.myeasycards.com/Members/FilterDashboard', data, config)
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


