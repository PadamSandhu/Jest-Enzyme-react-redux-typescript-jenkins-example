import balanceReducer from "./reducers";
// tslint:disable-next-line:no-duplicate-imports
import balanceReducer2 from "./reducers";
import * as constants from "./constants";

describe("balanceReducer", () => {
    const balance = 10;

    describe("when initializing", () => {
        it("Sets a balance", () => {
            expect(balanceReducer(undefined, { type: constants.SET_BALANCE, payload: balance })).toEqual(balance);
        });

        describe("Then re-initializing", () => { // checking if Cookies are getting loaded properly !!
            it("reads the balance from cookies", () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });

    });

    it("deposit into the balance", () => {
        const deposit = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, { type: constants.DEPOSIT, payload: deposit }))
            .toEqual(initialState + deposit);
    });

    it("Withdraws from the balance", () => {
        const withdraw = 10;
        const initialState = 15;

        expect(balanceReducer(initialState, { type: constants.WITHDRAW, payload: withdraw }))
            .toEqual(initialState - withdraw);
    });
});