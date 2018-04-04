import { BIT_COIN_API_CALL } from "./constants";

const initialState = {

};

export default (state = initialState, action) => {
  switch (action.type) {

  case BIT_COIN_API_CALL:
    return action.payload;

  default:
    return state;
  }
};
