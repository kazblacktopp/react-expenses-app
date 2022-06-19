import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import './Expenses.css';

function Expenses(props) {
  const expenses = props.items;

  return (
    <Card className="expenses">
      <ExpensesList items={expenses} />
    </Card>
  );
}

export default Expenses;
