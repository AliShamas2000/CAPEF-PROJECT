import axios from "axios";


export function filterAgents(regionid, districtid, areaid, villageid, statusid) {
  const data = {
    regionid: regionid,
    districtid: districtid,
    areaid: areaid,
    villageid: villageid,
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

  return axios.post('http://capefserver.myeasycards.com/Agents/FilterAgents', data, config)
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


