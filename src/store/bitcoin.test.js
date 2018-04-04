// https://api.coindesk.com/v1/bpi/currentprice/CAD.json
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { BIT_COIN_API_CALL } from './constants';
import { fetchBitcoin } from './bitcoin';
import { mockResponse } from './SampleApiData';

const createMockStore = configureMockStore([thunk]);            // Applying middleware while configuring the store !!
const store = createMockStore({ bitcoin: {} });                // Creating Redux-MockStore which has an initial object !       


// Data which we expect from the API get request !!


fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice/CAD.json',
    mockResponse);

it('Creates an async action to fetch the bitcoin value', () => {
   const expectedActions = [ {payload:mockResponse, type:BIT_COIN_API_CALL }];
   
  return store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
   });

});