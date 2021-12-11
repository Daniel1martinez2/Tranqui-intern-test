// Function which returns an random number according to a given range
export const setUserListLengthRange = (start: number, end: number) => {
  return Math.round((Math.random()*(end-start)+start));
}