import express from 'express'; 
import fs from 'fs'; 
import path from 'path'; 
import { userList } from '../utils/namesList';
import { setUserListLengthRange } from '../utils/setUserListLengthRange'; 
import { getRandomUserList } from '../utils/getRandomUserList'; 
import { userObjListToString } from '../utils/userObjListToString'; 
import { stringToUserObjList } from '../utils/stringToUserObjList';

const router = express.Router();
//txt file path
const filePath = path.join(__dirname,'../','counter.txt');

router.get('/', (req, res) => {
  res.json(getRandomUserList(setUserListLengthRange(5,8), userList));
});

router.get('/:name', (req, res) => {
  //Get the value from the request
  const name = req.params.name;
  //Initialize the variable which represents the string which will set the txt file
  let txtUsers = '';

  //Reading the file 
  fs.readFile( filePath, 'utf8', (err, data) => {
    if(err) {
      res.send('ERROR'); 
      return
    }
    //Ensure no blank spaces
    const leanData = data.trim();
    
    if(!leanData){
      //If there is no data at the very start
      //creating a new line and counting
      txtUsers = `${name}: ${1}\n`;
      // Set the txt file
      fs.writeFileSync(filePath, txtUsers);
      res.json([{name, times: 1}]);
      return
    };

    const usersData = leanData.split('\n');
    const usersFromTxt = stringToUserObjList(usersData);
    const currentUserIndex = usersFromTxt.findIndex( user => user.name === name );

    if(currentUserIndex === -1 ){
      //If the requested user is is not found in the list
      // Set the main string according to the users data 
      txtUsers = userObjListToString(usersFromTxt)
      // Adding the current requested user
      txtUsers+= `${name}: ${1}\n`;
      // Set the txt file
      fs.writeFileSync(filePath, txtUsers );
      usersFromTxt.push({name, times: 1});
      res.json(usersFromTxt);
      return
    }

    //Wether the requested user already exist in the user list
    // Set the user repetition value
    usersFromTxt[currentUserIndex].times++;
    txtUsers = userObjListToString(usersFromTxt);
    // Set the txt file
    fs.writeFileSync(filePath, txtUsers );
    res.json(usersFromTxt);

  }); 
})

export default router;
