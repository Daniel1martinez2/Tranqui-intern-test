import { UserType } from "../types/user";
import { getNewUser } from "./getNewUser";

export const getRandomUserList = (length: number, userListSeed: UserType[]) => {
  const finalUserList: UserType[] = []; 
  for (let index = 0; index < length; index++) {
    getNewUser(finalUserList, userListSeed)
  }
  return finalUserList; 
}