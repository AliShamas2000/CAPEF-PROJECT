import axios from "axios";



export async function getFilterAgents() {
 
  const token=getCookie("jwt")
 
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  const config = {
    headers: headers,
  };

  try {
        const response = await axios.get('http://capefserver.myeasycards.com/Agents/GetAgentsFilter', config);
        return response.data;
    } catch (error) {
        throw error;
    }
}
function getCookie(name) {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${name}=`));
  
    return cookieValue ? cookieValue.split('=')[1] : null;
  }


