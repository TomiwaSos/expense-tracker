import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "car insureance",
      amount: 294.67,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e2",
      title: "Car",
      amount: 100.67,
      date: new Date(2021, 5, 11),
    },
    {
      id: "e3",
      title: "Paper",
      amount: 50.67,
      date: new Date(2021, 16, 6),
    },
    {
      id: "e4",
      title: "Card",
      amount: 1294.67,
      date: new Date(2021, 17, 6),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
