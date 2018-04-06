import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Conversion extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }
  
  convertToBitcoin() {
    const { bitcoin } = this.props;
    if(Object.keys(bitcoin).length === 0) return '';
    return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
  }

  render() {
    return (
      <h3>balance in coinz: {this.convertToBitcoin()}</h3>
    )
  }
}

export default connect(state => state, { fetchBitcoin })(Conversion);