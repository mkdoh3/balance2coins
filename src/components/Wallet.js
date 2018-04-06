import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';


export class Wallet extends Component {
  constructor() {
    super();
    this.state = { inputAmount: null };
  }

  updateInputAmount = event => {
    this.setState({
      inputAmount: parseInt(event.target.value, 10)
    });
  }

  deposit = () => this.props.deposit(this.state.inputAmount);

  withdraw = () => this.props.withdraw(this.state.inputAmount);
  
  render() {
    return (
      <div>
        <h3 className= "balance">wallet balance: {this.props.balance}</h3>
        <br />
        <input 
          className="input-wallet"
          onChange={this.updateInputAmount}  
        />
        <button className='btn-deposit' onClick={this.deposit}>deposit</button>
        <button className="btn-withdraw" onClick={this.withdraw}>withdraw</button>
      </div>
    )
  }
}

export default connect(state => { return { balance: state.balance } }, { deposit, withdraw })(Wallet);