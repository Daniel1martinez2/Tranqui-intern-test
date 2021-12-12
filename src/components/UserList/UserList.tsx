import React from 'react';
import List from '@mui/material/List';
import UserBtn from '../UserBtn/UserBtn'; 

interface UserListProps {
  users: string[];
}

export const UserList: React.FC<UserListProps> = ({users}) => {
  return (
    <List>
      {users.map( (user, index) => <UserBtn key={index} userName={user}/>)}
    </List>
  )
}

// export default UserList
