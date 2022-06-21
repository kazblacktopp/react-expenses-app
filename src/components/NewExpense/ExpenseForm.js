import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  function saveEnteredTitle(event) {
    setEnteredTitle(event.target.value);
  }

  function saveEnteredAmount(event) {
    setEnteredAmount(event.target.value);
  }

  function saveEnteredDate(event) {
    setEnteredDate(new Date(event.target.value));
  }

  function submitNewExpense(event) {
    event.preventDefault();
    props.onSubmitExpense(enteredTitle, enteredAmount, enteredDate);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    event.target.reset();
  }

  return (
    <form onSubmit={submitNewExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={saveEnteredTitle}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="title"
            name="title"
            onChange={saveEnteredAmount}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            id="date"
            name="date"
            onChange={saveEnteredDate}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
