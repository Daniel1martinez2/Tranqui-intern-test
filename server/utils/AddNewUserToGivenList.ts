import { UserType } from '../types/user'; 
import { getRandomIndex } from './getRandomIndex'; 

//Function which returns the list of users. And, check wether each user is unique before adding it to the list
export const AddNewUserToGivenList = ( listToPush: UserType[], seedList: UserType[]) => {
  let newUser = seedList[getRandomIndex(seedList.length)];
  while (listToPush.includes(newUser)){
    newUser = seedList[getRandomIndex(seedList.length)]; 
  }
  listToPush.push(newUser); 
}