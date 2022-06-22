import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
  const chartBarValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const chartBarMaxValue = Math.max(...chartBarValues);

  return (
    <div className="chart">
      {props.dataPoints.map(bar => (
        <ChartBar
          key={bar.label}
          label={bar.label}
          value={bar.value}
          maxValue={chartBarMaxValue}
        />
      ))}
    </div>
  );
}

export default Chart;
