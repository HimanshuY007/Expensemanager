import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const {transactions}= useContext(GlobalContext);
  const amounts = transactions.map((e)=>(e.amount));
  const income = amounts.reduce((sum, item)=>{
    if (item>=0)
    sum+=item;
    return sum;
  }, 0).toFixed(2);
  const expense = amounts.reduce((sum, item)=>{
    if (item<0)
    sum+=Math.abs(item);
    return sum;
  }, 0).toFixed(2);

    return ( 
        <React.Fragment>
          <div className = "inc-exp-container">
        <div>
          <h4>Income</h4>
    <p className="money plus">{income}Rs</p>
        </div>
        <div>
          <h4>Expense</h4>
    <p className="money minus">-{expense}Rs</p>
        </div>
        </div>
        </React.Fragment>
     );
}
 
export default IncomeExpenses;