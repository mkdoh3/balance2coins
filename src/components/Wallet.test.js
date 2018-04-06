import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw }
  const wallet = shallow(<Wallet {...props} />);
  
  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });
  it('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('wallet balance: 20');
  });

  it('creates an input to deposit or withdraw', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  });

  describe('when the user tpyes into the input', () => {
    const inputAmount = '25';
    beforeEach(() => {
      wallet.find('.input-wallet')
        .simulate('change', { target: { value: inputAmount }});
    });

    it('updates local wallet inputAmount in `state` and converts it to a number', () => {
      expect(wallet.state().inputAmount).toEqual(parseInt(inputAmount, 10));
    });

    describe('the user makes a deposit', () => {
      beforeEach(() => wallet.find('.btn-deposit').simulate('click'));

      it('dispatches the `deposit()` it receives from props with the inputAmount', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(inputAmount, 10));
      });
    });

    describe('the user withdraws', () => {
      beforeEach(() => wallet.find('.btn-withdraw').simulate('click'));

      it('dispatches the `withdraw()` that was received from props with the inputAmount', () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(inputAmount, 10))
      })
    })
  });
});

