import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
  const chartBarMaxValue = 0;

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
