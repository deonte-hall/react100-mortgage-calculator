import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props, balance, rate, term){
    super(props);
    this.balance = balance;
    this.rate = rate;
    this.term = term;
  }
  
  statusChange(){
    console.log("status changed");
  }
  render(){
    return (
      <div className='container'>
        {
          <div className='user-input'>
          <h3>Mortgage Calculator</h3>
              <input type="number" name='balance' id='balance' value={this.balance} onChange="statusChange()"/>            
              <input type="number" name='rate' id='rate' step={0.01} value={this.rate} onChange="statusChange()"/>
              <select name="term" id="term" value={this.term} onChange='statusChange()'></select>
              <button name='submit' id='submit' onClick={this.statusChange()}>Submit</button>
            <div className='response-container' id='output'>
            </div>
          </div>                                   
        }
      </div>
    )
  }
}