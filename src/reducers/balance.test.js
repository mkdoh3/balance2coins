import balanceReducer from './balance';
import cookiesBalanceReducer from './balance';

import * as constants from '../actions/constants';
describe('balanceReducer', () => {
  describe('when initializing', () => {
    const balance = 10;
  
    it('sets a balance', () => {
      //the first arg to the reducer is prevState, which is initially undefined
      expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance}))
        .toEqual(balance);
    });

    describe('re-initializing with data from cookies', () => {
      it('reads the balance from cookies', () => {
        expect(cookiesBalanceReducer(undefined, {})).toEqual(balance)
      });
    });
  })

  it('deposits into the balance', () => {
    const deposit = 10;
    const initialState = 5;

    expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit}))
      .toEqual(initialState + deposit);
  });

  it('withdraws from the balance', () => {
    const withdraw = 5;
    const initialState = 10;

    expect(balanceReducer(initialState, { type: constants.WITHDRAW, withdraw}))
      .toEqual(initialState - withdraw);
  });
});