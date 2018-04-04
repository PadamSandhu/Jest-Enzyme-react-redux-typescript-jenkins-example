import * as constants from "./constants";
import * as Cookies from "js-cookie";

const BALANCE_COOKIE = "BALANCE_COOKIE";  // Uniqure Id string for this cookie !!
// Cookies allow us to store information on the user’s browser with a unique string.

export default (state = 0, action) => {
  let balance;

  switch (action.type) {

  case constants.SET_BALANCE:
    balance =  action.payload;
    break;
  case constants.DEPOSIT:
    balance = (action.payload + state);
    break;
    case constants.WITHDRAW:
    balance = ( state - action.payload);
    break;
  default:
    balance = parseInt(Cookies.get(BALANCE_COOKIE), 10) || state;
  }
  Cookies.set(BALANCE_COOKIE, balance);   // With any change in the state we are updating our cookie !!

  return balance;
};
