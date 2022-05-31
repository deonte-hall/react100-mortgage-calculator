import { values } from 'lodash';
import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(){
    super();
    this.state = {
      hasBeenClicked: false,
      balance: null,
      term: null,
      rate: null
    };
  }
  
  statusChange(balance){
    console.log(balance)
  }

  calculate(balance, rate, term){

  }
  render(){
    return (
      <div className='container'>
        {
          <div className='user-input'>
          <h3>Mortgage Calculator</h3>
              <input type="number" name='balance' id='balance' value={this.balance} onChange={this.statusChange}/>            
              <input type="number" name='rate' id='rate' step={0.01} value={this.rate} onChange={this.statusChange}/>
              <select name="term" id="term" value={this.term} onChange={this.statusChange}></select>
              <button name='submit' id='submit' onClick={this.statusChange()}>Submit</button>
            <div className='response-container' id='output'>

            </div>
          </div>                                   
        }
      </div>
    )
  }
}