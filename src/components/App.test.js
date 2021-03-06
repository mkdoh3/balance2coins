import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
  it('contains a connected Wallet component', () => {
    
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });
  it('coints a connect Conversion component', () => {
    expect(app.find('Connect(Conversion)').exists()).toBe(true);
  })
});