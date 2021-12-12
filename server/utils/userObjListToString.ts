//Function which returns an string from a given user list 
export const userObjListToString = (users: {name:string, times: number}[]) => {
  let usersString = ''; 
  users.forEach(user => {
    const {name, times} = user;
    usersString+= `${name}: ${times}\n`;
  })
  return usersString; 
}