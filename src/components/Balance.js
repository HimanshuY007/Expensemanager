import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((sum, item)=>(sum += item), 0).toFixed(2);
    return ( 
        <React.Fragment>
        <h4>Your Balance</h4>
    <h1>{total}Rs</h1>
        </React.Fragment>
     );
}
 
export default Balance;