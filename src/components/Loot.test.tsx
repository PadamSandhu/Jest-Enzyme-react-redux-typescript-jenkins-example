import * as React from "react";
import { shallow } from "enzyme";
import { Loot } from "./Loot";
import { mockResponse } from "../store/SampleApiData";

describe("Loot", () => {
    const mockFetchbitcoin = jest.fn();

    let props: {balance: number, bitcoin: any, fetchBitcoin: any } = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchbitcoin };
    let loot = shallow(<Loot {...props}/>);

    it("Renders Properly", () => {
        expect(loot).toMatchSnapshot();
    });

    // Writing a test if this component will mount !!


    describe("when mounted", () => {

        it("dispathces the `fetchBitcoin()` method it receives from props", () => {
            expect(mockFetchbitcoin).toHaveBeenCalled();
        });
    });

    describe("When there are valid bitcoin props" , () => {
        beforeEach(() => {
            props = { balance: 14000, bitcoin: mockResponse, fetchBitcoin: mockFetchbitcoin};
            loot = shallow(<Loot {...props}/>);
        });
        it("Displays the correct bitcoin", () => {
            const BitCoinConversion = (props.balance) / parseInt(props.bitcoin.bpi.CAD.rate.replace(",", ""), 10);
            expect(loot.find(".bitcoinBalance").text()).toEqual("Bitcoin balance: " + BitCoinConversion);
        });
    });
});