import React from 'react'; 
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

interface UserBtnProps {
  userName: string;
}

const UserBtn: React.FC<UserBtnProps> = ({userName}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary={userName} />
      </ListItemButton>
    </ListItem>
  )
}

export default UserBtn
