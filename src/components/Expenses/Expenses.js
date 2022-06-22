import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('all');
  const filteredExpenses =
    filteredYear === 'all'
      ? props.items
      : props.items.filter(
          item => item.date.getFullYear().toString() === filteredYear
        );

  function expenseFilterHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onExpenseFilter={expenseFilterHandler} />
      <ExpensesChart chartDataPoints={filteredExpenses} />
      <ExpensesList items={filteredExpenses} filteredYear={filteredYear} />
    </Card>
  );
}

export default Expenses;
