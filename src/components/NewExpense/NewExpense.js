import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function createExpenseData(newTitle, newAmount, newDate) {
    const newExpense = {
      id: Math.random(),
      title: newTitle,
      amount: +newAmount,
      date: newDate,
    };
    props.onNewExpense(newExpense);
    setIsEditing(false);
  }

  function addNewExpenseHandler() {
    setIsEditing(true);
  }

  function cancelExpenseHandler() {
    setIsEditing(false);
  }

  return (
    <Card className="new-expense">
      {!isEditing && (
        <button type="button" onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSubmitExpense={createExpenseData}
          onCancel={cancelExpenseHandler}
        />
      )}
    </Card>
  );
}

export default NewExpense;
