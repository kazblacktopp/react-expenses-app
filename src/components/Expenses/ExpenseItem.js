import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const amount = props.amount.toFixed(2);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <p className="expense-item__price">${amount}</p>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
