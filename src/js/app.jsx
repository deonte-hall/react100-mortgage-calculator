import { values } from 'lodash';
import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props){
    super (props);
    this.state = {
      balance: 0,
      rate: 0.00,
      term: "15",
      output: " " 
    };

  }

    handleChange(event) {
      this.setState({
        balance : document.getElementById("")
      });
    }

    

    calculate(balance, rate, term) {
      //M is your monthly payment.
      //P is your principal.
      //r is your monthly interest rate, calculated by dividing your annual interest rate by 12.
      //n is your number of payments (the number of months you will be paying the loan).
      const p = this.state.balance;
      const r = (this.state.rate/100)/12;
      const n = this.state.term * 12;
    }
    handleClick(){
      const result = this.calculate();
      this.setState ({
        output: `${result.toFixed(2)} is your monthly payment!` 
      });
    }

  render() {
    return (
      <div className='container'>
        <h3>My Mortgage Calculator</h3>
        <form className="form-horizontal">
          <div className="form-group">
            {/* <label htmlFor="loanBalance" className="col-sm-2 control-label">Loan Balance ($USD)</label> */}
            <div className="col-sm-10\">
              <h3>Loan Balance:</h3>
            {/*input loan balance*/}
            <input onChange={this.handleChange} value={this.state.balance} 
            type="number" 
            name="balance" 
            id ="loanBalance" 
            placeholder="Enter Loan Balance"/>
            </div>
          </div>
          < div className="form-group">
           <h3>Interest Rate</h3>
            {/*input interest rate*/}
            <input onChange={this.handleChange} 
            value={this.state.rate} 
            name="rate" 
            type="number" 
            step=".01" 
            id="interestRate" 
            placeholder="Enter APR"/>
          </div>
          <div className="form-group">   
            <h3>Loan Term:</h3>             
                {/*select loan term in years*/} 
                  <select onChange={this.handleChange} 
                  value={this.state.term} 
                  name="term" 
                  id="loanTerm">
                    <option value="15">15</option>
                    <option value="30">30</option>
                  </select>
          </div>
          <div className="form-group">
            <div className="submit">
            <button name="submit"
            onClick={(e) => {
              this.handleClick(e);
            }}>Calculate</button>
            </div>
          </div>
          <div name="output" 
          id="output">{this.state.output}</div>
        </form>
      </div>

    );
  }
}