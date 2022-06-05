import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [];
  for (let month = 1; month <= 12; month += 1) {
    chartDataPoints.push({
      label: new Date(`2022-${month}-01`).toLocaleString("en-US", {
        month: "short",
      }),
      value: 0,
    });
  }

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};
export default ExpensesChart;
