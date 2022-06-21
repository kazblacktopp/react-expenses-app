import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpenseList(props) {
  if (props.items.length === 0)
    return (
      <h2 className="expenses-list__fallback">
        No expenses for {props.filteredYear}.
      </h2>
    );

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
