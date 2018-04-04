import { BIT_COIN_API_CALL } from "./constants";

export const fetchBitcoin = () => {
    return dispatch => {
        return fetch("https://api.coindesk.com/v1/bpi/currentprice/CAD.json")
        .then(response => response.json())
        .then(json => dispatch({ type: BIT_COIN_API_CALL, payload: json }));
    };
};