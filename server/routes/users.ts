import express from 'express'; 
import fs from 'fs'; 
import path from 'path'; 
import { userList } from '../utils/namesList';
import { setUserListLengthRange } from '../utils/setUserListLengthRange'; 
import { getRandomUserList } from '../utils/getRandomUserList'; 


const router = express.Router();
const filePath = path.join(__dirname,'../','counter.txt');

router.get('/', (req, res) => {
  res.json(getRandomUserList(setUserListLengthRange(5,8), userList)); 
})

router.get('/:name', (req, res) => {
  fs.readFile( filePath, 'utf8', (err, data) => {
    if(err){
      console.log('ERROR!');
      console.log(err);
    } else {
      console.log(data);
    }
  }); 

  // console.log(req.params.name);
  res.json({hi: 'aaaa'}); 

})

export default router;
