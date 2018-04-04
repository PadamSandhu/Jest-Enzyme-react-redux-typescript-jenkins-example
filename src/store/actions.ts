import * as constants from "./constants";

export const setBalance = (balance) => ({
  type: constants.SET_BALANCE,
   payload: balance
});

export const deposit = (deposit) => ({
  type: constants.DEPOSIT,
  payload: deposit
});

export const withdraw = (withdraw) => ({
  type: constants.WITHDRAW,
  payload: withdraw
});

export const bitcoinapicall = (balance) => ({
  type: constants.BIT_COIN_API_CALL,
  payload: balance
});
