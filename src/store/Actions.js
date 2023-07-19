export const SET_RANDOM_NUMBER = "SET_RANDOM_NUMBER";

export const setRandomNumber = (number) => ({
  type: SET_RANDOM_NUMBER,
  payload: number,
});
