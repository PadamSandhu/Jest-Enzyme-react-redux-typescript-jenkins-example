import bitcoinReducer from "./bitcoinReducer";
import { BIT_COIN_API_CALL } from "./constants";
import {mockResponse} from "./SampleApiData";

describe("bitcoinReducer", () => {

   it("fetches and sets the bitcoin data", () => {
       expect(bitcoinReducer({}, { type: BIT_COIN_API_CALL, payload: mockResponse }))
       .toEqual(mockResponse);
   });
});
