export const stringToUserObjList = (users: string[]) => {
  return users.map( user => {
    const currentUserData = user.split(':');
    return ({
        name: currentUserData[0],
        times: parseInt(currentUserData[1].trim()),
      })
   })
};