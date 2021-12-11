import express from 'express'; 

const router = express.Router();

type UserType = string; 

//Names
const userList: UserType[] = [
  'Sebastian',
  'Daniel',
  'Sofia',
  'Elizabeth',
  'John',
  'Sherlock',
  'Esteban',
  'Angelica',
  'Alexander',
  'Hamilton',
  'Alex',
  'Rodrigo',
  'Andrew'
];

// Function which returns an random index according to a given length
const getRandomIndex = (length: number) => {
  return Math.floor(Math.random()*length);
}

// Function which returns an random number according to a given range
const setUserListLengthRange = (start: number, end: number) => {
  return Math.round((Math.random()*(end-start)+start));
}

//Function which returns the list of users. And, check wether each user is unique before adding it to the list
const getNewUser = ( listToPush: UserType[], seedList: UserType[]) => {
  let newUser = seedList[getRandomIndex(seedList.length)];
  while (listToPush.includes(newUser)){
    newUser = seedList[getRandomIndex(seedList.length)]; 
  }
  listToPush.push(newUser); 
}



const getRandomUserList = (length: number, userListSeed: UserType[]) => {
  
  const finalUserList: UserType[] = []; 
  for (let index = 0; index < length; index++) {
    getNewUser(finalUserList, userListSeed)
  }
  return finalUserList; 
}

router.get('/users', (req, res, next) => {
  res.json(getRandomUserList(setUserListLengthRange(5,8), userList)); 
})

export default router;
