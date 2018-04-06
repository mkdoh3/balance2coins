import React from 'react';
import { shallow, mount } from 'enzyme';
import { Conversion } from './Conversion';

describe('Conversion', () => {
  const props = { balance: 10, bitcoin: {} };
  let conversion = shallow(<Conversion {...props}/>);

  it('renders properly', () => {
    expect(conversion).toMatchSnapshot();
  });

  describe('when mounted', () => {
    const mockFetchBitcoin = jest.fn();
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      conversion = mount(<Conversion {...props} />)
    });

    it('dispatches the `fetchBitcoin()` method it received from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props.bitcoin = { bpi: { USD: { rate: '1,000'} } };
      conversion = shallow(< Conversion {...props} />);
    });
    it('displays the correct bitcoin value', () => {
      expect(conversion.find('h3').text()).toEqual('balance in coinz: 0.01')
    });
  });

});