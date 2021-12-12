import { UserType } from "../types/user";
import { AddNewUserToGivenList } from "./AddNewUserToGivenList";

export const getRandomUserList = (length: number, userListSeed: UserType[]) => {
  const finalUserList: UserType[] = []; 
  for (let index = 0; index < length; index++) {
    AddNewUserToGivenList(finalUserList, userListSeed)
  }
  return finalUserList; 
}