import axios from "axios";


export function filterMembers(membertypeid, catid,regionid,districtid,areaid,villageid,agentid,statusid) {
  const data = {
    membertypeid:membertypeid, 
catid:catid, 
regionid:regionid, 
districtid:districtid,
areaid:areaid,
villageid:villageid,
 agentid:agentid,
 statusid:statusid
  };
  const token=getCookie("jwt")
 
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  const config = {
    headers: headers, // Include headers in the config object
  };

  return axios.post('http://capefserver.myeasycards.com/Members/FilterMembers', data,config)
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


