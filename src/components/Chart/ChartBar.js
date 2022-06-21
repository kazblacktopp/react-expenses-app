import './ChartBar.css';

function ChartBar(props) {
  const barFillPercentage = (props.value / props.maxValue) * 100;

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillPercentage }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
