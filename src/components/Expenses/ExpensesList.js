import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpenseList(props) {
  return (
    <ul className="expenses-list">
      {props.items.map(item => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
