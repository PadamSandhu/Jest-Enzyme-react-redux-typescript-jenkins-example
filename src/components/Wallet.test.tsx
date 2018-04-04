import * as React from "react";
import { shallow } from "enzyme";
import { Wallet } from "./Wallet";   // Can't Add Redux-store component !!

describe("Wallet", () => {
    const mockDeposit = jest.fn();    // This is the mock Function which is required to simulate an action !!
    const mockWithdraw = jest.fn();
    const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };    // Step 2 for action, provide a key in the props!!
    const wallet = shallow(<Wallet {...props} />);
    it("renders properly", () => {
        expect(wallet).toMatchSnapshot();
    });

    // Check if the balance is available as props !!
    it("displays the balance from props", () => {
        expect(wallet.find(".balance").text()).toEqual("Wallet balance: 20");
    });

    it("Creates an input to deposit or withdraw into balance", () => {
        expect(wallet.find(".input-wallet").exists()).toBe(true);
    });

    describe("when the user types into the wallet input", () => {
        const userBalance = "25";

        beforeEach(() => {
            wallet.find(".input-wallet").simulate("change" , { target: {value: userBalance}});
        });

        it("Updates the local balance to the `state` and converts the number into string", () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        });


        describe("The user wants to make a deposit", () => {
            beforeEach(() => wallet.find(".btn-deposit").simulate("click"));

            it("Dispathces the `deposit()` it recives from props with local balance", () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });
        });

        describe("The user wants to make a WithDrawl", () => {
            beforeEach(() => wallet.find(".btn-withdrawl").simulate("click"));

            it("Dispathces the `withdraw()` it recives from props with local balance", () => {
                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });
        });

    });


});
