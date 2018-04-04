import * as constants from "./constants";
import * as actions from "./actions";  // Importing action functions

describe("This will test all the actions", () => {

    it ("creats an action to set the balance", () => {
        const balance = 0;
        const expectedAction = { type: constants.SET_BALANCE , payload: balance }; // We are expecting our action to create this object with given input !!
        expect(actions.setBalance(balance)).toEqual(expectedAction);
    });

    it("Creates an action to deposit into the balance", () => {
        const deposit = 10;
        const expectedAction = { type: constants.DEPOSIT, payload: deposit  };

        expect(actions.deposit(deposit)).toEqual(expectedAction);
    });
    it("Withdraw the balance from reducer", () => {
        const withdraw = 10;
        const expectedAction = { type: constants.WITHDRAW, payload: withdraw  };

        expect(actions.withdraw(withdraw)).toEqual(expectedAction);
    });
/**
|--------------------------------------------------
| We will do API Test in a different file to reduce confusion !!
|--------------------------------------------------
*/
    // it('Will make an API call for Bitcoin Price', () => {
    //     const balance = 10;
    //     const expectedAction = { type: constants.BIT_COIN_API_CALL, payload:balance  };

    //     expect(actions.bitcoinapicall(balance)).toEqual(expectedAction);
    // });
});
