const apiBase = 'http://localhost:3333'; 
const getRandomUserListRoute = '/users';

//Get random user 

export const getRandomUserList = async () => {
  const raw = await fetch(`${apiBase}${getRandomUserListRoute}`, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json'
    }
  });
  const users = await raw.json(); 
  return users; 
}

export const nameRequest = (name: string) => {
  fetch(`${apiBase}${getRandomUserListRoute}/${name}`, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json'
    }
  });
}