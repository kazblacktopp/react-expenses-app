import './ExpensesFilter.css';

function ExpensesFilter(props) {
  function yearSelectHandler(event) {
    props.onExpenseFilter(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="expFilter">Filter by Year</label>
        <select id="expFilter" name="expFilter" onChange={yearSelectHandler}>
          <option value="all">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
