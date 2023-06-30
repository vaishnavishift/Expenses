import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () =>{
    const [enteredTitle, setEnteredTitle] = useState("");

    const TitleChangeListener = (event)=>{
        setEnteredTitle(event.target.value);
        // console.log(event.target.value);
    }; 
    const [enteredAmt,setEnteredAmt]=useState('');
    const AmountChangeListener = (event)=>  
    {
        setEnteredAmt(event.target.value);

    };
    const [enteredDate, setEnteredDate] = useState();
    const DateChangeListener =(event)=>
    {
            setEnteredDate(event.target.value);
    };
    const submitHandler=(event)=>
    {
        event.preventDefault();
         const ExpenseData ={
            title:enteredTitle,
            amount:enteredAmt,
            date:new Date(enteredDate)
         }
         console.log(ExpenseData);
    };

    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={TitleChangeListener} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="1" max="500" onChange={AmountChangeListener} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31"  onChange={DateChangeListener}/>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    );


};
export default ExpenseForm;