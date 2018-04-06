import React, { Component } from 'react';
import Wallet from './Wallet';
import Conversion from './Conversion';

const App = () => {
    return (
      <div>
        <h2>Balance 2 Coinz</h2>
        <hr />
        <Wallet />
        <hr />
        <Conversion />
      </div>
    )
}

export default App;