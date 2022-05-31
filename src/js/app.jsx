import { values } from 'lodash';
import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(balance, term, rate){
    super();
    this.balance = balance;
    this.term = term;
    this.rate = rate;
    this.state = {
      balance: undefined,
      term: undefined,
      rate: undefined
    };
  }
  
  // statusChange(){
  //   this.setState({
  //     balance: document.getElementById('balance'),
  //     term: document.getElementById('term'),
  //     rate: document.getElementById('rate')
  //   })

  // }

  render(){
    return (
      <div className='container'>
        {
          <div className='user-input'>
          <h3>Mortgage Calculator</h3>
              <input type="number" name='balance' id='balance' value={this.balance} onChange={statusChange()}/>            
              <input type="number" name='rate' id='rate' step={0.01} value={this.rate} onChange={statusChange()}/>
              <select name="term" id="term" value={this.term} onChange={statusChange()}></select>
              <button name='submit' id='submit' onClick={statusChange()}>Submit</button>
            <div className='response-container' id='output'>

            </div>
          </div>                                   
        }
      </div>
    )
  }
}

let setState = () =>{
  console.log("worked")
}