import React, {Fragment, useEffect, useState} from 'react';
import { Container, CssBaseline, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { getRandomUserList, nameRequest } from '../utils/api';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import {UserList} from '../components/UserList/UserList';
import List from '@mui/material/List';
// import UserBtn from '../UserBtn/UserBtn';  
interface UserListProps {
  users: string[];
}
interface UserBtnProps {
  userName: string;
}



const UserBtn: React.FC<UserBtnProps> = ({userName}) => {

  const userBtnHandler = () => nameRequest(userName); 

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={userBtnHandler}
      >
        <ListItemText primary={userName} />
      </ListItemButton>
    </ListItem>
  )
}

const UserList: React.FC<UserListProps> = ({users}) => {
return (
  <List>
    {users.map( (user, index) => <UserBtn key={index} userName={user}/>)}
  </List>
)
}

function App() {
  const [users, setUsers] = useState<string[]>([]);
  
  const setUserListFromFetch = () => {
    getRandomUserList()
    .then( data => setUsers(data));
  }

  useEffect(() => {
    setUserListFromFetch();
    const interval = setInterval(() => {
      setUserListFromFetch(); 
    }, 5000)
    return () => clearInterval(interval);
  },[]);


  return (<Fragment>
    <CssBaseline />
    <Box bgcolor="#eeeeee" minHeight="100vh" p={4}>
      <Container maxWidth="sm">
        <Paper>
          <Box p={4}>
            {users[0] && <Typography variant="h4">users to render</Typography>}
          </Box>
        </Paper>
        { users.length > 0 && <UserList users={users}/> }
      </Container>
    </Box>
  </Fragment>);
}

export default App;
